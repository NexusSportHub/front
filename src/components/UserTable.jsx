import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Title from './Title';

const initialRows = [];

export default function Orders() {
  const [rows, setRows] = useState(initialRows);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');

    fetch(`http://localhost:8082/api/products/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        const transformedRows = data.map((item) => ({
          apiUrl: item.apiUrl,
          path: item.path,
          status: item.status,
          date: item.date,
          paidDate: item.paidDate,
          paymentMethod: item.paymentMethod,
          amount: item.apiResponse,
        }));

        setRows(transformedRows);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleOpenModal = (row) => {
    setSelectedRow(row);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  function preventDefault(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <Title>Recent Queries</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>date</TableCell>
            <TableCell>apiUrl</TableCell>
            <TableCell>path</TableCell>
            <TableCell>status</TableCell>
            <TableCell>paidDate</TableCell>
            <TableCell>paymentMethod</TableCell>
            <TableCell align="right">API Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.apiUrl}</TableCell>
              <TableCell>{row.path}</TableCell>
              <TableCell>{row.status.toString()}</TableCell>
              <TableCell>{row.paidDate}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">
                <button onClick={() => handleOpenModal(row)}>Show</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
      </Link>
      <Dialog open={selectedRow !== null} onClose={handleCloseModal}>
        <DialogContent>
          {selectedRow && <pre>{selectedRow.amount}</pre>}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
