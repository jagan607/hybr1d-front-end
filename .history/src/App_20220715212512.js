import logo from './logo.svg';
import './App.css';
import './components/SearchPage'
import SearchPage from './components/SearchPage';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      <SearchPage></SearchPage>
    </Provider>
    
  );
}

export default App;
