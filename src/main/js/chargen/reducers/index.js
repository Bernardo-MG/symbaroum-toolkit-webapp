import { combineReducers } from 'redux';
import attributes from 'chargen/reducers/attributes';
import info from 'chargen/reducers/info';
import options from 'chargen/reducers/options';

const chargen = combineReducers({ attributes, info, options });

export default chargen;
