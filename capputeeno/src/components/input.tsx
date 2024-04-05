import styled from "styled-components";
import { SearchIcon } from "./searchIcon";
import { InputHTMLAttributes } from "react";

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;
    
    background-color: var(--bg-input-box);

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 14px;
        line-height: 22px;
    }
`;

const InputContainer = styled.div`
    position: relative;
    width: 250px;
    
    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        width: 352px;
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handleChange: (value: string) => void;
}

export const InputWithIcon: React.FC<InputProps> = ({ handleChange, ...props }) => {
    return (
        <InputContainer>
            <Input onChange={(event) => handleChange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    );   
};
