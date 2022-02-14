import React, {FC} from 'react';
import { useQuery } from 'react-query';
import { AdvancedUserCardContainerStyled, AdvancedUserCardInfoStyled, AdvancedUserImgStyled } from './styles/AdvancedUserCardStyled';
import maleImg from '../images/male.jpg';
// import { fetchUser } from '../services/fetchingData';

interface IdProps {    
    currentUserId: (string | null),
}
 
const AdvancedUserCard:FC<IdProps> = ({currentUserId}) => {

    const fetchUser = async () => {
        const res = await fetch(`http://localhost:4000/users/${currentUserId}`);
        return res.json(); 
    }
    
    const {data, status, } = useQuery('advancedUserCard', fetchUser);
    // console.log('advancedUserIDFetch', currentUserId)
    // console.log('advancedUserCardData',data)

    return (
        <div>
        {status === 'error' && (
        <AdvancedUserCardContainerStyled>
            <AdvancedUserImgStyled/>
            <AdvancedUserCardInfoStyled>{`Error...`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`Error...`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`Error...`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`Error...`}</AdvancedUserCardInfoStyled>
        </AdvancedUserCardContainerStyled>
        )}
        {status === 'loading' && (
        <AdvancedUserCardContainerStyled>
            <AdvancedUserImgStyled/>
            <AdvancedUserCardInfoStyled>{`Loading...`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`Loading...`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`Loading...`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`Loading...`}</AdvancedUserCardInfoStyled>     
        </AdvancedUserCardContainerStyled>
        )}
        {status === 'success' && (
        <AdvancedUserCardContainerStyled>
            <AdvancedUserImgStyled/>
            <AdvancedUserCardInfoStyled>{`${data.firstName}`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`${data.lastName}`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`${data.title}`}</AdvancedUserCardInfoStyled>
            <AdvancedUserCardInfoStyled>{`${data.institution}`}</AdvancedUserCardInfoStyled>
        </AdvancedUserCardContainerStyled>
    )}
    </div>);
}

export default AdvancedUserCard;