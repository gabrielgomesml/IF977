import React, {useEffect, useState, useCallback } from 'react';

import { useTemplateContext } from '../../utils/templateContext';

import { useParams } from 'react-router-dom';


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
  Question,


 

} from './Template-styles';

interface ParamTypes {
  kitId: string;
}

interface IKitProps {
  id: string;
  title: string;
  description: string;
  type: string;
  tier: string;
  questions: any;
  references: any;
  created_at: string;
  updated_at: string;
  shared_references: any;
}

const Template: React.FC = ({}) => { 
  const [options, setOptions] = useState<any>([]);
  const [answers, setAnswers] = useState<any>();
  const [kit, setKit] = useState<IKitProps>(() => {
    return {} as IKitProps;
  });
  const axios = require('axios').default;
  const { kitId } = useParams<ParamTypes>();

  const handleOptions = () => {
    if (kitId) {
      setOptions(kitId.split('-'));
    }
  }

  const loadKit =  async () => {
    const token = localStorage.getItem('access_token');
    if (token) {
        const res = await axios.get(`https://api.strateegia.digital/projects/v1/content/${options[0]}/`, {headers:{"Authorization":`Bearer ${token}`}})
        const res2 = await axios.get(`https://api.strateegia.digital/projects/v1/content/${options[0]}/comment/report`, {headers:{"Authorization":`Bearer ${token}`}})
        if (res && res.data && res2 && res2.data) {
            setKit({
              id: res.data.kit.id,
              title: res.data.kit.title,
              description: res.data.kit.description,
              type: res.data.kit.type,
              tier: res.data.kit.tier,
              questions: res.data.kit.questions,
              references: res.data.kit.references,
              created_at: res.data.kit.created_at,
              updated_at: res.data.kit.updated_at,
              shared_references: res.data.attached_links,
            })
            console.log(res.data)
        }
    }
  }
  //"https://api.strateegia.digital/projects/v1/content/600f52ed9c8da6118a35878c/comment/report"

  const loadAnswers = async () => {
    const token = localStorage.getItem('access_token');
    if (token) {
        const res = await axios.get(`https://api.strateegia.digital/projects/v1/content/${options[0]}/comment/report`, {headers:{"Authorization":`Bearer ${token}`}})
        if (res && res.data) {
            setAnswers(res.data);
            console.log(res.data);
        }
    }
  }

  const changeInitials = (name: string) => {
    const initials = name.split(" ");
    return initials[0][0] + initials[initials.length - 1][0]
  }

  useEffect(() => {
    handleOptions()
  }, []);

  useEffect(() => {
    if (options[0]) {
      loadKit();
      loadAnswers();
      //loadKitEngagement();
    }
  }, [options]);

  return (
    <Container>
      <ContainerLogo>
          <ContainerTittle>
            <ImgTittle src=" ../img/Originals/1.png"></ImgTittle>
            <ContainerTextTittle>
              <TextTittle> {kit.title} </TextTittle>
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
        {options[3] === 'true' ? (
          <>
          <TittleCenter> Descrição</TittleCenter>
          <TextDescription>{kit.description}</TextDescription>
          </>
        ) : <></>}
        {options[4] == 'true' ? (
          <>
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
          </>
        ) : <></>}

        {options[5] == 'true' ? (
          <>
          <TittleCenter> Referências</TittleCenter>
            {kit?.references?.map((reference: {description: string; url: string; }) => (
              <ContainerRef> 
                <TittleRef>{reference.description}</TittleRef>
                <LinkRef href={reference.url} target="_blank">{reference.url}</LinkRef>
              </ContainerRef>
            ))}
          </>
        ) : <></>}

        {options[6] == 'true' ? (
          <>
          <TittleCenter> Links Compartilhados</TittleCenter>
            {kit?.shared_references?.map((reference: { author: {  name: string; }, title: string; url: string;}) => (
              <ContainerLinks>
                <Initials>{changeInitials(reference.author.name)}</Initials>
                <TextLink>
                  <NameLinks>{reference.author.name}</NameLinks>
                  <TittleLinks>{reference.title}</TittleLinks>
                  <LinksC href={reference.url} target="_blank">{reference.url}</LinksC>
                </TextLink>
              </ContainerLinks>
            ))}
          </>
        ) : <></>}

        {options[7] == 'true' ? (
          <>
          <TittleCenter>Perguntas</TittleCenter>
            {kit.questions?.map((question: {id: string; question: string; }) => (
              <>
                <Question>{question.question}</Question>
              </>
            ))}
          </>
        ) : <></>}

      </ContainerCenter>  


    </Container>
   

  );
};



export default Template;


