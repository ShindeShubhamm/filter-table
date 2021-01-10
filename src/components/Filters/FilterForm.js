import React from 'react';

import { Select, TextField, MenuItem } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';

const FilterForm = (props) => {
  const { id, columnsList, values, onChange, handleDelete } = props;

  return (
    <div className='filter-form'>
      {id === 0 ? (
        <p className='form-field-first'>Where</p>
      ) : (
        <Select
          name='filter'
          className='form-field-first'
          variant='outlined'
          value={values.filter}
          onChange={(e) => onChange(id, e)}>
          <MenuItem value='AND'>AND</MenuItem>
          <MenuItem value='OR'>OR</MenuItem>
        </Select>
      )}
      <Select
        name='id'
        className='form-field'
        variant='outlined'
        displayEmpty
        value={values.id}
        onChange={(e) => onChange(id, e)}
        fullWidth>
        {columnsList.map((column) => (
          <MenuItem key={column.id} value={column.id}>
            {column.prettyName}
          </MenuItem>
        ))}
      </Select>
      <Select
        name='operator'
        className='form-field'
        variant='outlined'
        displayEmpty
        value={values.operator}
        onChange={(e) => onChange(id, e)}
        fullWidth>
        <MenuItem value='CONTAINS'>Contains</MenuItem>
        <MenuItem value='GTE'>{'>='}</MenuItem>
        <MenuItem value='LTE'>{'<='}</MenuItem>
        <MenuItem value='EQ'>Equals</MenuItem>
      </Select>
      <button
        type='button'
        className='delete-button'
        onClick={() => handleDelete(id)}>
        <AiOutlineDelete className='delete-icon' />
      </button>
    </div>
  );
};

export default FilterForm;
