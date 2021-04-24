import styled from 'styled-components';
import theme from '../../styles/theme';

// TELA COMPLETA:
export const ContainerMain = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #dcdcdc;
    width: 100%;
    height: 100%;
`;

// MENU:
export const Container = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    height: 99px;
    left: 0px;
    background-color: #1A73E8;
`;

export const MenuContainer = styled.div `
    display: flex;
    align-items: center;
    width: 1252px;
    height: 35px;
    left: 399px;
    top: 34px;
`;

export const LogoStrateegia = styled.div `
    background: url("../img/logo.svg") no-repeat;
    width: 308px;
    height: 79px;
    margin-top: 15px;
    margin-left: 50px;
`; 

export const MenuName = styled.div `
    margin-left: 50px;
    //font-family: Heebo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
`;

//BARRA ABAIXO DO MENU:
export const ContainerBottom = styled.div `
    display: flex;
`;

// BARRA DA ESQUERDA:
export const ContainerLeft = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    height: 100vh;
    width: 400px;
`;

export const ContainerSearch = styled.div `
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerSearchBarra = styled.div `
    height: 1px;
    width: 100%;
    margin-top: 8%;
    background-color: #bbbbbb; 
`;

export const SearchinInput = styled.input `
    height: 41px;
    width: 250px;
    padding-left: 50px;
    background-color: #d3d3d3;
    border-radius: 50px;
    border: none;
    outline: none;
`;

// BARRA DA DIREITA:

// 1º BARRA:
export const ContainerRight = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    height: 96px;
    width: 100%;
`;

export const ContainerRightTop = styled.div `
    margin-top: 22px;
    margin-left: 50px;
    margin-bottom: 31px;
`;

export const ContainerSearchBarra2 = styled.div `
    width: 2px;
    background-color: #bbbbbb; 
`;

// 2º BARRA:
export const ContainerAnalysis = styled.div `
    display: flex;
    align-items: center;
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    padding-bottom: 30px;
`;

export const ContainerAnalysisMenu = styled.div `
    padding-left: 50px;
    padding-top: 20px;
    cursor: pointer;
    font-weight: bold;

`;

// 3º BARRA:
export const ContainerQuantitative = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;    
`;

export const ContainerPeoples = styled.div `
    display: flex;
    flex-direction: column;
    padding: 50px;
    padding-top: 70px;
    justify-content: center;
    align-items: center;
    border-left: 0.5px solid #bdbdbd;
`;


export const ContainerPeoplesDates = styled.div `
`;

export const PeoplesDates = styled.div `
    text-align: center;
`;

export const PeoplesIMG = styled.div `
    background: url("../img/group.png") no-repeat;
    width: 100%;
    height: 100px;
    background-position: center;
`;

export const BalaoIMG = styled.div `
    background: url("../img/balao.png") no-repeat;
    width: 100%;
    height: 100px;
    background-position: center;
`;

export const QuestionIMG = styled.div `
    background: url("../img/question.png") no-repeat;
    width: 100%;
    height: 100px;
    background-position: center;
`;

// 4º BARRA:

export const Engagement = styled.div `
    margin-left: 50px;
    background-color: #ffffff;
    width: 280px;
    height: 250px;
    margin-bottom: 50px;
    border-radius: 20px;
    text-align: center;
    border-right: 5px solid #aaaaaa;
    border-bottom: 5px solid #aaaaaa;
`;

export const ContainerEngagement = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 600px;
    padding-left: 150px;
`;

export const TextEngagement = styled.div `
    text-align: center;
    font-weight: bold;
    padding-bottom: 50px;

`;

// >>>> GRIDS
export const GridTema = styled.div `
    display: grid;
    grid-template-columns: 1fr 0.1fr 0.5fr 0.7fr;
    padding-top: 20px;

`;

export const GridHexagono = styled.div `
    background: url("../img/1asd.png") no-repeat;
    width: 100%;
    height: 100%;
    background-position: center;
`;

export const GridName = styled.div `
    text-align: left;
`;

export const ImgImpressora = styled.div `
    background: url("../img/i.png") no-repeat;
    background-position: right;
    cursor: pointer;
    padding-left: 20px;
    
`;

export const ImgDownloads = styled.div `
    background: url("../img/d.png") no-repeat;
    background-position: right;
    margin-right: 20px;
    cursor: pointer;

`;

export const GridPeople = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    padding-top: 20px;

`;
export const GridIMG = styled.div `
    background: url("../img/group2.png") no-repeat;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    margin-left: 25px;
`;
export const GridIMG2 = styled.div `
    background: url("../img/question2.png") no-repeat;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    margin-left: 25px;
`;
export const GridIMG3 = styled.div `    
    background: url("../img/balao2.png") no-repeat;
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
    margin-left: 25px;
`;

export const GridQuestion = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    padding-top: 20px;

`;
export const GridFalas = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    padding-top: 20px;
`;