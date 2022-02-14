import React, {FC} from 'react';
import { UserItemContainerStyled, UserItemInfoStyled, UserItemImgStyledMale, UserItemImgStyledFemale } from './styles/UserItemStyled';
import maleImg from '../images/male.jpg';
import { useNavigate } from 'react-router';
// import { fetchUser } from '../services/fetchingData';

interface ThisIdProps {    
    data: {
        id: string;
        firstName: string
        lastName: string
        age: number
        weight: number
        height: number
        gender: string
    }
}

const UserItem:FC<ThisIdProps> = ({data}) => {
    let navigate = useNavigate();
    const goToUser = (id:any) => {
        window.localStorage.setItem('userId', id)
        navigate('/users/'+id)
    }
    return (                
        <UserItemContainerStyled onClick={()=>{goToUser(data.id)}}>
            {(data.gender === 'male') ? <UserItemImgStyledMale /> : <UserItemImgStyledFemale /> }
            <UserItemInfoStyled>{`${data.firstName}`}</UserItemInfoStyled>
            <UserItemInfoStyled>{`${data.lastName}`}</UserItemInfoStyled>
            <UserItemInfoStyled>{`${data.age}`}</UserItemInfoStyled>
            <UserItemInfoStyled>{`${data.weight}`}</UserItemInfoStyled>
            <UserItemInfoStyled>{`${data.height}`}</UserItemInfoStyled>
            <UserItemInfoStyled>{`${data.gender}`}</UserItemInfoStyled>
        </UserItemContainerStyled>
    );
}

export default UserItem;