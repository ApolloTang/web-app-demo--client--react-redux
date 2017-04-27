import _ from 'lodash';
import {combineReducers} from 'redux';

import c from '../common/actions-names';
import {nameSpace} from '../config';

import userCatelog from '../containers/user-catelog/reducer';

const session = combineReducers( {
  userCatelog
});

import resources from './resources';

const moduleRoot = combineReducers({
  session,
  // session: (state, action)=>{
  //   const state_prev = {...state};
  //
  //   const userCatelog_prev =  state_prev.userCatelog;
  //   const userCatelog_next =  userCatelog(userCatelog_prev, action);
  //
  //   const state_next = {
  //     userCatelog: {
  //       ...userCatelog_next
  //     }
  //   }
  //
  //   return {
  //     ...state_next,
  //   }
  // },
  resources
});

export default moduleRoot;
