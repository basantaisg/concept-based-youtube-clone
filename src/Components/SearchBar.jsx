import { useState } from 'react';
import { Paper, TextField } from '@mui/material';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label='Search....'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </Paper>
  );
};

export default SearchBar;
