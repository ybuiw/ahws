import { Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import { ProButtonProps, ProButtonOptionsProps } from './type';
import './index.less';
export * from './type';

const ProButton = (props: ProButtonProps) => {
  const { gutter = 10, options = [] } = props;
  return (
    <Row gutter={gutter} className="w--pro-button">
      {options.map((item: ProButtonOptionsProps, index: number) => {
        const { visbile = true, label, className = '', ...other } = item
        if (visbile) {
          return (
            <Col key={index}>
              <Button className={`w--pro-button-btn ${className}`} {...other}>{label}</Button>
            </Col>
          )
        }
        return <Fragment key={index} />
      })}
    </Row>
  )
}

export default ProButton;