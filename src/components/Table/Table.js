import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TableData } from '../../utils/data';

const DisplayTable = (props) => {
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
          {TableData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.screen_name}</TableCell>
              <TableCell>{row.followers_count}</TableCell>
              <TableCell>{row.following_count}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.verified ? 'true' : 'false'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayTable;
