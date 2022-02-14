import React, {FC} from 'react';
import { useQuery } from 'react-query';
import { UserCardContainerStyled, UserCardInfoStyled, UserImgStyledMale, UserImgStyledFemale, UserBtnStyled } from './styles/UserCardStyled';
import maleImg from '../images/male.jpg';
import { FormBtnStyled } from './styles/FormsStyled';
// import { fetchUser } from '../services/fetchingData';

interface IdProps {    
    currentUserId: (string | null),
}

const UserCard:FC<IdProps> = ({currentUserId}) => {
    console.log('current deeper', currentUserId)

    const fetchUser = async () => {
        const res = await fetch(`http://localhost:4000/users/${currentUserId}`);
        return res.json(); 
    }
    
    const {data, status, } = useQuery('userCard', fetchUser);
    console.log('userIDFetch', currentUserId)
    console.log('usercarddata',data)

    return (
        <div>
        {status === 'error' && (
            <UserCardContainerStyled>
            <img src= {maleImg} alt="" width="100" height="100"></img>
            <UserCardInfoStyled>{`Error...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Error...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Error...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Error...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Error...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Error...`}</UserCardInfoStyled>
        </UserCardContainerStyled>
        )}
        {status === 'loading' && (
            <UserCardContainerStyled>
            <img src= {maleImg} alt="" width="100" height="100"></img>
            <UserCardInfoStyled>{`Loading...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Loading...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Loading...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Loading...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Loading...`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`Loading...`}</UserCardInfoStyled>
        </UserCardContainerStyled>
        )}
        {status === 'success' && (
        <UserCardContainerStyled>
            {(data.gender === 'male') ? <UserImgStyledMale /> : <UserImgStyledFemale /> }
            
            <UserCardInfoStyled>{`${data.firstName}`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`${data.lastName}`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`${data.age} years old`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`${data.weight} kg`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`${data.height} cm`}</UserCardInfoStyled>
            <UserCardInfoStyled>{`${data.gender}`}</UserCardInfoStyled>
            <UserBtnStyled>Edit data</UserBtnStyled>
            <UserBtnStyled>Delete user</UserBtnStyled>
            
        </UserCardContainerStyled>
    )}
    </div>);
}

export default UserCard;