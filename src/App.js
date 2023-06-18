import './App.css';
import NavBar from './components/TopBar'
import Background from './components/BackgroundImg';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;