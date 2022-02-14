import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: relative;
    height: 50px;
    width: 100%;
    background-color: #992525;
    background:linear-gradient(to bottom, #882608 5%, #bc3315 100%);
    @media (max-width: 768px) {
    height: 160px;
    }
    @media (max-width: 680px) {
    height: 195px;
    }
`
export const FooterStyled = styled.footer`
    height: 30px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    color: #775656;
    background-color: #992525 ;
    background:linear-gradient(to bottom, #882608 5%, #bc3315 100%);
`
export const NavContainerStyled = styled.nav`
    float: right;    
    display: flex;
    min-height:50px;
    width: 82%;
    padding: 5px 0px;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    overflow: hidden;

    @media (max-width: 768px) {
    float: none;
    margin: 0px auto;
    flex-direction: column;
    column-gap: 5px;
  }
`
export const HeaderTitleStyled = styled.h3`
    position:absolute;
    left:10px;
    top: 15px;
    color: white;
    
    
    @media (max-width: 680px) {
    position: static;
    text-align: center;
    padding: 5px;
    }    
`
export const FooterTitleStyled = styled.h4`
    float: right;    
    color: white;
    padding: 5px 10px;  
`