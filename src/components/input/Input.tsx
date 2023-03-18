import { InputProps } from 'types';
import './Input.scss';

export const Input: React.FC<InputProps> = ({ id, classes, placeholder = '' }: InputProps) => {
    return <input
        type="text"
        name={id}
        className={classes}
        placeholder={placeholder}
    />
}
