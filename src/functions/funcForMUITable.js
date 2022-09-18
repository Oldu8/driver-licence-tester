import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },

  [theme.breakpoints.down("md")]: {
    paddingTop: 1,
    paddingBottom: 2,
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0.5,
    lineHeight: "1 rem",
    paddingBottom: 1,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
