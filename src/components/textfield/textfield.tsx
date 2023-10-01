import classNames from '@/components/utils/classNames';
import {
    FocusEvent,
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    useState,
} from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const TextField = forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
        const { className, onBlur, onChange, error, ...customProps } = props;
        const [inputValue, setInputValue] = useState<string>();

        const handleChange = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
            if (onChange) onChange(event);
            setInputValue(event.target.value);
        };
        const handleBlur = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
            if (onBlur) onBlur(event);
            setInputValue(event.target.value);
        };

        return (
            <textarea
                ref={ref}
                type="text"
                value={inputValue}
                onBlur={handleBlur}
                onChange={handleChange}
                className={classNames(
                    'w-full rounded-md border-none bg-gray-100 px-4 py-3 outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-200',
                    className,
                    error?.message ? 'focus:ring-red-500' : 'focus:ring-blue-500',
                    props.disabled ? 'cursor-not-allowed font-medium text-gray-500' : ''
                )}
                {...customProps}
            />
        );
    }
);

TextField.displayName = 'TextField';
export default TextField;