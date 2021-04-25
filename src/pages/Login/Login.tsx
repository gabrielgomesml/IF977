import React, { FormEvent, useState } from 'react';

import {
  Container,
  LoginCard,
  LoginCardTitle,
  InputsContainer,
  LoginInput,
  SingleInputContainer,
  InputTitle,
  SendButton,
} from './Login-styles';

const Login: React.FC = () => {
  return (
    <Container>
      <LoginCard>
        <LoginCardTitle>Realize seu login</LoginCardTitle>
        <InputsContainer>
          <SingleInputContainer>
            <InputTitle>Endereço de e-mail</InputTitle>
            <LoginInput placeholder="nome@empresa.com"></LoginInput>
          </SingleInputContainer>
          <SingleInputContainer>
            <InputTitle>Senha</InputTitle>
            <LoginInput placeholder="Senha"></LoginInput>
          </SingleInputContainer>
        </InputsContainer>
        <SendButton>Entrar</SendButton>
      </LoginCard>
    </Container>
  );
};
  
export default Login;
  