import classNames from '@/components/utils/classNames';
import { ReactNode } from 'react';


interface FormLabelProps {
    children: ReactNode;
    required?: boolean;
    className?: string;
}

export default function FormLabel({
    children,
    required,
    className,
}: FormLabelProps) {
    return (
        <label
            className={classNames(
                className,
                'font-semibold text-gray-800 dark:text-gray-400'
            )}
        >
            {children}
            {required && <span className="font-bold text-red-500">*</span>}
        </label>
    );
}