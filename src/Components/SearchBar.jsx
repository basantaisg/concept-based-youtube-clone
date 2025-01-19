import { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <input
          className='search-input'
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
