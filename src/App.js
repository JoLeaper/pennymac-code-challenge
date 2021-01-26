import './App.css';
import './reset.css';
import ListContainer from './container/ListContainer/ListContainer';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <ListContainer />
    </div>
  );
}

export default App;
