import { useState } from 'react';
import { IconButton, InputAdornment, TextField, Collapse } from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

const SearchButton = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchText('');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {/* Search Icon - Luôn hiển thị */}
      <IconButton
        onClick={handleSearchClick}
        style={{
          transform: showSearch ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          visibility: showSearch ? 'hidden' : 'visible'
        }}
      >
        <SearchIcon style={{ color: 'white' }} />
      </IconButton>

      {/* Search Field */}
      <Collapse
        in={showSearch}
        orientation="horizontal"
        style={{
          position: 'absolute',
          right: 0,
          zIndex: 1
        }}
      >
        <TextField
          autoFocus
          variant="outlined"
          placeholder="Tìm kiếm..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleCloseSearch} size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              backgroundColor: 'white',
              borderRadius: '20px',
              height: '40px',
              width: '250px'
            }
          }}
        />
      </Collapse>
    </div>
  );
};

export default SearchButton;
