import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid React component
import 'ag-grid-community/styles/ag-grid.css'; // AG Grid CSS
import 'ag-grid-community/styles/ag-theme-alpine.css'; // AG Grid theme 

const SalesTable = ({saledata}) => {
  // Define the column definitions
  const [columnDefs] = useState([
    { headerName: 'Product Name', field: 'productName', sortable: true, filter: true },
    { headerName: 'Category', field: 'category', sortable: true, filter: true },
    { headerName: 'Quantity Sold', field: 'quantitySold', sortable: true, filter: true },
    { headerName: 'Sales Amount', field: 'salesAmount', sortable: true, filter: true }
  ]);


  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs} // Columns definition
        rowData={saledata} // Data for the rows
        pagination={true} // Enable pagination
        paginationPageSize={5} // Set page size for pagination
        defaultColDef={{
          sortable: true, // Allow sorting
          filter: true, // Allow filtering
          flex: 1, // Adjust column width to fit
        }}
      />
    </div>
  );
};

export default SalesTable;
