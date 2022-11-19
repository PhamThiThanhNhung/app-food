import React from 'react'

interface IButtonProps {
  icon?: React.ReactNode;
  name?: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ icon, name, className }) => {
  return (
    <div
      className={`text-white ${className} cursor-pointer rounded-[20px] h-fit w-fit`}
    >
      {icon}
      <span className="">{name}</span>
    </div>
  )
}

export default Button
