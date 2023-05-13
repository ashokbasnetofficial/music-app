
import './App.css';
import Header from './component/Header/Header';
import MusicContainer from './component/musicContainer/musicContainer';

const App = () => {
  return (
    <>
      <div className="container_fluid">
        <div className="container-box">
          <Header />
          <MusicContainer />
        </div>
      </div>
    </>
  );
}

export default App;
