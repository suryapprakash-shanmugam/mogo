//import app css file
import './App.css';

//import pages
import BottomToTopButton from './components/UI/BottomToTopButton/BottomToTopButton';
import Wipper from './Wipper';
function App() {
  return (
    <div>
      <Wipper />
      <BottomToTopButton />
    </div>
  );
}

export default App;
