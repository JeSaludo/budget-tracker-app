import type React from 'react';
import type { InputProps } from '@/types/input';
import styles from '@/styles/components/input.module.scss';
const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  id,
  className,
  errorMessage,
}) => {
  return (
    <div className={`${styles['input-wrapper']}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`${className}`}
      />
      {errorMessage && <small className={styles['required-wrapper']}>{errorMessage}</small>}
    </div>
  );
};

export default Input;
