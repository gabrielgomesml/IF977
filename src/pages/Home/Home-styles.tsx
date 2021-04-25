import styled from 'styled-components';
import theme from '../../styles/theme';

export const BigContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: none;
`;

// TELA COMPLETA:
export const ContainerMain = styled.div `
    background-color: #dcdcdc;
    margin:0;
    overflow:none;
`;

// MENU:
export const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #1A73E8;
    height:7.5vh;

  
 
`;

export const MenuContainer = styled.div `
    display: flex;
    flex-direction:row;

`;

export const DivLogoStrateegia = styled.div `
    width:21.2vw;
    height: 6vh;
    display:flex;
    justify-content:center;
 
`; 


export const LogoStrateegia = styled.img `
    width:15vw;
    height: 6vh;
 
`; 

export const MenuName = styled.div `
    margin-right: 3.5vw;
    //font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9vw;
    color: #FFFFFF;
    cursor: pointer;
`;

//BARRA ABAIXO DO MENU:
export const ContainerBottom = styled.div `
    display: flex;
    flex-direction:row;
`;

// BARRA DA ESQUERDA:
export const ContainerLeft = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 20vw;
    border-right: 0.1vh solid #dcdcdc;
    
`;

export const ContainerSearch = styled.div `
    height:8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1vh solid #dcdcdc;
`;




export const SearchinInput = styled.input `
    height: 5vh;
    width: 17vw;
    font-size: 1.1vw;
    background-color: #d3d3d3;
    border-radius:  0.5vw;
    border: none;
    outline: none;
`;

// BARRA DA DIREITA:

// 1º BARRA:
export const ContainerRight = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width:80vw;
   

   
`;

export const ContainerRightTop = styled.div `
    display:flex;
    flex-direction:column;
  
    height:8vh;
    border-bottom: 0.1vh solid #dcdcdc;
    
    
`;

export const P1 = styled.h3 `
    margin-left:3vw;
    margin-bottom: 0.5vh;
    margin-top:1.5vh;
    font-size: 1vw;
    
    
`;

export const P2 = styled.p `
    margin-left:3vw;
    font-size: 0.85vw
`;



export const ContainerAnalysis = styled.div `
    display: flex;
    align-items: center;
    text-align:center;  
    background-color: #ffffff;
    border-bottom: 0.1vh solid #dcdcdc;
    height:6.5vh;
 
`;

export const ContainerAnalysisMenu = styled.p `
    font-size:0.9vw;
    margin-left:2vw;
    cursor: pointer;
    font-weight: 600;

`;

// 3º BARRA:
export const ContainerCenter = styled.div `
    padding-top: 35vh;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items:center; 
    background-color:#f8f8f8;
    overflow-y: scroll;
`;

export const ContainerQuantitative = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;  
    margin-top: 5vh;
     
`;

export const ContainerPeoples = styled.div `
    font-size:1vw;
    display: flex;
    flex-direction: column;
    width:18vw;
    padding:2vw 0;
    justify-content: flex-start;
    align-items: center;    

`;


export const ContainerPeoplesCenter = styled.div `
    font-size:1vw;
    display: flex;
    flex-direction: column;
    width:18vw;
    padding:2vw 0;
    justify-content: flex-start;
    align-items: center; 
    border-left:  0.1vh solid #dcdcdc;
    border-right:  0.1vh solid #dcdcdc;
`;

export const PeoplesDatesTittle = styled.h3 `
    text-align: center;
    display: block;
    font-size: 1.2vw;
    margin-bottom: 1vh;
    width:10vw;
    font-weight: bold;
`;



export const PeoplesDates = styled.div `
    font-size: 1vw;
    text-align: center;
    margin-bottom: 1vh;
`;

export const PeoplesIMG = styled.img `
    
    height:10vh;
    margin-bottom:5vh;
 
`;

export const BalaoIMG = styled.img `
    height:10vh;
    margin-bottom:5vh;
`;

export const QuestionIMG = styled.img `
    height:10vh;
    margin-bottom:5vh;
`;

// 4º BARRA:


export const TextEngagement = styled.h1 `
    text-align: center;
    font-weight: bold;
    margin-top: 4.5vh;
    margin-bottom: 4.5vh;
    font-size: 1.8vw;

`;


export const ContainerEngagement = styled.div `
    display:flex;
    flex-wrap:wrap;
    width:49.5vw;
 
   
  
    
`;

export const Engagement = styled.div `
    display:flex;
    flex-direction:column;
    background-color:#fff;
    margin: 0 2vw 2vw 0;
    width:14.5vw;
    height:26.62vh;
    border-radius: 0.4vw;
    
`;



export const ContainerDivision = styled.div `
    display:flex;
    flex-direction: row;
    align-items:center;
     
`;


export const TittleEngagement = styled.h3 `
    margin-top:2vh;
    margin-left:1vw;
    margin-right:0.8vw;
    font-size:1vw;

    
`;

export const InformationEngagement = styled.p `
    margin-top:2vh;
    margin-left:1vw;
    font-size:1vw;
    
`;
  


export const Pic = styled.img `
    margin-top:2vh;
    margin-left:0.7vw;
    width:1.5vw;
    height:1.5vw;
`;

export const PicD = styled.img `
    margin-top:2vh;
    margin-left:0.7vw;
    width:1.5vw;
    height:1.5vw;
    cursor: pointer;
`;