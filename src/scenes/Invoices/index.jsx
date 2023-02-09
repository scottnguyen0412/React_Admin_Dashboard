import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { colorTokens } from "../../theme";
import { mockDataInvoices } from "../../data/fakeData";
import Header from "../../components/Header";


const InvoicesPage = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      // Custom render display on UI
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          S{params.row.cost} 
        </Typography>
      )
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Invoices"
        subtitle="List of Invoices"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        // Change style datagrid mui table
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          // Change color multiple checkbox
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
            // Enable multiple checkbox
            checkboxSelection
            rows={mockDataInvoices}
            columns={columns}
        />
      </Box>
    </Box>
  );
};

export default InvoicesPage;