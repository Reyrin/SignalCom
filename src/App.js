import './App.css';
import Payment from './components/Payment/Payment';
import Installation from './components/Installation/Installation';
import Activation from './components/Activation/Activation';
import Description from './components/Description/Description';

function App() {
  return (
    <div className='app-wrapper'>
      <Payment />
      <Installation />
      <Activation />
      <Description />
    </div>
  );
}

export default App;
