import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    bgColor: 'orange' | 'golden' | 'grey',
    width: 'small' | 'middle' | 'large'
    color?: 'white'
    children: ReactNode,
    
}