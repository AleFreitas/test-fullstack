import { Button } from '@mui/material'
import React from 'react'

interface ICustomButtonProps {
    onClick: () => void
    backgroundColor: string
    borderColor: string
    color: string
    hoverBackgroundColor?: string
    hoverColor?: string
    text: string
}

const CustomButton: React.FC<ICustomButtonProps> = ({
    onClick,
    backgroundColor,
    borderColor,
    color,
    hoverBackgroundColor,
    hoverColor,
    text

}) => {
    return (
        <Button
            className="w-[110px] h-[40px] bg-white"
            sx={{
                color: color,
                backgroundColor: backgroundColor,
                textTransform: 'none',
                border: `1px solid ${borderColor}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: hoverBackgroundColor ?? backgroundColor,
                    color: hoverColor ?? color
                }
            }}
            onClick={onClick}
        >{text}</Button>
    )
}

export default CustomButton