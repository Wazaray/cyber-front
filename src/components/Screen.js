import Crossroad from './Crossroad';
import Straightroad from './Straightroad';

function Screen({ screen, setNextSlide }) {
  console.log('propScreen : ' + screen);
  /*const setNextSlide = () => {
    setScreen(data.filter(screen => screen.id === slide)[0]);
  };*/
  if (screen.isCrossroad === true) {
    return <Crossroad prop={screen} setNextSlide={setNextSlide} />;
  }

  return <Straightroad prop={screen} setNextSlide={setNextSlide} />;
}

export default Screen;
