import ProSearch, { ProSearchDataSoureProps } from '@ahws/pro-search'

const items: ProSearchDataSoureProps[] = [
  {
    type: 'input',
    key: 'name',
    label: '姓名'
  },
  {
    type: 'input',
    key: 'addr',
    label: '地址',
    full: 2
  },
  {
    type: 'input',
    key: 'name3',
    label: '姓名'
  },
  {
    type: 'input',
    key: 'addr4',
    label: '地址'
  },
  {
    type: 'input',
    key: 'name5',
    label: '姓名'
  },
  {
    type: 'input',
    key: 'addr6',
    label: '地址'
  },
  {
    type: 'input',
    key: 'name7',
    label: '姓名'
  },
  {
    type: 'input',
    key: 'addr8',
    label: '地址'
  },
]

const Page = () => {
  return (
    <div>
      <ProSearch dataSource={items} />
    </div>
  )
}

export default Page;