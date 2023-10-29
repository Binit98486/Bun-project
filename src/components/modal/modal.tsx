import { Dispatch, ReactNode } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import ReactModal from 'react-modal';

interface ModalProps {
    children: ReactNode;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
    children,
    isModalOpen,
    setIsModalOpen,
}: ModalProps) {
    return (
        <ReactModal
            style={{
                overlay: {
                    backgroundColor: 'rgba(54, 53, 53, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: isModalOpen ? '1' : '0',
                    transitionProperty: 'all',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1',
                    transitionDuration: '200ms',
                },
            }}
            contentLabel="modal"
            className={`${isModalOpen ? 'opacity-100' : 'opacity-0'
                } rounded-md bg-white py-4 px-5 transition-all duration-200 ease-in-out`}
            isOpen={isModalOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => setIsModalOpen(false)}
            closeTimeoutMS={150}
        >
            <div className="relative">
                {children}

                <button
                    className=" group absolute -right-14 -top-12 "
                    onClick={() => setIsModalOpen(false)}
                >
                    <AiFillCloseCircle
                        className="text-white transition-all duration-150 ease-in-out group-hover:text-gray-100"
                        size={35}
                    />
                </button>
            </div>
        </ReactModal>
    );
}