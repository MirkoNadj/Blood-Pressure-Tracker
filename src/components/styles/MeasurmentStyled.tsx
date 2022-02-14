import styled from 'styled-components';

export const MeasureContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
    width:75%;
    background-color: grey;
	border-style: solid;
	border-color: black;

	@media (max-width:768px) {
        width:100%;       
    }
`
export const MeasureInputContainerStyled = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`

export const MeasureInputStyled = styled.input`    
	justify-content: flex-start;
    height: 35px;
    background-color: #b8b8b8;
	margin: 5px;
	font-size: 16px;
	width: 90%
	
`
export const SingleInputContainerStyled = styled.div`

    text-align: center;
`
export const MeasureListStyled = styled.div`
	display:flex;
	flex-direction: column;
	margin:10px 5px;
`

export const MeasureBtnStyled = styled.button`
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
	padding:10px 16px;
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
