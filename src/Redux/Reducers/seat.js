const initialState = {
  data: [],
  loading: false,
  err: null
}

const Seat = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_SEAT_REQUEST':
      return {
        ...state,
        loading: true,
        err: null
      }
    case 'GET_SEAT_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: null
      }
    case 'GET_SEAT_FAILED':
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

export {
  Seat
}