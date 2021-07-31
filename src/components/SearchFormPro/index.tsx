import React from 'react';
import { ConfigProvider, Row, Col, Button, Input } from 'antd';
import ChildItem from './Child';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.less';

type Type = 'Input' | 'InputNumber' | 'Select' | 'DatePicker' | 'Radio' | 'Checkbox';

/**
 * DataSource Props
*/
export interface SearchDataSourceProps {
  label: string;
  key: string;
  type?: Type;
  full?: boolean;
  dateFormat?: string;
  showTime?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  options?: any[];
}

/**
 * Button Props
*/
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
  onChange?: (filter: any) => void;
}


const SearchFormPro = (props: SearchFormProProps) => {
  const {
    filter = {},
    colSpan = { xs: 24, sm: 12, md: 8, lg: 6 },
    dataSource = [],
    button = [],
    onChange,
  } = props;

  const onChildChange = (key: string, value: string) => {
    const newFilter = {
      ...filter,
      ...{[key]: value}
    }
    onChange?.(newFilter)
  }

  return (
    <ConfigProvider locale={zhCN}>
      <div className="ahw-search-form clearfix">
        <Row className="ahw-search-form-row">
          {dataSource.map((item, index) => {
            return (
              <Col className="ahw-search-form-col" key={index} {...colSpan}>
                <div className="ahw-search-form-item">
                  <span className="ahw-search-form-item-label">{item.label}</span>
                  <ChildItem filter={filter} item={item} onChange={onChildChange} />
                </div>
              </Col>
            )
          })}
          {button.length > 0 && 
            <Col className="ahw-search-form-btns">
              {button.map((item, index) => {
                return (
                  <Button onClick={item.onClick} className="ahw-search-form-btn" key={index}>
                    {item.label}
                  </Button>
                )
              })}
            </Col>
          }
        </Row>
      </div>
    </ConfigProvider>
  )
}

export default SearchFormPro;