import styled from "styled-components";
import { SearchIcon } from "./searchIcon";
import { InputHTMLAttributes } from "react";

export const Input = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    
    background-color: var(--bg-input-box);

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
`
const InputContainer = styled.div`
    position: relative;
    width: 352px;
    
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
     handleChange: (value: string) => void;
}

export const InputWithIcon = (props: InputProps) => {
    return (
        <InputContainer>
            <Input onChange={(event) => props.handleChange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    )    
}