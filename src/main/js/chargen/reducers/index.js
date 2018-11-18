import { combineReducers } from 'redux';
import attributes from 'chargen/reducers/attributes';
import derivedAttributes from 'chargen/reducers/derivedAttributes';
import info from 'chargen/reducers/info';
import options from 'chargen/reducers/options';

const chargen = combineReducers({ attributes, derivedAttributes, info, options });

export default chargen;
