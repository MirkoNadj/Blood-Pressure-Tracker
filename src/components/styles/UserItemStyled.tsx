import styled from 'styled-components';
import maleImg from '../../images/male.jpg'
import femaleImg from '../../images/female.jpg'

export const UserItemContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    align-content: strech;
    flex-grow:1;    
    width: 99%;
    height: 70px;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
    background-color: #6e6c6c5e;

    /* @media (max-width:768px) {
        flex-direction: row;
        flex-wrap: wrap;
        width:100%;
    } */
`

export const UserItemInfoStyled = styled.h3`
    color:darkred;
    width:130px;
    font-size: 20px;
    height:50px;
    padding: 5px;
    margin: 5px;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    background-color: #ecececa0;
`

export const UserItemImgStyledMale = styled.div`
    width: 60px;
    height: 50px;
    padding: 10px;
    margin: 10px;
    background-image: url(${maleImg});
    background-size: cover;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`
export const UserItemImgStyledFemale = styled.div`
    width: 60px;
    height: 50px;
    padding: 10px;
    margin: 10px;
    background-image: url(${femaleImg});
    background-size: cover;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`