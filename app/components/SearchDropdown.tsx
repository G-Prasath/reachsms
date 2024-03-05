import React from 'react'
import Select from 'react-select'

const SearchDropdown = () => {

    const options = [
        { value: 'india', label: 'India' },
        { value: 'amercia', label: 'Amercia' },
        { value: 'angola', label: 'Angola' },
        { value: 'arbua', label: 'Arbua' }
    ]

    const customStyles = {
        control: (styles: any) => ({
            ...styles,
            background: 'transparent',
            borderColor: '#4a4a4a',
            boxShadow: 'none',
            width: '100%'
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            borderBottom: '1px solid #ccc',
            color: state.isSelected ? '#fff' : '#000',
            backgroundColor: state.isSelected ? '#bf1249' : '#fff',
            padding: 10,
            '&:hover': {
                backgroundColor: '#bf1249',
                color: '#fff'
            }
        }),
    }

    const handleChange = (e: any) => {
        console.log('Options: ', e);
    }
    return (
        <div className='cursor-pointer'>
            <Select
                options={options}
                onChange={handleChange}
                styles={customStyles}
            />
        </div>
    )
}

export default SearchDropdown