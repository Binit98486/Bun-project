import toast from 'react-hot-toast';
const notify = (message: any) => toast(message);
const notifySuccess = (message: any) => toast(message, { position: 'top-right', icon: '', duration: 5000, className: 'w-32 h-12' });
const notifyError = (message: any) => toast(message, { position: 'top-right', icon: '', duration: 5000, className: 'w-32 h-12' });
const notifyInfo = (message: any) => toast(message, { position: 'top-right', icon: '', duration: 5000, className: 'btn-info' });


export { notify, notifySuccess, notifyError, notifyInfo };