import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

interface ToastProps {
    children: ReactNode;
}
export default function ToastProvider({ children }: ToastProps) {
    return (
        <>
            <ToastContainer limit={5} />
            {children}
        </>
    );
}