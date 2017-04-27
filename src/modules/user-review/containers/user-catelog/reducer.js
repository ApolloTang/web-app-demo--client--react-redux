import _ from 'lodash';
import c from '../../common/actions-names';
import {nameSpace} from '../../config';
import {combineReducers} from 'redux';

const initialState = {
  isLoading: true,
  id_selectedUser: null
}

const userCatelog = (state = {...initialState}, action) => {
  switch (action.type) {
    case `${nameSpace}__userCatelog_init`: {
      return { ...state, }
      }
    case `${nameSpace}__userCatelog_fetch`: {
      const nextState = {
        ...state
      }
      return nextState;
    }
    case `${nameSpace}__userCatelog_fetch_success`: {
      const nextState = {
        ...state
      }
      return nextState;
    }
    case `${nameSpace}__userCatelog_fetch_fail`: {
    }
    default: {
      return state
    }
  }
}

export default userCatelog;
