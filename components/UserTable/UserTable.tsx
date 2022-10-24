// import { fontFamily, fontStyle, fontWeight } from "@mui/system";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Images from "../../utils/images";
import DataTable from "../DataTable/DataTable";

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "type",
    headerName: "Payment Type",
    width: 150,
  },
  {
    field: "description",
    headerName: "Details",
    width: 300,
    flex: 1,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    cellClassName: (params: GridCellParams) => {
      if (params.value == null) {
        return "";
      }
      return clsx("super-app", {
        negative: params.value < 0,
        positive: params.value > 0,
      });
    },
  },
  {
    field: "signature",
    headerName: "",
    width: 150,
    renderCell: (params: GridCellParams) => (
      <div className="more-info">
        <Link
          href={`https://solscan.io/tx/${params.value}`}
          className="more-info"
        >
          <a target="_blank" rel="noopener noreferrer">
            <img src={Images.moreInfoIcon} alt="solscan icon" />
          </a>
        </Link>
      </div>
    ),
  },
];

const userTableStyles = {
  display: "flex",
  flexGrow: 1,
  p: 2,
  "& .super-app.negative": {
    color: "#C62828;",
    fontWeight: "600",
  },
  "& .super-app.positive": {
    color: "#00897B",
    fontWeight: "600",
  },
};

const UserTable = ({ onError, walletTransactions, isloaded }: any) => {
  const [users, setUsers] = useState([]);

  return (
    walletTransactions && (
      <DataTable
        rows={walletTransactions}
        columns={columns}
        loading={isloaded}
        sx={userTableStyles}
      />
    )
  );
};

export default UserTable;
