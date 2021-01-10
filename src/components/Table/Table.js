import React, { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import { FiCheck, FiX } from 'react-icons/fi';

const DisplayTable = (props) => {
  const { data } = props;

  // eslint-disable-next-line
  const [tableData, setTableData] = useState(data);

  return (
    <TableContainer component={Paper} className='my-table'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Screen Name</TableCell>
            <TableCell>Follower Count</TableCell>
            <TableCell>Following Count</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Verified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.screen_name}</TableCell>
              <TableCell>{row.followers_count}</TableCell>
              <TableCell>{row.following_count}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell align='center'>
                {row.verified ? (
                  <FiCheck color='#51b651' size={16} />
                ) : (
                  <FiX color='#d96565' size={16} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayTable;
