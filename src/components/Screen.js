import Crossroad from './Crossroad';
import Straightroad from './Straightroad';
import LastScreen from './LastScreen';
import FirstScreen from './FirstScreen';

function Screen({ screen, setNextSlide, initDataBaseId }) {
  console.log('propScreen : ' + screen);
  /*const setNextSlide = () => {
    setScreen(data.filter(screen => screen.id === slide)[0]);
  };*/
  if (screen.id === 998) {
    return <FirstScreen initDataBaseId={initDataBaseId} />;
  } else if (screen.id === 999) {
    return <LastScreen />;
  } else if (screen.isCrossroad === true) {
    return <Crossroad prop={screen} setNextSlide={setNextSlide} />;
  }

  return <Straightroad prop={screen} setNextSlide={setNextSlide} />;
}

export default Screen;
