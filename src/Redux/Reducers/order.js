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

export const GetOrderById = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ORDER_BYID_REQ':
      return {
        ...state,
        loading: true,
        err: null
      }
    case 'ORDER_BYID_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: null
      }
    case 'ORDER_BYID_ERROR':
      return {
        ...state,
        loading: false,
        err: action.payload,
        data: []
      }
    default:
      return state
  }
}

export const UpdateOrder = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ORDER_UPDATE_REQ':
      return {
        ...state,
        loading: true,
        err: null
      }
    case 'ORDER_UPDATE_SUCCESS':
      return {
        ...state,
        loading: false,
        err: null
      }
    case 'ORDER_UPDATE_ERROR':
      return {
        ...state,
        loading: false,
        err: action.payload,
        data: []
      }
    default:
      return state
  }
}

export const GetOrderHis = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ORDER_HIS_REQ':
      return {
        ...state,
        loading: true,
        err: null
      }
    case 'ORDER_HIS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: null
      }
    case 'ORDER_HIS_ERROR':
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