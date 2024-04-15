import React, { useState } from 'react';
 // Import CSS file for styling

function Search() {
  const details = [
    { id: 1, name: 'John', phone: '123-456-7890' },
    { id: 2, name: 'Alice', phone: '987-654-3210' },
    { id: 3, name: 'Bob', phone: '555-555-5555' },
    // Add more details as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDetails, setFilteredDetails] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.length >= 3) {
      const filtered = details.filter(detail =>
        Object.values(detail).some(value => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(term.toLowerCase());
          } else if (typeof value === 'number') {
            return String(value).includes(term);
          }
          return false;
        })
      );
      setFilteredDetails(filtered);
    } else {
      setFilteredDetails([]);
    }
  };

  return (
    <div className="container">
      <h1>Search Detail</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm.length >= 3 && (
        <div>
          <h2>Search Results:</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {filteredDetails.map(detail => (
                <tr key={detail.id}>
                  <td>{detail.id}</td>
                  <td>{detail.name}</td>
                  <td>{detail.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Search;
