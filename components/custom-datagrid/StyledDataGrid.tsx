import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
    margin: "1rem 0",
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light" ? "#c6c6c6" : "rgba(255,255,255,0.65)",
    },
    "& .MuiDataGrid-row": {
      display: "flex",
      marginBottom: "1.5rem",
  },
  "& .MuiIconButton-root": {
    color: "#fff",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
    color: "#C6C6C6",
  },
  "& .more-info:hover": {
    cursor: "pointer",
  },
}));

export const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};
