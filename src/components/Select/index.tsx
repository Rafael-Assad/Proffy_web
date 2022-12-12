import { SelectHTMLAttributes } from 'react'
import './style.scss'

interface OptionsObj {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
  label: string;
  options: OptionsObj[]
}

const Select = ({name, label, options, ...rest}:SelectProps) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      
      <select id={name} {...rest}>
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>

        {options.map(({value, label}, index) =>{
          return (
            <option key={index} value={value}>
              {label}
            </option>
            )
        })}
      </select>
    </div>
  )
}

export default Select