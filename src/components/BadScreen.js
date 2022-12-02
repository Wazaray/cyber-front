import BadCrossroad from './BadCrossroad';
import Straightroad from './Straightroad';

function BadScreen({ screen, setNextSlide, setBadScreen }) {
  /*const setNextSlide = () => {
    setScreen(data.filter(screen => screen.id === slide)[0]);
  };*/
  if (screen.isCrossroad === true) {
    return (
      <BadCrossroad
        prop={screen}
        setNextSlide={setNextSlide}
        setBadScreen={setBadScreen}
      />
    );
  }

  return <Straightroad prop={screen} setNextSlide={setNextSlide} />;
}

export default BadScreen;
