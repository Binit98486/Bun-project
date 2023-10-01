export interface FormDataType {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    type?: 'TextArea' | 'Date' | 'Dropdown' | 'Checkbox' | 'Password';
    checkboxChildren?: string;
    maxLength?: number;
    dropdownList?: {
        label: string;
        value: string;
    }[];
}

export type FormInputType = { [key: string]: string | number | null };