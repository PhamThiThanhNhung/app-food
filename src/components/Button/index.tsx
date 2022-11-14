import React from 'react'

interface IButtonProps {
    icon?: React.ReactNode;
    name?: string;
    className?: string;
    onClick: () => void;
}

const Button = ({icon, name, className, onClick}: IButtonProps) => {
  return (
    <div
     className={`text-white py-[10px] px-[20px] bg-[#BB0707] ${className} cursor-pointer rounded-[20px] h-fit w-fit text-[32px]`}
     onClick={onClick}
     >
        {icon}
        <span className="">{name}</span>
    </div>
  )
}

export default Button
