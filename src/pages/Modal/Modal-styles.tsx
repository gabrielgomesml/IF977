import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const DivBackground = styled.div`
  width: 70vmin;
  height: 75vmin;
  background: #FFFFFF;
  mix-blend-mode: normal;
  box-shadow: 0 1vmin 3vmin 3vmin rgba(0, 0, 0, 0.25);
  border-radius: 4vmin;
`;

export const DivBody = styled.div`
  display:flex;
  flex-direction:column;
  margin: 0 5% ;

`;



export const Head = styled.p`
  margin-top: 4.2vmin;
  font-style: normal;
  color: #3C3C3C;
  font-weight: bold;
  font-size: 4vmin;

`;


export const Description = styled.p`
  font-weight: normal;
  font-size: 2.3vmin;
  color: #5C5C5C;
  margin-bottom:0.5vmin;
`;




export const Toggle = styled.div`
  display:flex;
  margin-bottom: 1vmin;
  align-items: center;
  width: 100%;
  height: 5vmin;
  border: 0.2vmin solid #565656;
  border-radius: 1vmin;
`;

export const InputToggle = styled.input`
  display:none;
  &:checked ~ label{
    background:#66a8ff;
  }
  &:checked ~ label:after {
    left: 3vmin;
    background: #1a73e8;
  } 
`;

export const LabelToggle = styled.label `
  margin-left: 3vmin;
  position: relative;
  display: block;
  height: 2.9vmin;
  width: 6.3vmin;
  background-color: #565656;
  border-radius: 10vmin;
  cursor: pointer;
  

  &:after {
    position: absolute;
    left:-1vmin;
    top: -0.6vmin;
    display: block;
    width: 4vmin;
    height: 4vmin;
    border-radius: 10vmin;
    background: #A9A9A9;
    box-shadow: 0 1vmin 1vmin rgba(0,0,0,0.05);
    content: '';

    };


  &:active:after{
    transform: scale(1.15, 0.85)
  };
`;

export const Paragraph= styled.p` 
 align-items:center;
  margin-left:3vmin;
  font-weight: 550;
  font-size: 3vmin;
  color: #3C3C3C;
  
`;


export const Button= styled.button` 
  align-items:center;
  font-weight: 500;
  font-size: 2.8vmin;
  color: #fff;
  background: #1A73E8;
  border-radius: 1.5vmin;
  width: 17vmin;
  height: 4.3vmin;
  border:none;
  cursor:pointer;
  &:hover{
    background:#044191;  
  }
  &:active{
    background:#02224d;
  }
`;


export const DivButton= styled.div` 
  height:4.3vmin;
  display:flex;
  position:relative;
  left:71%;
  top:2%;




`;

