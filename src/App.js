import { makeStyles } from '@material-ui/core/styles';

import SearchInput from './Components/SearchInput';

const useStyles = makeStyles({
  App: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'center'
  },
});

const App = () => {
  const classes = useStyles();

  const allProducts = [
    'apple', 'apricot', 'pineapple', 'tomato', 'carrot', 'cabbage', 'coconut', 'cucumber', 'celery', 'couliflower', 'courgette', 'lettuce', 'raddish'
  ];

  return (
    <div className={classes.App}>
      <h3>FoxList</h3>
      <SearchInput allProducts={allProducts} />
    </div>
  );
}

export default App
