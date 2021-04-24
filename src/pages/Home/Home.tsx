import React, { FormEvent, useState } from 'react';

import {
    Container, LogoStrateegia, MenuName, MenuContainer,

    ContainerLeft, ContainerMain, ContainerSearch, SearchinInput, ContainerBottom, ContainerRight, ContainerSearchBarra, ContainerRightTop, ContainerSearchBarra2,
    ContainerAnalysis, ContainerAnalysisMenu, ContainerQuantitative, ContainerPeoples, ContainerPeoplesDates, PeoplesIMG, PeoplesDates,

    BalaoIMG, QuestionIMG, ContainerEngagement, TextEngagement, Engagement,

    GridTema, GridHexagono, ImgImpressora, ImgDownloads, 

    GridPeople, GridIMG, GridIMG2, GridIMG3, GridName, GridQuestion, GridFalas

} from './Home-styles';

const Home: React.FC = () => {
  return (
    <ContainerMain>

        {/* MENU HEADER */}

        <Container>
            <LogoStrateegia></LogoStrateegia>

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

                    <ContainerSearchBarra></ContainerSearchBarra>

                </ContainerSearch>

                
            </ContainerLeft>

            <ContainerSearchBarra2></ContainerSearchBarra2>  

            <ContainerRight>
                {/*CONTAINER 1*/}
                <ContainerRightTop> <h3>ES 2020.1</h3>
                    Vinicius Garcia, Danilo Lira, fernando macedo, Ricardo Ferreira dos Santos Junior, Maria Estela, Renato Ferreira, Pedro Falcão, Andre Filho,...
                </ContainerRightTop> 

                {/*CsONTAINER 2*/}
                <ContainerAnalysis>
                    <ContainerAnalysisMenu>Análise de Engajamento</ContainerAnalysisMenu>
                    <ContainerAnalysisMenu>Análise de Jornada</ContainerAnalysisMenu>
                </ContainerAnalysis>

                {/*CONTAINER 3*/}

                <ContainerQuantitative>
                    
                    <ContainerPeoples>
                        <PeoplesIMG></PeoplesIMG>
                        <ContainerPeoplesDates>
                            
                            <PeoplesDates><h2>49 Pessoas</h2></PeoplesDates>
                            <PeoplesDates>1 Administrador(a)</PeoplesDates>
                            <PeoplesDates>4 Mentores</PeoplesDates>
                            <PeoplesDates>44 Membros</PeoplesDates>
                        </ContainerPeoplesDates>
                    </ContainerPeoples>

                    <ContainerPeoples>
                        <QuestionIMG></QuestionIMG>
                        <ContainerPeoplesDates>
                            
                            <PeoplesDates><h2>453 Questões Essenciais</h2></PeoplesDates>
                            <PeoplesDates>79 Ferramentas</PeoplesDates>
                        </ContainerPeoplesDates>
                    </ContainerPeoples>

                    <ContainerPeoples>
                        <BalaoIMG></BalaoIMG>
                        <ContainerPeoplesDates>
                            
                            <PeoplesDates><h2>2660 falas</h2></PeoplesDates>
                            <PeoplesDates>2331 respostas</PeoplesDates>
                            <PeoplesDates>329 comentários às respostas</PeoplesDates>
                        </ContainerPeoplesDates>
                    </ContainerPeoples>

                </ContainerQuantitative>

                <TextEngagement><h1>Engajamento por ferramenta</h1></TextEngagement>
                
                {/*CONTAINER 4*/}

                <ContainerEngagement>
                    <Engagement>
                        <GridTema>
                            <GridHexagono></GridHexagono>
                            <GridName><h3>Mundo Figital</h3></GridName>
                            <ImgImpressora></ImgImpressora>
                            <ImgDownloads></ImgDownloads>                                
                        </GridTema>

                        <GridPeople>
                            <GridIMG></GridIMG>
                            <GridName>37 Pessoas</GridName>
                        </GridPeople>

                        <GridQuestion>
                            <GridIMG2></GridIMG2>
                            <GridName>5 Questões</GridName>
                        </GridQuestion>

                        <GridFalas>
                            <GridIMG3></GridIMG3>
                            <GridName>219 Falas</GridName>

                        </GridFalas>
                    </Engagement>

                    <Engagement>
                        <GridTema>
                            <GridHexagono></GridHexagono>
                            <GridName><h3>Mundo Figital</h3></GridName>
                            <ImgImpressora></ImgImpressora>
                            <ImgDownloads></ImgDownloads>                                
                        </GridTema>

                        <GridPeople>
                            <GridIMG></GridIMG>
                            <GridName>37 Pessoas</GridName>
                        </GridPeople>

                        <GridQuestion>
                            <GridIMG2></GridIMG2>
                            <GridName>5 Questões</GridName>
                        </GridQuestion>

                        <GridFalas>
                            <GridIMG3></GridIMG3>
                            <GridName>219 Falas</GridName>

                        </GridFalas>
                    </Engagement>

                    <Engagement>
                    <GridTema>
                            <GridHexagono></GridHexagono>
                            <GridName><h3>Mundo Figital</h3></GridName>
                            <ImgImpressora></ImgImpressora>
                            <ImgDownloads></ImgDownloads>                                
                        </GridTema>

                        <GridPeople>
                            <GridIMG></GridIMG>
                            <GridName>37 Pessoas</GridName>
                        </GridPeople>

                        <GridQuestion>
                            <GridIMG2></GridIMG2>
                            <GridName>5 Questões</GridName>
                        </GridQuestion>

                        <GridFalas>
                            <GridIMG3></GridIMG3>
                            <GridName>219 Falas</GridName>

                        </GridFalas>
                    </Engagement>                    
                </ContainerEngagement>
            </ContainerRight>
        </ContainerBottom>
        

    </ContainerMain>
  );
};
  
export default Home;
  