import styled from 'styled-components';



export const Container = styled.div`
    padding-top: 40px ;
    padding-bottom: 25px;
    background:  #FB9224;
    justify-content : center;
`
/*radial-gradient(circle ,rgb(251,229,85) 0% ,  rgb(251,146,36) 100% );   rgb(251,146,36) 100% ;*/
export const Wrapper  = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    max-width : 1000px;
    margin : 0 auto;
`

export const Column = styled.div`
    display : flex;
    flex-direction : column;
    text-align : left;
    margin-left : 115px;

    
`

export const Row = styled.div`
    display : flex;
    flex-direction: row;
    grid-gap : 10px;
    float : right;
    

`
/*
}*/
export const Link = styled.a`
    color : #ffffff;
    margin-bottom : 20px;
    font-size : 18px;
    text-decoration : none;


    &:hover {
        color : #ffffff;
        transition : 200ms ease-in;
        text-decoration : none;
        font-size:19px;
    }
`

export const Tittle  = styled.p`
    font-size : 20px;
    color : #ffffff;
    margin-bottom : 35px;
    font-weight : bold;
    &:hover {
        font-size:22px;
        transition : 200ms ease-in;
        text-decoration : none;
    }
    
` 

