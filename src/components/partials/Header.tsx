import React, {FC} from "react";
import {useNavigate} from 'react-router-dom'
import { NavBtnStyled } from "./styles/ButtonStyled";
import { HeaderStyled, NavContainerStyled, HeaderTitleStyled } from "./styles/HeaderFooterStyled";

interface IdProps {
    setCurrentUserId: (value: string) => void
    //currentUserId: (string | undefined)
}

const Header: FC<IdProps> = ({setCurrentUserId}) => {
    let navigate = useNavigate()

    const logOut = () =>{
    setCurrentUserId('0');
    window.localStorage.clear()
    navigate('/')
}

    return (
        <>
        <HeaderStyled>
            <HeaderTitleStyled>BP Tracker</HeaderTitleStyled>
            <NavContainerStyled>                      
                <NavBtnStyled onClick={() => logOut()}>Home</NavBtnStyled>
                <NavBtnStyled onClick={() => logOut()}>About</NavBtnStyled>
                <NavBtnStyled onClick={() => logOut()}>Get Credentials</NavBtnStyled>
                <NavBtnStyled onClick={() => logOut()}>Sign In</NavBtnStyled>
                <NavBtnStyled onClick={() => logOut()}>Log In</NavBtnStyled>
            </NavContainerStyled>            
        </HeaderStyled>
        </>
    )
}

export default Header;