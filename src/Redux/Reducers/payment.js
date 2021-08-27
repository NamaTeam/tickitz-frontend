const initialState = {
  data: [],
  loading: false
}

const Gopay = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GOPAY_CHARGE_REQ':
      return {
        ...state,
        loading: true
      }
    case 'GOPAY_CHARGE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case 'GOPAY_CHARGE_ERROR':
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

export { Gopay }