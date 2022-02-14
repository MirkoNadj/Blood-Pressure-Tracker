import React, {FC} from 'react';
import { ContainerMainStyled } from './styles/ContainerMainStyled';
import NewUserForm from "./NewUserForm";
import Welcome from './Welcome';

interface IdProps {
    setCurrentUserId: (value: string | null) => void
    //currentUserId: (string | null)
}

const CreateNewUser: FC<IdProps> = ({setCurrentUserId}) => {
    //console.log('current', currentUserId)
    return (
        <ContainerMainStyled>
            <Welcome />        
            <NewUserForm setCurrentUserId={setCurrentUserId}/>
        </ContainerMainStyled>
    )
}

export default CreateNewUser;