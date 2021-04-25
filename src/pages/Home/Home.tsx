import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Select from 'react-select';
import {
    Container, 
    LogoStrateegia, 
    MenuName, 
    MenuContainer,
    DivLogoStrateegia, 
    ContainerLeft, 
    ContainerMain, 
    ContainerSearch, 
    SearchinInput, 
    ContainerBottom, 
    ContainerRight, 
    ContainerRightTop,
    ContainerAnalysis, 
    ContainerAnalysisMenu, 
    ContainerQuantitative, 
    ContainerPeoples, 
    PeoplesIMG, 
    PeoplesDates, 
    P1, 
    P2,
    ContainerCenter, 
    ContainerPeoplesCenter, 
    PeoplesDatesTittle,
    BalaoIMG, 
    QuestionIMG, 
    ContainerEngagement, 
    TextEngagement, 
    TittleEngagement, 
    InformationEngagement,
    Engagement, 
    Pic, 
    ContainerDivision, 
    PicD, 
    BigContainer,
    ContainerDivisionTitle,
    ContainerDivisionDownload,
} from './Home-styles';



const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<any>([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [kits, setKits] = useState<any>([]);
  const [statistics, setStatistics] = useState<any>();
  const axios = require('axios').default;

  const openOrCloseModal = () => {
    setIsModalOpen(prev => !prev);
    const body = document.querySelector('body');
    if (body !== null) {
      body.style.overflow === 'hidden'
        ? (body.style.overflow = 'visible')
        : (body.style.overflow = 'visble');
    }
  };

  const loadProjects = async () => {
    const token = localStorage.getItem('access_token');
    if (token) {
        const res = await axios.get(`https://api.strateegia.digital/projects/v1/project`, {headers:{"Authorization":`Bearer ${token}`}})
        if (res && res.data) {
          let projects: any[] = []
          res.data.map((content: { projects: any }) => {
              projects.push(content.projects[0])
          })
          if (projects != []) {
              const data = projects.map((project: { id: string; title: string }) => ({
                  value: project.id,
                  label: project.title,
              }))
              setProjects(data);
          }
        }
    }
  }

  const loadStatistics = async (projectId: string) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        const res = await axios.get(`https://api.strateegia.digital/projects/v1/project/${projectId}/statistics`, {headers:{"Authorization":`Bearer ${token}`}})
        if (res && res.data) {
            console.log(res.data)
            setStatistics(res.data)
        }
    }
  }

  const loadKits = async (projectId: string) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        const res = await axios.get(`https://api.strateegia.digital/projects/v1/project/${projectId}/content-engagement`, {headers:{"Authorization":`Bearer ${token}`}})
        if (res && res.data) {
            setKits(res.data);
            console.log(res.data);
        }
    }
  }

  const handleSelectedProject = (value: string) => {
      setSelectedProject(value);
      loadKits(value);
      loadStatistics(value);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
    <BigContainer>
        <Modal setModalOpen={setIsModalOpen} modalOpen={isModalOpen}></Modal>
        <ContainerMain>

            {/* MENU HEADER */}

            <Container>
                <DivLogoStrateegia>
                    <LogoStrateegia src= "../img/logo.svg"></LogoStrateegia>
                </DivLogoStrateegia>
                <MenuContainer>
                    <MenuName>Projetos</MenuName>
                    <MenuName>Ferramentas</MenuName>
                    <MenuName>Análises</MenuName>
                    <MenuName>Labs</MenuName>
                </MenuContainer>
            </Container>

            {/* CONTAINER ABAIXO DO MENU */}
            <ContainerBottom>

                <ContainerLeft>
                    <ContainerSearch>
                        <SearchinInput placeholder="Buscar Projeto"></SearchinInput>           
                    </ContainerSearch>   
                    <Select options={projects} placeholder="Projetos" onChange={(event: any) => handleSelectedProject(event.value) } /> 
                </ContainerLeft>

                <ContainerRight>
                    {/*CONTAINER 1*/}
                    <ContainerRightTop> 
                        <P1> ES 2020.1 </P1>
                        <P2>Vinicius Garcia, Danilo Lira, fernando macedo, Ricardo Ferreira dos Santos Junior, Maria Estela, Renato Ferreira, Pedro Falcão, Andre Filho,...</P2>
                    </ContainerRightTop> 

                    {/*CsONTAINER 2*/}
                    <ContainerAnalysis>
                        <ContainerAnalysisMenu>Análise de Engajamento</ContainerAnalysisMenu>
                        <ContainerAnalysisMenu>Análise de Jornada</ContainerAnalysisMenu>
                    </ContainerAnalysis>
                    
                    {/*CONTAINER 3*/}

                    <ContainerCenter >
                        {statistics ? 
                        <>
                            <ContainerQuantitative>
                                
                            <ContainerPeoples>
                                <PeoplesIMG src = "../img/group.png" ></PeoplesIMG>                           
                                <PeoplesDatesTittle>49 Pessoas</PeoplesDatesTittle>
                                <PeoplesDates>1 Administrador(a)</PeoplesDates>
                                <PeoplesDates>4 Mentores</PeoplesDates>
                                <PeoplesDates>44 Membros</PeoplesDates>
                            
                            </ContainerPeoples>

                            <ContainerPeoplesCenter>
                                <QuestionIMG src = "../img/question.png" ></QuestionIMG>                              
                                <PeoplesDatesTittle>{statistics.question_count} Questões Essenciais</PeoplesDatesTittle>
                                <PeoplesDates>{statistics.contents_count} Ferramentas</PeoplesDates>
                                
                            </ContainerPeoplesCenter>

                            <ContainerPeoples>
                                <BalaoIMG src = "../img/balao.png" ></BalaoIMG>                            
                                <PeoplesDatesTittle>{statistics.total_comments_count} falas</PeoplesDatesTittle>
                                <PeoplesDates>{statistics.parent_comments_count} respostas</PeoplesDates>
                                <PeoplesDates>{statistics.reply_comments_count} comentários às respostas</PeoplesDates>
                            
                            </ContainerPeoples>

                        </ContainerQuantitative> 
                        <TextEngagement>Engajamento por ferramenta</TextEngagement>
                    </>
                    : <></>
                        }
                        
                        {/*CONTAINER 4*/}

                        <ContainerEngagement>
                            {kits?.map((kit: { id: string; parent_comments_count: number; people_count: number; question_count: number; reply_comments_count: number; title: string; total_comments_count: number; type: string;}) => (
                                <Engagement>
                                <ContainerDivisionTitle>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>{kit.title}</TittleEngagement>
                                </ContainerDivisionTitle>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>{kit.people_count} pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>{kit.question_count} questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement>{kit.total_comments_count} falas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivisionDownload onClick={openOrCloseModal}>                           
                                    <PicD src ="../img/d.png" ></PicD>
                                    <InformationEngagement>Download</InformationEngagement>
                                </ContainerDivisionDownload>   
                            </Engagement>
                            ))}
                            {/* <Engagement>
                                <ContainerDivision>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>mundo figital</TittleEngagement>
                                    <PicD src ="../img/d.png" onClick={openOrCloseModal} ></PicD>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>37 pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>5 questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement> 219 falas</InformationEngagement>
                                </ContainerDivision>     
                            </Engagement> */}

                            {/* <Engagement>
                                <ContainerDivision>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>mundo figital</TittleEngagement>
                                    <PicD src ="../img/d.png" onClick={openOrCloseModal} ></PicD>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>37 pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>5 questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement> 219 falas</InformationEngagement>
                                </ContainerDivision>     
                            </Engagement>

                            <Engagement>
                                <ContainerDivision>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>mundo figital</TittleEngagement>
                                    <PicD src ="../img/d.png"  ></PicD>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>37 pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>5 questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement> 219 falas</InformationEngagement>
                                </ContainerDivision>     
                            </Engagement>

                            <Engagement>
                                <ContainerDivision>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>mundo figital</TittleEngagement>
                                    <PicD src ="../img/d.png"  ></PicD>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>37 pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>5 questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement> 219 falas</InformationEngagement>
                                </ContainerDivision>     
                            </Engagement>

                            <Engagement>
                                <ContainerDivision>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>mundo figital</TittleEngagement>
                                    <PicD src ="../img/d.png"  ></PicD>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>37 pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>5 questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement> 219 falas</InformationEngagement>
                                </ContainerDivision>     
                            </Engagement>

                            <Engagement>
                                <ContainerDivision>                           
                                    <Pic src ="../img/1.png"  ></Pic>
                                    <TittleEngagement>mundo figital</TittleEngagement>
                                    <PicD src ="../img/d.png"  ></PicD>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/group2.png"  ></Pic>
                                    <InformationEngagement>37 pessoas</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/question2.png"  ></Pic>
                                    <InformationEngagement>5 questões</InformationEngagement>
                                </ContainerDivision>
                                <ContainerDivision>                           
                                    <Pic src ="../img/balao2.png"  ></Pic>
                                    <InformationEngagement> 219 falas</InformationEngagement>
                                </ContainerDivision>     
                            </Engagement> */}
                        </ContainerEngagement>
                    </ContainerCenter>
                </ContainerRight>
            </ContainerBottom>
            

        </ContainerMain>
    </BigContainer>
    </>
  );
};
  
export default Home;
  