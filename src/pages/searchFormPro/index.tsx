import SearchFormPro, { 
  SearchDataSourceProps,
  SearchButtonProps
} from '../../components/SearchFormPro';

const SearchForm = () => {
  const dataSource: SearchDataSourceProps[] = [
    {
      label: '始发省区',
      key: 'a',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'a',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'a',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'a',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'a',
      type: 'Input'
    },
    {
      label: '始发省区',
      key: 'a',
      type: 'Input'
    }
  ]

  const searchButton: SearchButtonProps[] = [
    {
      label: '查询'
    },
    {
      label: '重置'
    },
  ]

  return (
    <SearchFormPro
      dataSource={dataSource}
      button={searchButton}
    />
  )
}

export default SearchForm;