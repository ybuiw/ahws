import { Fragment } from 'react';
import { Input } from 'antd';
import { ProSearchDataSoureProps } from './type';

export default (props: ProSearchDataSoureProps) => {
  const { type, label = '' } = props;
  if (type === 'input') {
    return <Input placeholder={`请输入${label}`} allowClear  />
  }
  return <Fragment />
}