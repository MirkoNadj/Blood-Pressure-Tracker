import React, {FC} from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { postNewUser } from "../services/fetchingData";
import {FormStyled, LabelStyled, InputStyled, SelectStyled, PleaseFillMsg} from "./styles/FormsStyled";
import { useNavigate } from 'react-router-dom';

type UserProfileInputs = {
    id: number,
    userName: string,
    password: string,
    advanced: boolean,
    firstName: string,
    lastName: string,
    age: number,
    weight: number,
    height: number,
    gender: string,
    bPList: [];
}

interface IdProps {
    setCurrentUserId: (value: string | null) => void    
}

const NewUserForm: FC<IdProps> = ({setCurrentUserId}) => {
    const {register , handleSubmit, watch, formState: {errors} } = useForm<UserProfileInputs>();
    let navigate = useNavigate();
    let isRequired = false;
    const onSubmit: SubmitHandler<UserProfileInputs> = data => {
        
        //console.log('podaci ', data);
        data.id = Math.floor((Math.random() * 100000) + 100)
        data.advanced = false;
        data.bPList = [];
        postNewUser(data);
        setCurrentUserId('' + data.id)
        window.localStorage.setItem("userId", '' + data.id)
        setTimeout((any)=>{navigate("/input/"+data.id)},1000)
        
    }; 

    if (errors?.userName || errors?.password) {
        isRequired = true;
        console.log('true')
} else {console.log('nije')}
    console.log(watch('firstName'))
    console.log(errors)
    return ( 
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <LabelStyled>User Name:</LabelStyled>
            <InputStyled defaultValue="" {...register("userName", { required: "This is required." })}/>
            <LabelStyled>Password:</LabelStyled>
            <InputStyled defaultValue="" {...register("password", { required: "This is required." })}/>
            <LabelStyled>First Name:</LabelStyled>
            <InputStyled defaultValue="" {...register("firstName", { required: "This is required." })}/>
            <LabelStyled>Last Name:</LabelStyled>
            <InputStyled defaultValue="" {...register("lastName", { required: "This is required." })}/>
            <LabelStyled>Age:</LabelStyled>
            <InputStyled defaultValue="" {...register("age", { required: "This is required." })}/>
            <LabelStyled>Weight (kg):</LabelStyled>
            <InputStyled defaultValue="" {...register("weight", { required: "This is required." })}/>
            <LabelStyled>Height (cm):</LabelStyled>
            <InputStyled defaultValue="" {...register("height", { required: "This is required." })}/>
            <LabelStyled>Gender:</LabelStyled>
            <SelectStyled {...register("gender", { required: "This is required." })}>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </SelectStyled>
            {(isRequired) ? <PleaseFillMsg>Please fill in all fields</PleaseFillMsg> : <span> </span>}
            <InputStyled type="submit" value="Create New User"/>
        </FormStyled>
    )    
    };
export default NewUserForm;
