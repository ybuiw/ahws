import ProSearch, { ProSearchDataSoureProps } from '@ahws/pro-search';
import ProButton, { ProButtonOptionsProps } from '@ahws/pro-button';

const items: ProSearchDataSoureProps[] = [
  {
    type: 'Input',
    key: 'name',
    label: '姓名',
    attrs: {
      maxLength: 10,
      onChange: (v: any) => {
        console.log(111, v)
      }
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

const btns: ProButtonOptionsProps[] = [
  { label: '提交', type: 'primary', className: 'aaa' },
  { label: '重置' },
]

const Page = () => {
  return (
    <div>
      <ProSearch dataSource={items} />
      <ProButton options={btns} />
    </div>
  )
}

export default Page;