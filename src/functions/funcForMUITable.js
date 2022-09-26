import { styled, TableCell, tableCellClasses, TableRow } from "@mui/material";

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: 700,
  },

  [theme.breakpoints.down("md")]: {
    textAlign: 'center',
    fontWeight: 600,
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: '10px 5px',
    fontWeight: 500,
    paddingTop: 0.5,
    paddingBottom: 1,
  },
}));

export const StyledTableCellBody = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },

  [theme.breakpoints.down("md")]: {
    textAlign: 'center',
    fontWeight: 400,
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    padding: '20px 0px',
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
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
