import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { CustomPagination, StyledDataGrid } from "../custom-datagrid/StyledDataGrid";

interface IDataTable {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
  sx?: { [key: string]: string | number | {} };
}

const DataTable = ({ rows, columns, loading, sx }: IDataTable) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <Box sx={sx}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        components={{
          Pagination: CustomPagination,
        }}
        autoHeight={true}
        pageSize={pageSize}
        // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        // rowsPerPageOptions={[10, 25, 50]}
        getRowId={(row: any) => row.id}
      />
    </Box>
  );
};

export default DataTable;
