import Crossroad from './Crossroad';
import Straightroad from './Straightroad';

function Screen({ screen, setNextSlide, setBadScreen }) {
  if (screen.isCrossroad === true) {
    return (
      <Crossroad
        prop={screen}
        setNextSlide={setNextSlide}
        setBadScreen={setBadScreen}
      />
    );
  }

  return <Straightroad prop={screen} setNextSlide={setNextSlide} />;
}

export default Screen;
