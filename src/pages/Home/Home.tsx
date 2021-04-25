import React, {  useState } from 'react';
import Modal from '../Modal/Modal';
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
} from './Home-styles';



const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openOrCloseModal = () => {
    setIsModalOpen(prev => !prev);
    const body = document.querySelector('body');
    if (body !== null) {
      body.style.overflow === 'hidden'
        ? (body.style.overflow = 'visible')
        : (body.style.overflow = 'visble');
    }
  };

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

                    <ContainerCenter>

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
                                <PeoplesDatesTittle>453 Questões Essenciais</PeoplesDatesTittle>
                                <PeoplesDates>79 Ferramentas</PeoplesDates>
                                
                            </ContainerPeoplesCenter>

                            <ContainerPeoples>
                                <BalaoIMG src = "../img/balao.png" ></BalaoIMG>                            
                                <PeoplesDatesTittle>2660 falas</PeoplesDatesTittle>
                                <PeoplesDates>2331 respostas</PeoplesDates>
                                <PeoplesDates>329 comentários às respostas</PeoplesDates>
                            
                            </ContainerPeoples>

                        </ContainerQuantitative>

                        <TextEngagement>Engajamento por ferramenta</TextEngagement>
                        
                        {/*CONTAINER 4*/}

                        <ContainerEngagement>
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
                            </Engagement>
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
  