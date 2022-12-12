import { InputHTMLAttributes } from 'react'
import './style.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
}

const Input = ({name, label, type="text",...rest}:InputProps) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      
      <input type={type} id={name} {...rest}/>
    </div>
  )
}

export default Input