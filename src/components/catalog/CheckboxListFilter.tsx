import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { byChecked } from '../../utils/sort';
import CheckboxInput from '../common/CheckboxInput';

const checkboxFilterStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    width: '100%',
    maxHeight: 200,
    overflowY: 'scroll',
  },
  button: {
    marginTop: 10,
  },
});

const CheckboxListFilter: React.FunctionComponent<{
  name: string;
  options: {
    label: string;
    value: string;
    count?: number;
  }[];
  visibleAmount?: number;
  filters: any;
  sort?: (a: { label: string }, b: { label: string }) => number;
  onRemoveFilter: (f: { label: string; value: string }) => void;
  onSetFilter: (f: { label: string; value: string }) => void;
}> = ({
  options,
  name,
  visibleAmount = 3,
  filters,
  sort,
  onRemoveFilter,
  onSetFilter,
}) => {
  const classes = checkboxFilterStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filters[name].includes(e.target.value)
      ? onRemoveFilter({ label: name, value: e.target.value })
      : onSetFilter({ label: name, value: e.target.value });
  };

  const hasHiddenItems = options.length > visibleAmount;

  const filteredOptions = options
    .sort(sort ?? byChecked(filters[name]))
    .slice(0, !isExpanded ? visibleAmount : options.length);

  return (
    <>
      <ul className={classes.root}>
        {filteredOptions.map(o => (
          <li key={o.value}>
            <CheckboxInput
              checked={filters[name].includes(o.value)}
              label={o.label}
              value={o.value}
              count={o.count}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
      {hasHiddenItems && (
        <Button
          type="button"
          variant="text"
          className={classes.button}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? 'Show more' : 'Show less'}
        </Button>
      )}
    </>
  );
};

export default CheckboxListFilter;
