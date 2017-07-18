import _ from 'lodash';
import { SHOW_CONFIRM_DIALOG, HIDE_CONFIRM_DIALOG } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SHOW_CONFIRM_DIALOG:
      return { isOpen: true, onConfirm: action.payload };
    case HIDE_CONFIRM_DIALOG:
      return { isOpen: false };
    default:
      return state;
  }
}
