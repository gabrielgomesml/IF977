import React from 'react';


import {
  LinksC,
  TittleRef,LinkRef,
  NameLinks,TittleLinks,
  Initials,ContainerRef,
  Container,ContainerLogo,
  ContainerLinks,TextLink,
  TextGadgest,AlignGadgets,
  ContainerTittle,ImgTittle,
  ContainerCenter,TittleCenter,
  TextTittleP,ContainerGadgets,
  TextTittle,ContainerTextTittle,
  ImgGadgets,ContainerTextGadgets,
  TextDescription,ContainerParticipants,
  NameParticipants,SizeContainerParticipants,


 

} from './Template-styles';

const Template: React.FC = () => { 
  return (
    <Container>
      <ContainerLogo>
          <ContainerTittle>
            <ImgTittle src=" ../img/Originals/1.png"></ImgTittle>
            <ContainerTextTittle>
              <TextTittle> TRABALHOS FIGITAIS </TextTittle>
              <TextTittleP> Métodos de Trabalho </TextTittleP>
            </ContainerTextTittle>

            <ContainerGadgets>
              <AlignGadgets>
                <ImgGadgets src=" ../img/pessoas.png"></ImgGadgets>
                <ContainerTextGadgets>
                  <TextGadgest> 37 Pessoas</TextGadgest>
                </ContainerTextGadgets>
              </AlignGadgets>
              <AlignGadgets>
                <ImgGadgets src=" ../img/interrogacao.png"></ImgGadgets>
                <ContainerTextGadgets>
                  <TextGadgest> 5 Questões</TextGadgest>
                </ContainerTextGadgets>
              </AlignGadgets>
              <AlignGadgets>
                <ImgGadgets src=" ../img/text.png"></ImgGadgets>
                <ContainerTextGadgets>
                  <TextGadgest> 219 Falas</TextGadgest>
                </ContainerTextGadgets>
              </AlignGadgets>
            </ContainerGadgets>
          </ContainerTittle>
      </ContainerLogo>
      <ContainerCenter>
        <TittleCenter> Descrição</TittleCenter>
        <TextDescription>
        O trabalho mudou e muito desde a chegada da internet, mas foi agora,
        no último ano, que essa mudança se tornou mais evidente. A pandemia do
        COVID19 acelerou a mudança do trabalho como conhecíamos de físico para figital.
        Traballho remoto é apenas uma ponta desse movimento, quase que a casca sintática de 
        uma transformação semântica que resultou em uma mudança pragmática nos mercados.
        </TextDescription>

        <TittleCenter> Participantes</TittleCenter>
        <SizeContainerParticipants>
          <ContainerParticipants>
            <Initials> LI</Initials>
            <NameParticipants>Lorem Ipsum is simply </NameParticipants>
          </ContainerParticipants>
          <ContainerParticipants>
            <Initials> LI</Initials>
            <NameParticipants>Lorem Ipsum is simply </NameParticipants>
          </ContainerParticipants>
          <ContainerParticipants>
            <Initials> LI</Initials>
            <NameParticipants>Lorem Ipsum is simply </NameParticipants>
          </ContainerParticipants>
        </SizeContainerParticipants>


        <TittleCenter> Referências</TittleCenter>
          <ContainerRef> 
            <TittleRef>Lorem Ipsum</TittleRef>
            <LinkRef href="https://loremipsum.com.br/issimplydummy/textotheprinting" > https://loremipsum.com.br/issimplydummy/textotheprinting</LinkRef>
          </ContainerRef>


        <TittleCenter> Links Compartilhados</TittleCenter>
        <ContainerLinks>
          <Initials> WW</Initials>
          <TextLink>
            <NameLinks>Wilson Wagner dos Santos</NameLinks>
            <TittleLinks> Lorem Ipsum</TittleLinks>
            <LinksC href="https://loremipsum.com.br/issimplydummy/textotheprinting ">https://loremipsum.com.br/issimplydummy/textotheprinting</LinksC>
          </TextLink>
        </ContainerLinks>
      </ContainerCenter>  


    </Container>
   

  );
};



export default Template;


