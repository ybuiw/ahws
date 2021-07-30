import React from 'react';
import { Row, Col, Button, Input } from 'antd';
import './index.less';

type Type = 'Input' | 'InputNumber' | 'Select' | 'DatePicker' | 'Radio' | 'Checkbox';

export interface SearchDataSourceProps {
  label: string;
  key: string;
  type?: Type;
  full?: boolean;
}

export interface SearchButtonProps {
  label: string;
  type?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export interface SearchFormProProps {
  filter?: any;
  /** 响应式栅格 默认：{ xs: 24, sm: 12, md: 8, lg: 6 } */
  colSpan?: any;
  /** 是否展开并且没有收缩展开的按钮 */
  openup?: boolean;
  dataSource?: SearchDataSourceProps[];
  button?: SearchButtonProps[];
  onChange?: () => void;
}


const SearchFormPro = (props: SearchFormProProps) => {
  const {
    filter = {},
    colSpan = { xs: 24, sm: 12, md: 8, lg: 6 },
    dataSource = [],
    button = []
  } = props;
  console.log(111)
  return (
    <div className="ahw-search-form clearfix">
      <Row className="ahw-search-form-row">
        {dataSource.map((item, index) => {
          return (
            <Col className="ahw-search-form-col" key={index} {...colSpan}>
              <div className="ahw-search-form-item">
                <span className="ahw-search-form-item-label">{item.label}</span>
                <Input />
              </div>
            </Col>
          )
        })}
        {button.length > 0 && 
          <Col className="ahw-search-form-btns">
            {button.map((item, index) => {
              return (
                <Button className="ahw-search-form-btn" key={index}>
                  {item.label}
                </Button>
              )
            })}
          </Col>
        }
      </Row>
    </div>
  )
}

export default SearchFormPro;