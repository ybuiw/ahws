import { Fragment } from 'react';
import { Input, Radio, DatePicker } from 'antd';
import moment from 'moment';
import { SearchDataSourceProps } from './';

interface SearchChildProps {
  item: SearchDataSourceProps;
  filter?: any;
  onChange?: (key: string, value: string) => void;
}

const SearchChild = (props: SearchChildProps) => {
  const {
    item: {
      label,
      key,
      type,
      dateFormat = 'YYYY-MM-DD',
      showTime,
      disabled,
      allowClear,
      options
    },
    filter,
    onChange
  } = props;

  const aaa = (key: string, value: string) => {
    console.log(key, value)
  }

  if (type === 'Input') {
    return <Input
      value={filter[key]}
      disabled={disabled}
      allowClear={allowClear}
      placeholder={`请输入${label}`}
      onChange={e => onChange?.(key, e.target.value)} />
  }
  if (type === 'Radio') {
    return <Radio.Group className="ahw-search-form-radio"
      value={filter[key]}
      disabled={disabled}
      options={options}
      optionType="button"
      onChange={e => onChange?.(key, e.target.value)} />
  }
  if (type === 'DatePicker') {
    return <DatePicker style={{ width: '100%' }}
      value={filter[key] && moment(filter[key])}
      showTime={showTime}
      disabled={disabled}
      allowClear={allowClear}
      onChange={e => onChange?.(key, moment(e).format(dateFormat))} />
  }
  return <Fragment />
}

export default SearchChild;