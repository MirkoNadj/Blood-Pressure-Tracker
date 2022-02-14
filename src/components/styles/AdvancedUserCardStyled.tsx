import styled from 'styled-components';
import maleImg from '../../images/male.jpg'

export const AdvancedUserCardContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
    background-color: #6e6c6c5e;

    @media (max-width:768px) {
        flex-direction: row;
        flex-wrap: wrap;
        width:100%;
    }
`
export const AdvancedUserImgStyled = styled.div`
    width: 120px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    background-image: url(${maleImg});
    background-size: cover;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`
export const AdvancedUserCardInfoStyled = styled.h3`
    color:darkred;
    font-size: 20px;
    padding: 5px;
    margin: 5px;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    background-color: #ecececa0;
`

