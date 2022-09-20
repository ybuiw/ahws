import { ButtonProps } from 'antd';

export interface ProButtonOptionsProps extends ButtonProps {
  label: string;
  auth?: string;
  visbile?: boolean;
}

export interface ProButtonProps {
  gutter?: number;
  options?: ProButtonOptionsProps[]
}