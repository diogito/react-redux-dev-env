import { BEGIN_AJAX_CALL, AJAX_CALL_ERROR } from '../constants/actionTypes';
import initialState from './initialState';

function actionTypeEndsinSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

//REDUCERS
export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == BEGIN_AJAX_CALL) {
    return state + 1;
  } else if(action.type == AJAX_CALL_ERROR || actionTypeEndsinSuccess(action.type)) {
    return state - 1;
  }

  return state;
}

//ACTIONS
export function beginAjaxCall() {
  return { type: BEGIN_AJAX_CALL }
}

export function ajaxCallError() {
  return { type: AJAX_CALL_ERROR }
}
