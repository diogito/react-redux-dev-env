import api from '../utils/api';
import { all, takeLatest, put } from 'redux-saga/effects';
import { LOAD_STACK, LOAD_STACK_SUCCESS, BEGIN_AJAX_CALL } from '../constants/actionTypes.js';
import initialState from './initialState.js';

//REDUCERS
export default function stackReducer(state = initialState.stack, action) {
  switch (action.type) {
    case LOAD_STACK_SUCCESS:
      return action.stack ;
    default:
      return state;
  }
}

//ACTIONS
export function loadStack() {
  return { type: LOAD_STACK }
}
export function loadStackSuccess(stack) {
  return { type: LOAD_STACK_SUCCESS, stack };
}

//SAGAS
function* fetchStack() {
  yield put({ type: BEGIN_AJAX_CALL });
  const stack = yield api.get(`/stack`)
        .then(response =>response)
        .catch(err => {
           throw(err);
         });
  yield put({ type: LOAD_STACK_SUCCESS, stack });
}

function* actionWatcher() {
  yield takeLatest(LOAD_STACK, fetchStack);
}

export function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
