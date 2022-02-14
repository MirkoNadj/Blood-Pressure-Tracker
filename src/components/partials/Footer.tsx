import React, {FC} from "react";
import { FooterStyled, FooterTitleStyled } from "./styles/HeaderFooterStyled";

const Footer: FC = () => {

    return (
        <FooterStyled>
            <FooterTitleStyled>created by Mirko &copy; 2021</FooterTitleStyled>
        </FooterStyled>
    )
}

export default Footer;