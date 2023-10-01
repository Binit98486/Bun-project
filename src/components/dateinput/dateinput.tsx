import classNames from '@/components/utils/classNames';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const DateInput = forwardRef(
    (props: DateInputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { className, error, ...customProps } = props;
        return (
            <div>
                <input
                    type="date"
                    id="session-date"
                    ref={ref}
                    max={Date()}
                    className={classNames(
                        'z-4 w-full rounded-md border-none bg-gray-100 px-4 py-4 outline-none focus:ring-2 dark:bg-gray-800 ',
                        className,
                        error?.message
                            ? 'focus:ring-red-500 dark:focus:ring-red-400'
                            : 'focus:ring-blue-500 dark:focus:ring-blue-400',
                        props.disabled ? 'cursor-not-allowed font-medium text-gray-500' : ''
                    )}
                    {...customProps}
                />
            </div>
        );
    }
);

DateInput.displayName = 'DateInput';
export default DateInput;