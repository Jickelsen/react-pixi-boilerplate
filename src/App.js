import React, {Component, PropTypes} from 'react';
import pixi from 'pixi.js';
import {Stage, Sprite, VectorText} from 'react-pixi';
import {connect} from 'react-redux';
import {PlayerStates} from './constants/PlayerStates';
import {playerControls, moveUp, moveDown, moveLeft, moveRight} from './actions/player';

const SPEED = 0.005;
class App extends Component {
  render() {
    // Injected by connect() call:
    const {dispatch, playerMovement} = this.props;
    return (
        <div
            ref={function(input) {
                if (input !== null) {
                    input.focus();
                }
            }}
      tabIndex="1" onKeyDown={ (e) => playerControls(dispatch, e.nativeEvent)}>
        <Stage >
          <Sprite
            image={require('../assets/cupcake.png')}
            x={playerMovement.playerPos.x}
            y={playerMovement.playerPos.y}
            scale={new pixi.Point(0.5, 0.5)}
            pivot={new pixi.Point(640/2, 577/2)}
          />
        </Stage>
        </div >
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  playerMovement: PropTypes.objectOf(PropTypes.shape({
    playerState: PropTypes.oneOf(
      [
        'STANDING',
        'JUMPING',
        'WALKING',
        'RUNNING'
      ]
    ).isRequired,
    playerPos: PropTypes.objectOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired).isRequired
  }).isRequired).isRequired
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    playerMovement: state.playerMovement
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
