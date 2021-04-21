import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.blue}
`;

export const LoginCard = styled.div`
  width: 30rem;
  max-width: 46rem;
  height: 20rem;
  background-color: ${theme.color.white};
  padding: 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`;

export const LoginCardTitle = styled.p`
  font: ${theme.font.mediumText};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SingleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;
`;

export const InputTitle = styled.p`
  font: ${theme.font.featuredText};
  color: ${theme.color.black};
`;

export const LoginInput = styled.input`
  padding: 0.9rem 1.4rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

export const SendButton = styled.button`
  background: ${theme.color.blue};
  color: ${theme.color.white};
  width: 60%;
  height: 2.7rem;
  margin-top: 2rem;
  align-self: flex-end;
  border: none;
  border-radius: 0.3rem;
  font: ${theme.font.bodyText};
  cursor: pointer;
`;