import { styled } from "@mui/system";
import { TableContainer, TableCell } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)`
  margin-top: 2rem;
  border: 1px solid black;
`;

export const StyledTableCell = styled(TableCell)`
  border: 1px solid black;
`;

export const StyledBoldTableCell = styled(TableCell)`
  font-weight: bold;
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
`;
