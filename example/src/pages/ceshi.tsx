import ProSearch, { ProSearchDataSoureProps } from '@ahws/pro-search'

const items: ProSearchDataSoureProps[] = [
  {
    type: 'Input',
    key: 'name',
    label: '姓名',
    attrs: {
      maxLength: 10
    }
  },
  {
    type: 'Select',
    key: 'addr',
    label: '地址',
    attrs: {
      options: [
        { label: 'Jack1', value: 1 },
        { label: 'Jack2', value: 2 }
      ],
      mode: 'multiple',
      maxLength: 10,
      allowClear: false
    }
  }
]

const Page = () => {
  return (
    <div>
      <ProSearch dataSource={items} />
    </div>
  )
}

export default Page;