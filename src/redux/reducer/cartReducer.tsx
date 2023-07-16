import { SET_CART_COUNT, CART_INCREMENT, CART_DECREMENT} from '../constant';



export default function cartReducer(state = initialState, action:any) {

  if (action.type === SET_CART_COUNT) {
    console.log(action.payload,'pay')
    return {
      ...state,
      count: action.payload
    };
  }

  if (action.type === CART_INCREMENT) {
    const payload = action.payload || 1;
    return {
      ...state,
      count:state.count + payload
    }
  }

  if (action.type === CART_DECREMENT) {
    const payload = action.payload || 1;
    return {
      ...state,
      count:state.count - payload
    }
  }
//   if(action.type === CART_SET){
//     return {
//       ...state,
//       data: action.payload
//     }
//   }
//   if(action.type === ORDER_SUMMRARY_SET){
//     return {
//       ...state,
//       orderSummary: action.payload
//     }
//   }

  return state;
}
