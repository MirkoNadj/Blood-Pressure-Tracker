import styled from 'styled-components';
import maleImg from '../../images/male.jpg'
import femaleImg from '../../images/female.jpg'

export const UserCardContainerStyled = styled.div`
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
export const UserImgStyledMale = styled.div`
    width: 120px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    background-image: url(${maleImg});
    background-size: cover;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`
export const UserImgStyledFemale = styled.div`
    width: 120px;
    height: 100px;
    padding: 10px;
    margin: 10px;
    background-image: url(${femaleImg});
    background-size: cover;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
`

export const UserCardInfoStyled = styled.h3`
    color:darkred;
    font-size: 20px;
    padding: 5px;
    margin: 5px;
    -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    background-color: #ecececa0;
`
export const UserBtnStyled = styled.button`
    display:inline-block;
    box-shadow:inset 0px 1px 3px 0px #413d3d;
	background:linear-gradient(to bottom, #b9b9b9 5%, #8a3131 100%);
	background-color:#665a5a;
	border-radius:5px;
	border:1px solid #504747;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:8px 16px;
    margin: 5px;
	text-decoration:none;
	text-shadow:0px -1px 0px #662b2b;

    &:hover {
        background:linear-gradient(to bottom, #686868 5%, #a03d3d 100%);
	    background-color:#3a2b2b;
    }

    &:active {
        position:relative;
	    top:1px;
    }    
`