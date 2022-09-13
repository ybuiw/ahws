import Container from '@/components/Container';
import { docsMenus } from '@/utils/menus'

const Page = () => {
  return (
    <Container data={docsMenus} />
  )
}

export default Page;