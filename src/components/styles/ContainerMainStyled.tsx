import styled from "styled-components";
import heart from "../../images/heart-beat-vector.webp"

export const ContainerMainStyled = styled.div`
    display: flex; 
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
    padding:20px 5px;
    background-color: grey;
    background-image: url(${heart});
    background-size: cover;

    @media (max-width: 768px) {
    flex-direction: column;
    align-content: flex-start;
    }
`

export const ContainerAdvancedStyled = styled.div`
    display: flex; 
    height: 100%;
    justify-content: space-evenly;
    align-items: flex-start;
    padding:20px 5px;
    background-color: grey;
    background-image: url(${heart});
    background-size: cover;

    @media (max-width: 768px) {
    flex-direction: column;
    align-content: flex-start;
    }
`

export const AdvancedSearchContainer = styled.div`
    
`