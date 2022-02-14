import React, {FC} from 'react';
import { ContainerMainStyled } from './styles/ContainerMainStyled';
import Welcome from './Welcome';
import LogInForm from "./LogInForm";

interface IdProps {
    setCurrentUserId: (value: string) => void
    //currentUserId: (number | undefined)
}

const Home: FC<IdProps> = ({setCurrentUserId}) => {
    return (
        <ContainerMainStyled>
            <Welcome />
            <LogInForm setCurrentUserId={setCurrentUserId}/>
        </ContainerMainStyled>
    )
}

export default Home;