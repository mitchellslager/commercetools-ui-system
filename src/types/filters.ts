export interface ILabeledValue<T> {
  label: string;
  value: T;
}

export type FilterBlockOption = {
  label: string;
  value: string;
  count?: number;
};

export type FilterBlockConfig = {
  title: string;
  name: string;
  options: FilterBlockOption[];
  visibleAmount?: number;
  defaultExpanded?: boolean;
};
