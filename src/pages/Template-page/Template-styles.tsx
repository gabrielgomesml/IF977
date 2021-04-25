import styled from 'styled-components';


export const Container = styled.div`
    overflow-y: scroll;
    height:100vh;

`;


export const ContainerLogo = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("../img/background1.png") ;
    width:100%;
    height:46vh;
       
`;


export const ContainerTittle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;


     
`;
export const ImgTittle = styled.img`
    width:9vw;
    height:18vh;
`;

export const TextTittle = styled.h1`
    text-shadow:rgb(0,0,0,0.3) 0.52vw 0.44vw 0.4vw;
    color:#fff;
    font-size:3vw;
    
    
`;

export const TextTittleP = styled.p`
    text-shadow:rgb(0,0,0,0.3) 0.52vw 0.44vw 0.4vw;
    color:#fff;
    font-size:2.5vw;
`;

export const ContainerTextTittle = styled.div`
    margin:0 5vw 0 1vw;
    
`;

export const ContainerGadgets = styled.div`
    box-shadow:rgb(0,0,0,0.3) 0.7vw 0.7vw 0.4vw;
    border-radius:1.3vw;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:18.5vw;
    height:22vh;
    padding-top:3.5vh;
    margin-top:3vh;
`;


export const AlignGadgets = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:2vh;
    justify-content:center;
`;




export const ImgGadgets = styled.img`
    width:2.3vw;
    height:4.2vh;
    margin: 0 1.5vw 0 0;

`;


export const ContainerTextGadgets = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(196, 196, 196,0.2) ;
    border-radius:1.2vw;
    width:10vw;
    height:3.5vh;
   

`;

export const TextGadgest = styled.p`
    font-style:normal;
    color:#3c3c3c;
    font-size:1vw;
`;

export const ContainerCenter = styled.div`
    margin: 0 14vw 10vh 14vw;

`;


export const TittleCenter = styled.h2`
    font-size: 2.5vw;
    margin: 7vh 0 4vh 0;

`;


export const TextDescription = styled.p`
    font-size:1.9vw;

`;



export const SizeContainerParticipants = styled.div`

    display:flex;
    flex-wrap: wrap;

`;


export const ContainerParticipants = styled.div`
    margin-right:1vw ;
    display:flex;
    border: 0.1vw solid rgba(196, 196, 196, 1);
    width: 34vw;
    height:7vh;
    align-items:center;
`;


export const NameParticipants = styled.p`
    font-size:1.9vw;
`;

export const Initials = styled.p`

    display:flex;
    justify-content:center;
    align-items:center;
    width: 2.7vw;
    height:2.7vw;
    border-radius:25vw;
    background-color: rgba(26, 115, 232, 1);
    color:white;
    margin:0 2vw;
    font-size:1.2vw;
`;


export const ContainerRef = styled.div`
    font-size:1.9vw;
`;

export const TittleRef = styled.p`
    font-weight:600;
    font-size:1.9vw;
    margin-bottom:1vw;
`;

export const LinkRef = styled.a`
    color:#909090;
    font-size:1.9vw;
`;



export const ContainerLinks = styled.div`
    display:flex;
    flex-direction:row;

`;


export const TextLink = styled.div`
    display:flex;
    flex-direction:column;
    
`;

export const NameLinks = styled.p`
    font-weight:600;
    font-size:1.6vw;
    margin-bottom:1vw;
`;

export const TittleLinks = styled.p`
    font-size:1.6vw;
    margin-bottom:1vw;
`;

export const LinksC = styled.a`
    color:#909090;
    font-size:1.6vw;
    margin-bottom:1vw;
`;


