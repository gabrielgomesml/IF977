import React, { FormEvent, useState } from 'react';


import {
  Container,
  Toggle,
  InputToggle,
  LabelToggle,
  Paragraph,
  DivBackground,
  Head,
  DivBody,
  Description,
  Button,
  DivButton,
} from './Modal-styles';

const Modal: React.FC = () => {
  return (
    <Container>
      <DivBackground>
        <DivBody>
          <Head>Editar Relatório</Head>
          <Description>Escolha os elementos que estarão presentes </Description>
          <Toggle>
            <InputToggle type="checkbox"  id="foo"/>
            <LabelToggle  htmlFor = 'foo'/>
            <Paragraph>Background cabeçalho</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo2"/>
            <LabelToggle  htmlFor = 'foo2'/>
            <Paragraph>Quantitativo cabeçalho</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo3"/>
            <LabelToggle  htmlFor = 'foo3'/>
            <Paragraph>Descrição</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo4"/>
            <LabelToggle  htmlFor = 'foo4'/>
            <Paragraph>Lista de participantes</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo5"/>
            <LabelToggle  htmlFor = 'foo5'/>
            <Paragraph>Referências</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo6"/>
            <LabelToggle  htmlFor = 'foo6'/>
            <Paragraph>Links compartilhados</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo7"/>
            <LabelToggle  htmlFor = 'foo7'/>
            <Paragraph>Background perguntas</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo8"/>
            <LabelToggle  htmlFor = 'foo8'/>
            <Paragraph>Respostas dos comentários</Paragraph>
          </Toggle>

          <Toggle>
            <InputToggle type="checkbox"  id="foo9"/>
            <LabelToggle  htmlFor = 'foo9'/>
            <Paragraph>Likes</Paragraph>
          </Toggle>
        </DivBody>
        <DivButton>
          <Button type= 'submit'>Gerar</Button>
        </DivButton>
      </DivBackground>
  
    </Container>

 
  );
}
  
export default Modal;


