import * as types from '../constants/ActionTypes';

export function moveUp(dist) {
  return {type: types.MOVE_UP, dist};
}

export function moveDown(dist) {
  return {type: types.MOVE_DOWN, dist};
}

export function moveLeft(dist) {
  return {type: types.MOVE_LEFT, dist};
}

export function moveRight(dist) {
  return {type: types.MOVE_RIGHT, dist};
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
