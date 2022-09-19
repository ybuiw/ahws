export declare type dataSoureType = 'input' | 'select' | 'date' | 'radio' | 'checkbox' | 'render';
export interface ProSearchProps {
    dataSource: ProSearchDataSoureProps[];
    span?: number;
    filter?: object;
    gutter?: number;
    onChange?: (parmas: object) => void;
}
export interface ProSearchDataSoureProps {
    type: dataSoureType;
    key: string;
    label?: string;
    full?: number | boolean;
}
