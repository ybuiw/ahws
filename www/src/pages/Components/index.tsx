import Container from '@/components/Container';
import { componentsMenus } from '@/utils/menus'

const Page = () => {
  return (
    <Container data={componentsMenus} />
  )
}

export default Page;