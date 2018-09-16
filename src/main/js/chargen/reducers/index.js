import { combineReducers } from 'redux';
import attributes from 'chargen/reducers/attributes';
import info from 'chargen/reducers/info';

const chargen = combineReducers({ attributes, info });

export default chargen;
