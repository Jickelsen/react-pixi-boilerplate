import {ActionTypes, PlayerStates} from '../actions/player';
import {combineReducers} from 'redux';


const initialPlayerState = {
  playerState: PlayerStates.STANDING,
  playerPos: {x: 0,
              y: 0}
};

function playerMovement(state = initialPlayerState, action) {
  if (state.playerState !== PlayerStates.JUMPING) {
    switch (action.type) {
    case ActionTypes.MOVE_UP:
        return {
            playerState: PlayerStates.WALKING,
            playerPos: {x: state.playerPos.x,
                        y: state.playerPos.y-action.dist}
        };
    case ActionTypes.MOVE_DOWN:
      return {
        playerState: PlayerStates.WALKING,
        playerPos: {x: state.playerPos.x,
                    y: state.playerPos.y+action.dist}
      };
    case ActionTypes.MOVE_LEFT:
      return {
        playerState: PlayerStates.WALKING,
        playerPos: {x: state.playerPos.x-action.dist,
                    y: state.playerPos.y}
      };
    case ActionTypes.MOVE_RIGHT:
      return {
        playerState: PlayerStates.WALKING,
        playerPos: {x: state.playerPos.x+action.dist,
                    y: state.playerPos.y}
      };
    default:
        return state;
    }
  }
  return state;
}

const rootReducer = combineReducers({
  playerMovement
});

export default rootReducer;

// function app(state = {}, action) {
//   return {
//     player: playerMovement(state.player, action)
//   }
// }
