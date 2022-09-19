import { InputProps, SelectProps } from 'antd';
interface IItemGeneric<T, U> {
    type: T;
    key: string;
    label?: string;
    full?: number | boolean;
    attrs?: Omit<U, 'value'>;
}
export interface ProSearchProps {
    dataSource: ProSearchDataSoureProps[];
    filter?: object;
    gutter?: number;
    onChange?: (parmas: object) => void;
}
export declare type ProSearchDataSoureProps = IItemGeneric<'Input', InputProps> | IItemGeneric<'Select', SelectProps>;
export {};
