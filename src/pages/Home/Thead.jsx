import React from 'react';
import { TableHead,TableRow,TableCell } from '@mui/material';
const Thead = () => {
    return (
      <TableHead>
         <TableRow>

          <TableCell>Id</TableCell>
          <TableCell>FullName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Category</TableCell>
          <TableCell> Phone</TableCell>
          <TableCell>Telegram</TableCell>
          <TableCell> Whatsapp</TableCell>
          <TableCell align="center">Action </TableCell>
       </TableRow>

   </TableHead>
    );
}

export default Thead;
