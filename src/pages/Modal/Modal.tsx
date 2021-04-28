import React, { useEffect, useState, useRef, useCallback } from 'react';


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

interface ModalProps {
  modalOpen: any;
  setModalOpen: any;
}

const Modal: React.FC<ModalProps> = ({setModalOpen, modalOpen}) => {

  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const closeModal = (e: any) => {
    if (modalRef.current != e.target) {
      const body = document.querySelector('body');
      if (body !== null) {
        body.style.overflow === 'hidden'
          ? (body.style.overflow = 'visible')
          : (body.style.overflow = 'visible');
      }
      setModalOpen(false);
    }
  };

  const keyPress = useCallback(
    (e: any) => {
      if (e.key === 'Escape' && modalOpen) {
        setModalOpen(false);
      }
    },
    [setModalOpen, modalOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {modalOpen ? (
        <Container modalActive={modalOpen} ref={modalRef}>
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
            <Button type= 'submit' onClick={closeModal}>Gerar</Button>
          </DivButton>
        </DivBackground>
      </Container>
      ) : null }
    </>
  );
}
  
export default Modal;


