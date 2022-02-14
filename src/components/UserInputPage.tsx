import React, {FC} from 'react';
import { ContainerMainStyled } from './styles/ContainerMainStyled';
import UserCard from './UserCard';
import BPInputList from './BPInputList';

interface IdProps {
    //setCurrentUserId: (value: number) => void
    currentUserId: (string | null)
}

const CreateNewUser: FC<IdProps> = ({currentUserId}) => {
    console.log('current', currentUserId)
    return (
        <ContainerMainStyled>
            <UserCard currentUserId={currentUserId}/>        
            <BPInputList currentUserId={currentUserId}/>
        </ContainerMainStyled>
    )
}

export default CreateNewUser;