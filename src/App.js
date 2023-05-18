
import './App.css';
import Header from './component/Header/Header';
import MusicContainer from './component/musicContainer/musicContainer';
import MusicProgressBar from './component/musicProgressBar/musicProgressBar';

const App = () => {
  return (
    <>
      <div className="container_fluid">
        <div className="container-box">
          <Header />
          <MusicContainer index={0}/>
          
        </div>
      </div>
    </>
  );
}

export default App;
