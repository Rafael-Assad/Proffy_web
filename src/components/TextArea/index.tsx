import { TextareaHTMLAttributes } from 'react'
import './style.scss'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  name: string;
  label: string;
}

const TextArea = ({name, label,...rest}:TextAreaProps) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      
      <textarea id={name} {...rest}/>
    </div>
  )
}

export default TextArea