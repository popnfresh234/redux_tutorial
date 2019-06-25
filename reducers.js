import { combineReducers } from 'redux';
import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function todos( state = [], action ) {
  switch ( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map( ( todo, index ) => {
        if ( index === action.index ) {
          return Object.assign( {}, todo, {
            completed: !todo.completed,
          } );
        }
        return todo;
      } );
    default:
      return state;
  }
}

function visibilityFilter( state = SHOW_ALL, action ) {
  switch ( action.type ) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}


const todoApp = combineReducers( {
  visibilityFilter,
  todos,
} );


export default todoApp;

// Example app state
// {
//     visibilityFilter: 'SHOW_ALL',
//     todos: [
//       {
//         text: 'Consider using Redux',
//         completed: true
//       },
//       {
//         text: 'Keep all state in a single tree',
//         completed: false
//       }
//     ]
//   }
