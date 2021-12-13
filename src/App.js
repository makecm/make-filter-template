import PropTypes from "prop-types";
import './App.css';
  
function App({ color, filter, image, position }) {
  return (
    <div className="App" 
    style={{ 
      backgroundImage: `url('${image}')`, 
      backgroundColor: `${color}`,
      backgroundBlendMode: `${filter}`,
      backgroundPosition: `${position}`  }}>
    </div>
  );
}

App.propTypes = {
  color: PropTypes.string,
  filter: PropTypes.string,
  image: PropTypes.string,
  position: PropTypes.string,
}

App.defaultProps = {
  color: 'transparent',
  filter: 'multiply',
  position: '50% 5%',
  image: 'https://source.unsplash.com/collection/16599199/',
}

export default App;
