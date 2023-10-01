import classNames from '@/components/utils/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
// import { ClipLoader } from 'react-spinners';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    isLoading?: boolean;
}

export default function Button({
    children,
    className,
    isLoading = false,
    ...props
}: ButtonProps) {
    // disable button if isLoading is true
    if (isLoading) props.disabled = true;

    return (
        <button
            {...props}
            className={classNames(
                className,
                props.disabled
                    ? 'bg-[#070772] text-white'
                    : 'bg-blue-900 text-white hover:bg-[#0e1967]',
                'flex w-fit flex-row  items-center justify-center gap-5 rounded-md px-5 py-3 font-medium uppercase transition-colors'
            )}
        >
            {/* {isLoading && <ClipLoader size={27} color={'#ffffff'} />} */}
            {!isLoading && children}
        </button>
    );
}