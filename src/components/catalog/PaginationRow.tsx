import { Pagination } from '@material-ui/lab';
import React from 'react';

type Props = {
  page: any;
  onChange: (page: number) => void;
};

export const PaginationRow = ({ page, onChange }: Props) => {
  const currentPage = page.offset;
  const totalPageCount = Math.ceil(page.total / page.limit);

  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) =>
    onChange(page);

  if (totalPageCount === 1) return null;

  return (
    <Pagination
      count={totalPageCount}
      page={currentPage}
      onChange={handleChange}
    />
  );
};
