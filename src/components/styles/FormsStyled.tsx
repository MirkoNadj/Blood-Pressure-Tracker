import styled from 'styled-components';

export const WelcomeTextStyled = styled.div`
    
    font-size: 20px;
    text-align: center;
    
    @media (max-width:768px) {
        visibility: hidden;
        order:2;
    }    
`

export const LogInFormStyled = styled.form`   
    margin: 0px 0px;
    padding: 20px;
    background-color: lightgrey;   
    width: 40%;
    border-radius: 10px;
    border-style: ridge;
    border-width: 5px;
    order:1;

    @media (max-width:768px) {
        margin-left:24%;
    }    

`

export const FormStyled = styled.form`
    margin: 0px 0px;
    padding: 20px;
    background-color: lightgrey;   
    width: 40%;
    border-radius: 10px;
    border-style: ridge;
    border-width: 5px;

    @media (max-width:768px) {
        width:80%;       
    }
    @media (max-width:576px) {
        width:100%;       
    }
` 
export const LabelStyled = styled.label`
    display: block;
    color: black;
    height: 20px;
    font-weight: bolder;
` 
export const InputStyled = styled.input`
    display:block;
    background-color: grey;
    color: darkred;
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    
` 
export const SelectStyled = styled.select`
    background-color: grey;
    color: darkred;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0px;
`
export const FormBtnStyled = styled.button`
    box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #922d0f 5%, #bc3315 100%);
	background-color:#9e4226;
	border-radius:3px;
	border:1px solid #942911;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 14px;
    margin: 5px 10px 5px 0px;
	text-decoration:none;
	text-shadow:0px 1px 0px #854629;
    min-height: 25px;
    &:hover {
      background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
      background-color:#bc3315;  
    };
    &:active {
        position:relative;
	    top:1px;
    }
`
export const PleaseFillMsg = styled.span`
    font-size: 24px;
    font-style: italic;
    margin-left: 45px;
   
`