import { combineReducers } from 'redux';
import attributes from 'chargen/reducers/attributes';

const chargen = combineReducers({ attributes });

export default chargen;
