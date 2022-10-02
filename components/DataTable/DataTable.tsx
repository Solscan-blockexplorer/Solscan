import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

interface IDataTable {
  rows: GridRowsProp;
  columns: GridColDef[];
  loading: boolean;
  sx?: { [key: string]: string };
}

const DataTable = ({ rows, columns, loading, sx }: IDataTable) => {
  const [pageSize, setPageSize] = useState(2);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      sx={sx}
      checkboxSelection
      pagination
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[2, 5, 10]}
    />
  );
};

export default DataTable;
