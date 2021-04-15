import { Button } from '@material-ui/core';
import React from 'react';
import { FilterBlockConfig, ILabeledValue } from '../../types/filters';
import CheckboxListFilter from './CheckboxListFilter';
import FilterBlock from './FilterBlock';

export const Filters = ({
  filterBlockConfigs,
  filterState,
  onReset,
  onRemoveFilter,
  onSetFilter,
  resetButtonLabel,
}: {
  filterBlockConfigs: FilterBlockConfig[];
  filterState: any;
  onReset: () => void;
  onRemoveFilter: ({ label, value }: ILabeledValue<string>) => void;
  onSetFilter: ({ label, value }: ILabeledValue<string>) => void;
  resetButtonLabel?: string;
}) => {
  return (
    <div>
      <Button variant="text" onClick={onReset}>
        {resetButtonLabel ?? 'Reset filters'}
      </Button>

      {filterBlockConfigs.map(item => (
        <FilterBlock
          key={item.name}
          title={item.title}
          defaultExpanded={item.defaultExpanded}
        >
          <CheckboxListFilter
            name={item.name}
            options={item.options}
            filters={filterState}
            onRemoveFilter={onRemoveFilter}
            onSetFilter={onSetFilter}
          />
        </FilterBlock>
      ))}
    </div>
  );
};
