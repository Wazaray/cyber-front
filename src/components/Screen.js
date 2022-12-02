import Crossroad from './Crossroad';
import Straightroad from './Straightroad';
import LastScreen from './LastScreen';

function Screen({ screen, setNextSlide,setBadScreen }) {
  /*const setNextSlide = () => {
    setScreen(data.filter(screen => screen.id === slide)[0]);
  };*/
  if (screen.isCrossroad === true) {
    return <Crossroad prop={screen} setNextSlide={setNextSlide} setBadScreen={setBadScreen}/>;
  }

  return <Straightroad prop={screen} setNextSlide={setNextSlide} />;
}

export default Screen;
