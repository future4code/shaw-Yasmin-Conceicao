import styled from "styled-components";
import TextField  from "@mui/material/TextField"
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

export const MainContainer = styled.div`
    padding: 30%;
    display: flex;
    flex-direction: column;
    scroll-behavior: none;
    align-items: center;

    p{
        font-family: Arial, Helvetica, sans-serif;
    }

   
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImgLogo = styled.img`
    height:7rem ;
    height: 4rem;
`

export const TitleConatiner = styled.div`
    display: flex;
    justify-content: center;
`

export const TextFieldStyled = styled(TextField)`
    &&{
        width: 215%;
        display: flex;
        margin-bottom: 12%;
    }
`

export const Pstyled = styled.p`
     font-size: 1.4rem;
`

export const ButtonStyled = styled(Button)`
    &&{
        color: white;
        background-color:#E8222E;
        width: 215%;
        height: 2.5rem;

        &:hover{
            background-color: #E8222E;
        }
    }
`

export const TitleFooter = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color:#363636;
    width: 20rem;
    font-size: large;
    font-family: sans-serif;
`
