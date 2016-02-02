export const PlayerStates = {
  STANDING: 'STANDING',
  JUMPING: 'JUMPING',
  WALKING: 'WALKING',
  RUNNING: 'RUNNING'
};

export const ActionTypes = {
  MOVE_UP: 'MOVE_UP',
  MOVE_DOWN: 'MOVE_DOWN',
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT'
}

// export const MOVE_UP = 'MOVE_UP';
// export const MOVE_DOWN = 'MOVE_DOWN';
// export const MOVE_LEFT = 'MOVE_LEFT';
// export const MOVE_RIGHT = 'MOVE_RIGHT';

export function moveUp(dist) {
  return {type: ActionTypes.MOVE_UP, dist};
}

export function moveDown(dist) {
  return {type: ActionTypes.MOVE_DOWN, dist};
}

export function moveLeft(dist) {
  return {type: ActionTypes.MOVE_LEFT, dist};
}

export function moveRight(dist) {
  return {type: ActionTypes.MOVE_RIGHT, dist};
}

export function playerControls(dispatch, e) {
  switch (e.code) {
  case 'KeyW':
    dispatch(moveUp(20));
    break;
  case 'KeyS':
    dispatch(moveDown(20));
    break;
  case 'KeyA':
    dispatch(moveLeft(20));
    break;
  case 'KeyD':
    dispatch(moveRight(20));
    break;
  default:
  }
}
