import React, {FC, useState} from 'react';
import {useQuery} from 'react-query';
import {useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LogInFormStyled, InputStyled, PleaseFillMsg } from './styles/FormsStyled';
import { FormBtnStyled } from './styles/FormsStyled'

type CredentialsInputs = {
    userName: string,
    password: string,
}

interface IdProps {
    setCurrentUserId: (value: string) => void
    //currentUserId: (number | undefined)
}    

const LogInForm: FC<IdProps> = ({setCurrentUserId}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<CredentialsInputs>();
    let isRequired = true;
    let navigate = useNavigate();
    const checkCredentials = (queryData:any, logInData:any) => {
        console.log('queryData ', queryData )
        console.log('logInData ', logInData )
        
        queryData.forEach((user:any) => {
            if (user.userName === logInData.userName && user.password === logInData.password) {
                window.localStorage.setItem("userId", user.id)

                setCurrentUserId(user.id)
                if (user.advanced === 'true') {
                    navigate('/advanced/' + user.id)
                } else {
                    navigate('/input/'+ user.id)
                } 
            } else {
                isRequired = false
                console.log('hm')
            }
        })
    }
    
    const fetchAllUsers = async () => {
            const res = await fetch(`http://localhost:4000/users/`);
            return res.json(); 
        }
    const {data, status, } = useQuery('users', fetchAllUsers);
        //console.log('usercarddata',data)
    

    const logInSubmit: SubmitHandler<CredentialsInputs> = (logInData:object) => {
        checkCredentials(data, logInData)
    }
    //console.log(isRequired)
    
    return (
        
        <LogInFormStyled onSubmit={handleSubmit(logInSubmit)}>
            <h2>Log in</h2>
            <InputStyled defaultValue="User name" {...register("userName")}/>
            <InputStyled defaultValue="Password" {...register("password")}/>
            <FormBtnStyled type="submit">Log In</FormBtnStyled>
            {(isRequired) ? <span></span>:<PleaseFillMsg>Wrong User or Password</PleaseFillMsg>}
            <FormBtnStyled type="button" onClick={()=>{navigate('/create')}}>Sign Up</FormBtnStyled>
             
        </LogInFormStyled> 
    )
}

export default LogInForm;