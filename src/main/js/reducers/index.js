import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import views from 'views/reducers';
import chargen from 'chargen/reducers';

const rootReducer = combineReducers({
   chargen,
   routing,
   views
});

export default rootReducer;
