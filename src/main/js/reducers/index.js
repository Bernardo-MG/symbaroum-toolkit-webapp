import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import views from 'views/reducers';
import { entities } from 'example/reducers/pagination';
import chargen from 'chargen/reducers';
import model from 'example/reducers';

const pagination = combineReducers({
   entities
});

const rootReducer = combineReducers({
   pagination,
   chargen,
   model,
   routing,
   views
});

export default rootReducer;
