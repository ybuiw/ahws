import React from 'react';
import { Row, Col, Form } from 'antd';
import ItemsBox from './Items';
import { ProSearchProps, ProSearchDataSoureProps } from './type';
import './index.css';

const ProSearch = (props: ProSearchProps) => {
  const {
    dataSource,
    gutter = 10
  } = props;
  console.log(111)

  return (
    <div className='w--pro-search'>
      <Form>
        <Row gutter={gutter}>
        {dataSource.map((item: ProSearchDataSoureProps, index: number) => (
          <Col key={index}>
            <ItemsBox  />
          </Col>
        ))}
        </Row>
      </Form>
    </div>
  )
}

export type { ProSearchProps, ProSearchDataSoureProps };

export default ProSearch;