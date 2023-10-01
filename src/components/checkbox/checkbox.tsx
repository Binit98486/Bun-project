import {
    ForwardedRef,
    forwardRef,
    InputHTMLAttributes,
    ReactNode,
} from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}
const Checkbox = forwardRef(
    (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
        const { children, ...customProps } = props;

        return (
            <div className="inline-flex items-center gap-x-2">
                <input
                    {...customProps}
                    type="checkbox"
                    id="checkbox"
                    className={'h-4 w-4 focus:ring-1'}
                    ref={ref}
                />
                <label htmlFor="checkbox">{children}</label>
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;