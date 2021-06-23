import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const App = () => {
  const allProducts = ['apple', 'apricot', 'pineapple', 'tomato', 'carrot', 'cabbage', 'coconut', 'cucumber', 'celery', 'couliflower', 'courgette', 'lettuce', 'raddish'];

  const [products, setProducts] = useState([]);

  const filterVegArray = (e) => {
    const searchValue = e.target.value;
    const filterdArray = allProducts.filter(p => p.toLowerCase().includes(searchValue.toLowerCase()) && p[0] === searchValue[0]?.toLowerCase());

    setProducts(searchValue.length > 0 ? filterdArray : []);
  };

  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>FoxList</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={products}
        renderInput={(params) => (
          <TextField {...params}
            onChange={e => filterVegArray(e)}
            variant="outlined"
            label="Fox tail"
          />
        )}
      />
    </div>
  );
}

export default App
