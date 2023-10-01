import { useDarkMode } from '@/components/app/themeprovider';
import { FieldError } from 'react-hook-form';
import Select, { GroupBase, Props } from 'react-select';

interface CustomProps {
    error?: FieldError | undefined;
}

export default function SelectInputDropdown<
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & CustomProps) {
    const { error, ...customProps } = { ...props };
    const darkMode = useDarkMode()?.darkMode;

    return (
        <Select
            {...customProps}
            theme={(theme: any) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: darkMode ? '#4c5252' : 'rgb(230,243,250)', //hover option
                    primary: darkMode ? '#606a70' : '#67baf5', //active selected option
                    ...(darkMode && { primary50: '#606a70' }), //onclicked option
                    neutral0: darkMode ? '#1d2626' : 'white', // option background
                    ...(darkMode && { neutral20: '#606a70' }), // drop-icon color
                    ...(darkMode && { neutral80: 'lightgray' }), //selected option text color
                },
            })}
            styles={{
                control: (baseStyles: any, state: any) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                        ? error?.message
                            ? 'rgb(239 68 68)'
                            : darkMode
                                ? 'rgb(96 165 250)'
                                : 'rgb(59 130 246)'
                        : darkMode
                            ? 'rgb(17,24,39)'
                            : 'white',
                    borderWidth: '2px',
                    boxShadow: 'none',
                    '&:hover': {
                        borderColor: 'none',
                    },
                    borderRadius: '6px',
                    padding: '12px 0 12px 5px',
                    backgroundColor: darkMode ? 'rgb(31,41,55)' : 'rgb(243 244 246)',
                }),
            }}
        />
    );
}