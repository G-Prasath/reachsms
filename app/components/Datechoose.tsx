import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const divStyle = {
    width: '100% !important',
    border: '1px solid blue',
    margin: '0px 20px'
}

const dateChoose: React.FC = () => (
    <Space direction="vertical">
        <DatePicker onChange={onChange} />
    </Space>
);

export default dateChoose;