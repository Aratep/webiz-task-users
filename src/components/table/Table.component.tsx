import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom"

// UTILITIES
import { generateUUID, sortAsc, sortDesc, formatAdderss } from "utilities";

type CTableType = {
  headItems: [];
  bodyItems: any;
  onSortChange?: any;
  sortField?: string;
};

function CTable({
  headItems,
  bodyItems,
  sortField,
  onSortChange,
}: CTableType) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [sortDirection, setSortDirection] = useState('asc');
  const navigate = useNavigate();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(() => {
    const bodyItemsCopy = Object.assign([], bodyItems);
    return bodyItemsCopy?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    // eslint-disable-next-line
  }, [page, rowsPerPage, onSortChange]);

  const handleSort = (item: any) => {
    setSortDirection((dir) => {
      return dir === 'asc' ? 'desc' : 'asc'
    })
    if (item.isSortable) {
      if (sortDirection === 'asc') {
        sortAsc(visibleRows, sortField)
      } else {
        sortDesc(visibleRows, sortField)
      }
    }
  }

  const handleNameClick = (id: number, name: string) => navigate(`/posts/${name}/${id}`);

  return (
    <TableContainer
      component={Paper}
      className="c-table"
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headItems?.map((item: any) => (
              <TableCell key={generateUUID()} onClick={() => handleSort(item)}>
                {item.displayName.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows?.map((c: any) => {
            return (
              <TableRow key={generateUUID()}>
                {headItems?.map((head: any) => {
                  if (head.label === "address") {
                    return <TableCell key={generateUUID()}>
                      {formatAdderss(c[head.label], 20)}
                    </TableCell>
                  }

                  return <TableCell key={generateUUID()} onClick={() => handleNameClick(c.id, c.name)}>
                    {c[head.label]}
                  </TableCell>
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[4, 8, 10]}
        component="div"
        count={bodyItems?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer >
  );
}

export default CTable;
