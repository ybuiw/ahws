import React from 'react';
import { ConfigProvider, Card, PageHeader, Form, Input, Select, Checkbox,  Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import DatePicker from './DatePicker';
import './index.css';
import { CardTabListType } from 'antd/lib/card';
import zhCN from 'antd/lib/locale/zh_CN';

const { Option } = Select;
const { RangePicker } =  DatePicker;

export type formType = 'input' | 'select' | 'checkbox' | 'datePicker' | 'rangePicker'

interface SearchChild {
  name?: string;
  value?: string;
}

export interface SearchDom {
  width?: number,
  title?: string;
  name?: string;
  value?: string;
  type?: formType;
  child?: SearchChild[];
}

export interface PageFace {
  /**
   * 页头标题
  */
  title?: React.ReactNode;
  /**
   * 是否显示页头返回按钮
  */
  isBack?: boolean;
  /**
   * 页头右侧区域
  */
  headExtra?: React.ReactNode;
  /**
   * 页头Tab列表
  */
  headTab?: CardTabListType[];
  /**
   * 筛选区域，支持自定义
  */
  searchDom?: React.ReactNode | SearchDom[];
  /**
   * 筛选区域下方位置自定义内容
  */
  centerDom?: React.ReactNode;
  /**
   * 内容区域自定义内容
  */
  contentDom?: React.ReactNode;
  /**
   * 内容区域
  */
  children?: React.ReactNode;
  /**
   * 页头Tab列表点击事件
  */
  onHeadTab?: (key: string) => void;
  /**
   * 筛选及重置点击事件
  */
  onSearch?: (values: any) => void;
}

const Pagetop = (props: PageFace) => {
  const isBack: boolean = Boolean(props.isBack);
  const onHeadTab = (key: string) => {
    props.onHeadTab?.(key)
  }

  return (
    <Card 
      title={
        <PageHeader
          style={{margin: 0, padding: 0}}
          className="site-page-header"
          backIcon={isBack && <ArrowLeftOutlined />}
          onBack={() => null}
          title={props.title}
          extra={props.headExtra}
        />
      }
      tabList={props.headTab}
      bodyStyle={{ padding: 0}}
      onTabChange={key => onHeadTab(key)}
      >
    </Card>
  )
}

const PageForm = (props: PageFace) => {
  const isDom = Array.isArray(props.searchDom) ? false : true;
  const searchDom: any = props.searchDom;
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
    props.onSearch?.(form.getFieldsValue());
  }

  const onFinish = (value: any) => {
    for (const i in value) {
      if (value[i] && value[i].$d) {
        value[i] = dayjs(new Date(value[i].$d)).format('YYYY-MM-DD');
      } else if (value[i] && value[i].length == 2 && value[i][0].$d && value[i][1].$d) {
        value[i][0] = dayjs(new Date(value[i][0].$d)).format('YYYY-MM-DD');
        value[i][1] = dayjs(new Date(value[i][1].$d)).format('YYYY-MM-DD')
      }
    }
    props.onSearch?.(value);
  }

  return (
    <Card bodyStyle={{ padding: '15px'}} style={{marginBottom: '15px'}}>
      {!isDom ?
        <ConfigProvider locale={zhCN} input={{
          autoComplete: 'off'
        }}>
          <Form className={`page-form-inline`} layout="inline" form={form} onFinish={onFinish}>
            {
              searchDom.map((item: any, index: number) => {
                if (item.type === 'input') {
                  return (
                    <Form.Item label={item.title} key={item.name} name={item.name}>
                      <Input placeholder={`输入${item.title}`} style={{width: item.width ? `${item.width}px` : ''}} />
                    </Form.Item>
                  )
                }
                if (item.type === 'select' && item.child && item.child.length > 0) {
                  return (
                    <Form.Item label={item.title} key={item.name} name={item.name}>
                      <Select placeholder="请选择" style={{width: item.width ? `${item.width}px` : ''}} >
                        {
                          item.child.map((item2: any, index2: number) => {
                            return <Option value={item2.value} key={index2}>{item2.name}</Option>
                          })
                        }
                      </Select>
                    </Form.Item>
                  )
                }
                if (item.type === 'checkbox' && item.child && item.child.length > 0) {
                  return (
                    <Form.Item label={item.title} key={item.name} name={item.name}>
                      <Checkbox.Group>
                        {
                          item.child.map((item2: any, index2: number) => {
                            return <Checkbox value={item2.value} key={index2}>{item2.name}</Checkbox>
                          })
                        }
                      </Checkbox.Group>
                    </Form.Item>
                  )
                }
                if (item.type === 'datePicker') {
                  return (
                    <Form.Item label={item.title} key={item.name} name={item.name}>
                      <DatePicker placeholder="选择日期" format="YYYY-MM-DD" style={{width: item.width ? `${item.width}px` : ''}} />
                    </Form.Item>
                  )
                }
                if (item.type === 'rangePicker') {
                  return (
                    <Form.Item label={item.title} key={item.name} name={item.name}>
                      <RangePicker format="YYYY-MM-DD" style={{width: item.width ? `${item.width}px` : ''}} />
                    </Form.Item>
                  )
                }
              })
            }
            <Form.Item>
              <Button type="primary" htmlType="submit">
                筛选
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
        : 
        <>
          {props.searchDom  }
        </>
      }
    </Card>
  )
}

const PageContent = (props: PageFace) => {
  return (
    <Card bodyStyle={{ padding: '15px'}}>
      {props.contentDom}
      {props.children}
    </Card>
  )
}


const PgaeContinar = (props: PageFace) => {
  return (
    <div className={`page-continar`}>
      <Pagetop {...props} />
      <div className={`page-children`}>
        {props.searchDom && <PageForm {...props} />}
        {props.centerDom}
        <PageContent {...props} />
      </div>
    </div>
  )
}

export default PgaeContinar;