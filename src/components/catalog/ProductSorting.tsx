import { FormControl, Select, MenuItem } from '@material-ui/core';
import React from 'react';

export type SortOption =
  | 'default'
  | 'score desc'
  | 'createdAt desc'
  | 'price desc'
  | 'price asc';

type Props = {
  sort: SortOption;
  onChange: () => void;
};

export const ProductSorting = ({ sort, onChange }: Props) => {
  return (
    <FormControl style={{ minWidth: 200 }}>
      <Select variant="outlined" value={sort} onChange={onChange}>
        <MenuItem value="score desc">Popularity</MenuItem>
        <MenuItem value="createdAt desc">Newest products</MenuItem>
        <MenuItem value="price asc">Lowest price</MenuItem>
        <MenuItem value="price desc">Highest price</MenuItem>
      </Select>
    </FormControl>
  );
};
