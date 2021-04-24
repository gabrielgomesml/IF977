import React, { useState } from 'react';
import getToken from '../../Hooks/getData';
import { useDataContext } from '../../utils/dataContext';

import {
  Container,
  LoginCard,
  LoginCardTitle,
  InputsContainer,
  LoginInput,
  SingleInputContainer,
  InputTitle,
  SendButton,
  ErrorMessage,
} from './Login-styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [access_token, setAccess_token] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [token, setToken] = useDataContext();
  const axios = require('axios').default;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const newValue = e.target.value;
    setEmail(e.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const newValue = e.target.value;
    setPassword(e.target.value);
  }

  const settingToken = async (token: string) => {
    if (token) {
      setToken(token)
      localStorage.setItem('access_token', token);
      console.log(token)
    }
  }

  const handleToken = async (email: string, password: string) => {
    const res = await axios.post(`https://api.strateegia.digital/users/v1/auth/signin`,{},{auth:{username:email, password:password}})
    if (res && res.data) {
      setAccess_token(res.data.access_token);
      settingToken(res.data.access_token);
    }
  }

  return (
    <Container>
      <LoginCard>
        <LoginCardTitle>Realize seu login</LoginCardTitle>
        <InputsContainer>
          <SingleInputContainer>
            <InputTitle>Endereço de e-mail</InputTitle>
            <LoginInput id='placebo' placeholder="nome@empresa.com" onChange={handleEmail}></LoginInput>
          </SingleInputContainer>
          <SingleInputContainer>
            <InputTitle>Senha</InputTitle>
            <LoginInput type='password' placeholder="Senha" onChange={handlePassword}></LoginInput>
          </SingleInputContainer>
          {/* <ErrorMessage>Email ou senha incorretos!</ErrorMessage> */}
        </InputsContainer>
        <SendButton onClick={() => handleToken(email, password)} >Entrar</SendButton>
      </LoginCard>
    </Container>
  );
};
  
export default Login;
  