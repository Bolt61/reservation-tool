export function createReducer(handlers, initialState = {}) {
  if (typeof handlers !== 'object') {
    throw new Error('handlers need to be a object');
  }

  return (state = initialState, action) => {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    } else if (Object.prototype.hasOwnProperty.call(handlers, '*')) {
      return handlers['*'](state, action);
    } else {
      return state;
    }
  };
}
