import { Fragment } from 'react';
import { Input, Select } from 'antd';
import { ProSearchDataSoureProps } from './type';

export default (props: ProSearchDataSoureProps) => {
  const { type, label = '', attrs } = props;
  if (type === 'Input') {
    return <Input placeholder={`请输入${label}`} allowClear {...attrs} />
  }
  if (type === 'Select') {
    return <Select placeholder={`请选择${label}`} allowClear {...attrs} />
  }
  return <Fragment />
}