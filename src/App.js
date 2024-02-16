import React, { useState, useEffect } from 'react';

import Search from './components/Search';
import Users from './components/Users';
import useFetch from './hook/useFetch';

const App = () => {
  // const [users, setUsers] = useState([]);
  // Task 2: use custom hook
  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const { users, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  const [usersCopy, setUsersCopy] = useState(users);

  useEffect(() => {
    if (users) {
      setUsersCopy(users);
    }
  }, [users]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const filter = usersCopy.filter((user) => user.id !== id);
    setUsersCopy(filter);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    let value = searchText.toLowerCase();

    const newSearch = users.filter((user) => {
      const searchName = user.name.toLowerCase();
      return searchName.startsWith(value);
    });
    setUsersCopy(newSearch);
  };

  // or
  /*
  const handleSearch = (searchText) => {
    const searchName = users.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setUsersCopy(searchName);
  };
  */

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {users.length > 1 && <Users users={usersCopy} onHandleDeleteUser={handleDeleteUser} />}
    </div>
  );
};

export default App;
