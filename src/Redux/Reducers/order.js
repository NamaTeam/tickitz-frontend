const initialState = {
  data: [],
  loading: false,
  err: null
}

export const AddOrder = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_ORDER_REQ':
      return {
        ...state,
        loading: true,
        err: null
      }
    case 'ADD_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        err: null
      }
    case 'ADD_ORDER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state
  }
}