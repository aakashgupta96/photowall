import { combineReducers } from 'redux'

function comments(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      if (state[action.postId]) {
        return { ...state, [action.postId]: [action.comment, ...state[action.postId]] }
      }
      else
        return { ...state, [action.postId]: [action.comment] }
    case 'LOAD_COMMENTS': return action.comments
    case 'REMOVE_POST':
      return Object.keys(state).filter((postId) => Number(postId) !== action.postId).reduce((obj, key) => ({ ...obj, [key]: state[key] }), {})
    default: return state
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case 'ADD_POST': return [...state, action.post]
    case 'LOAD_POSTS': return action.posts
    default: return state
  }
}

const rootReducer = combineReducers({ comments, posts })
export default rootReducer