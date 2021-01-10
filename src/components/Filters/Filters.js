import React, { Fragment } from 'react';

import FilterForm from './FilterForm';

const Filters = (props) => {
  const {
    filters,
    handleFilterAdd,
    columnsList,
    handleFilterEdit,
    handleFilterDelete,
  } = props;

  const handleAddClick = () => {
    handleFilterAdd({
      id: '',
      operator: '',
      value: '',
      filter: 'AND',
    });
  };

  const handleOnChange = (id, e) => {
    handleFilterEdit(id, {
      ...filters.conditions[id],
      [e.target.name]: e.target.value,
    });
  };

  const handleDeleteClick = (index) => {
    handleFilterDelete(index);
  };

  return (
    <div className='filters-wrapper'>
      <h1 className='title'>Filters</h1>
      <div className='filters'>
        {filters.conditions.map((filter, index) => (
          <FilterForm
            key={index}
            id={index}
            values={filter}
            columnsList={columnsList}
            onChange={handleOnChange}
            handleDelete={handleDeleteClick}
          />
        ))}
        <button
          onClick={handleAddClick}
          type='button'
          className='addfilter-button'>
          + Add Filter
        </button>
      </div>
    </div>
  );
};

export default Filters;
