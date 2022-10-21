import './App.css';
import Header from './components/Header';
import FoodComponent from './components/FoodComponent';
import { useStateContext } from './context/ContextProvider';
import Sidebar from './components/Sidebar';

function App() {
  const { sidebar } = useStateContext()

  return (
    <div className="app">
      {/* <div className='app-header'> */}
        {sidebar? (
          <div className='sidebar'>
            <Sidebar />
          </div>
        ): (
          ""
        )}
        <Header />
      {/* </div> */}
      <FoodComponent />
      <h1>get started</h1>
    </div>
  );
}

export default App;
