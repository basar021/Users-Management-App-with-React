import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onHandleSearch }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onHandleSearch(search);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        style={{ padding: '10px', borderRadius: '8px' }}
        type="text"
        name="search"
        placeholder="Search name"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  onHandleSearch: PropTypes.func
};

export default Search;
