import React, { useState } from 'react';
import SearchFormPro, { 
  SearchDataSourceProps,
  SearchButtonProps
} from '../../components/SearchFormPro';

const SearchForm = () => {
  const [filter, setFilter] = useState<any>({
    a: 123,
    b: 1,
    c: '2021-08-21 08:49:00'
  })
  const dataSource: SearchDataSourceProps[] = [
    {
      label: '输入框',
      key: 'a',
      type: 'Input',
      allowClear: true
    },
    {
      label: '单选框',
      key: 'b',
      type: 'Radio',
      options: [
        { label: '选择1', value: 1 },
        { label: '选择2', value: 2 },
        { label: '选择3', value: 3 },
      ]
    },
    {
      label: '日期',
      key: 'c',
      type: 'DatePicker',
      showTime: true,
      dateFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    {
      label: '始发省区',
      key: 'd',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'e',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'f',
      type: 'Input'
    }
  ]

  const searchButton: SearchButtonProps[] = [
    {
      label: '查询',
      onClick: () => console.log('filter', filter)
    },
    {
      label: '重置'
    },
  ]

  const onChange = (data: any) => {
    console.log('data', data)
    setFilter(data);
  }

  return (
    <SearchFormPro
      filter={filter}
      dataSource={dataSource}
      button={searchButton}
      onChange={onChange}
    />
  )
}

export default SearchForm;