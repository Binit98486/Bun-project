import { FormDataType } from "@/components/types/formbuildertypes";

const bridegroomFormData: FormDataType[] = [
    {
        label: 'Bride Name',
        name: 'name',
        placeholder: 'Please enter bride name',
        required: true,
        maxLength: 50,
    },
    {
        label: 'Father Name',
        name: 'father_name',
        placeholder: 'Enter Father Name',
        required: false,
        maxLength: 50,
    },
    {
        label: 'Mother Name',
        name: 'mother_name',
        placeholder: 'Enter Mother Name',
        required: false,
        maxLength: 50,
    },

    {
        label: 'Address',
        name: 'address',
        placeholder: 'Please enter Address',
        required: true,
        maxLength: 50,
    },
    {
        label: 'Sibling hierarchy',
        name: 'child_to',
        placeholder: 'Please enter Sibling hierarchy ',
        required: true,
        maxLength: 50,
    },
    {
        label: 'Instagram Id',
        name: 'insta_id',
        placeholder: 'instagram.com/name',
        required: true,
        maxLength: 50,
    },
    {
        label: 'Additional Info',
        name: 'additional_info',
        placeholder: 'additional_info',
        required: true,
        maxLength: 50,
    },



];

export default bridegroomFormData;