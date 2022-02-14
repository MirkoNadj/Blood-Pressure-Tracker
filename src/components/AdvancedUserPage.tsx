import React, {FC, useState} from "react";
import {useQuery} from 'react-query';
import AdvancedUserCard from "./AdvancedUserCard";
import Search from "./partials/Search";
import { ContainerAdvancedStyled, AdvancedSearchContainer  } from "./styles/ContainerMainStyled";
import { SearchContainerStyled } from "./partials/styles/SearchContainerStyled";
import { UserImgStyledMale } from "./styles/UserCardStyled";
import UserItem from "./UserItem";

interface IdProps {
    //setCurrentUserId: (value: number) => void
    currentUserId: (string | null)
}

interface SearchState {
    setSearch: (value: string) => void
    search: (string | undefined)
  }

const AdvancedUserPage:FC<IdProps> = ({currentUserId}) => {

    const [search, setSearch] = useState<SearchState['search']>('')

    const fetchAllUsers = async () => {
        const res = await fetch(`http://localhost:4000/users/`);
        return res.json(); 
    }

    const {isLoading, data } = useQuery('users', fetchAllUsers);
    //console.log('usercarddata',data)

    if (isLoading) {
        return <h1>Loading</h1>

    }else {   
        return (<>
            <ContainerAdvancedStyled>
            <AdvancedSearchContainer>
            <AdvancedUserCard currentUserId={currentUserId}/>
            <Search search={search} setSearch={setSearch}/>
            </AdvancedSearchContainer>
            <SearchContainerStyled>
                {data.filter((user:any) => {
                    if (search === '') {
                        return user
                    } else if (user.firstName.toLowerCase().includes(search?.toLowerCase())) {
                        return user
                    }
                }).map((user:any, key:any) => {
                    return (
                        <div key={key}>
                            <UserItem data={user}/>
                        </div>
                    );
                })
                }
            </SearchContainerStyled>       
        </ContainerAdvancedStyled>
        </>
    )}        
}

export default AdvancedUserPage;