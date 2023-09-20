import {
    FocusEvent,
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    useState,
} from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import classNames from '../../utils/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const Input = forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { className, onBlur, onChange, error, ...customProps } = props;
        const [inputValue, setInputValue] = useState<string>();

        const handleChange = (event: FocusEvent<HTMLInputElement, Element>) => {

            if (onChange) onChange(event);
            setInputValue(event.target.value);
        };
        const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
            if (onBlur) onBlur(event);
            setInputValue(event.target.value);
        };

        return (
            <input
                ref={ref}
                type="text"
                value={inputValue}
                onBlur={handleBlur}
                onChange={handleChange}
                className={classNames(
                    'w-full rounded-md border-none bg-gray-100 px-4 py-4 outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-200',
                    className,
                    error?.message
                        ? 'focus:ring-red-500 dark:focus:ring-red-400'
                        : 'focus:ring-blue-500 dark:focus:ring-blue-400',
                    props.disabled ? 'cursor-not-allowed font-medium text-gray-500' : ''
                )}
                {...customProps}
            />
        );
    }
);

Input.displayName = 'Input';
export default Input;