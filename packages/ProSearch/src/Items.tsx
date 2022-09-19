import { Form } from 'antd';
import { ProSearchDataSoureProps } from './type';
import Render from './render';

const Items = (props: ProSearchDataSoureProps) => {
  const { label, key = '' } = props;

  return (
    <div className='w--pro-search-items'>
      <div className='label'>{label}</div>
      <div className='render'>
        <Form.Item
          name={key}
        >
          {Render(props)}
        </Form.Item>
      </div>
    </div>
  )
}

export default Items;