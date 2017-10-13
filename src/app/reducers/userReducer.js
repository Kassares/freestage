import {
  TEST_TYPE,
} from '../actions/types/index';

export default function(state = {}, action) {
  switch(action.type) {
    case TEST_TYPE:
      return { ...state };
  }

  return state;
}