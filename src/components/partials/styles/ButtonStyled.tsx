import styled from 'styled-components';

export const NavBtnStyled = styled.button`
    box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #b9350c 5%, #bc3315 100%);
	background-color:#d0451b;
	border-radius:3px;
	border:1px solid #942911;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 14px;
    margin: 0px 5px;
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

    @media (max-width: 768px) {
    min-width: 400px;
    }
`
