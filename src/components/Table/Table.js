import React, { useState, useEffect } from 'react';

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
  const { data, filters } = props;
  const [tableData, setTableData] = useState(data);

  const getFilteredData = (formData, data) => {
    switch (formData.operator) {
      case 'EQ':
        // eslint-disable-next-line
        return data.filter((d) => d[formData.id] == formData.value);
      case 'GTE':
        return data.filter((d) => d[formData.id] >= formData.value);
      case 'LTE':
        return data.filter((d) => d[formData.id] <= formData.value);
      case 'CONTAINS':
        return data.filter((d) => `${d[formData.id]}`.includes(formData.value));
      default:
        return [];
    }
  };

  const applyFilters = (validFilters) => {
    const andFilters = validFilters.filter((f) => f.filter === 'AND');
    const orFilters = validFilters.filter((f) => f.filter === 'OR');
    let filteredANDData = data;
    let filteredORData = [];
    for (const af of andFilters) {
      filteredANDData = getFilteredData(af, filteredANDData);
    }
    for (const orF of orFilters) {
      filteredORData.push(...getFilteredData(orF, data));
    }
    const finalData = new Array(
      ...new Set([...filteredANDData, ...filteredORData])
    );
    setTableData(finalData);
  };

  useEffect(() => {
    if (filters.conditions.length === 0) {
      setTableData(data);
      return;
    }
    const validFilters = filters.conditions.filter(
      (f) => f.id && f.operator && (f.value || f.value === false) && f.filter
    );
    if (validFilters.length === 0) {
      setTableData(data);
      return;
    }
    applyFilters(validFilters);
    // eslint-disable-next-line
  }, [filters]);

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
