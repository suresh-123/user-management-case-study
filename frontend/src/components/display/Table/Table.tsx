import { useState } from "react";
import {
  StyledTableContainer,
  StyledTableCell,
  StyledBoldTableCell,
} from "./Table.styles";
import {
  Box,
  Table as MuiTable,
  TableBody,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { ITableProps } from "../../../types";

const Table = <T extends {}>({
  headers,
  data = [],
  page,
  setPage,
  totalRows = 0,
}: ITableProps<T>) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
 const handleChangePage = (_event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <StyledTableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {headers.map((label, index) => (
                <StyledBoldTableCell key={index}>{label}</StyledBoldTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                {Object.values(item).map((value, index) => (
                  <StyledTableCell key={index}>{String(value)}</StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 25, 50, 100]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ mb: 3 }}
      />
    </Box>
  );
};

export default Table;
