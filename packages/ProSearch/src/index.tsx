import { ConfigProvider, Row, Col, Form, Button } from 'antd';
import ItemsBox from './Items';
import { ProSearchProps, ProSearchDataSoureProps } from './type';
import { getColSpan } from './utils';
import './index.less';

const ProSearch = (props: ProSearchProps) => {
  const {
    dataSource,
    gutter = 15
  } = props;
  
  const onFinish = (values: object) => {
    console.log('values==>', values)
  }

  return (
    <ConfigProvider input={{ autoComplete: 'off' }}>
      <div className='w--pro-search'>
        <Form onFinish={onFinish}>
          <Row gutter={gutter} className='rows'>
            {dataSource.map((item: ProSearchDataSoureProps, index: number) => {
              return (
                <Col key={index} className="cell" {...getColSpan(item.full)}>
                  {ItemsBox(item)}
                </Col>
              )
            })}
            <Col className='w--pro-search-btns'>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </ConfigProvider>
  )
}

export type { ProSearchProps, ProSearchDataSoureProps };

export default ProSearch;