const INIT_STATE = {
  carts: [],
};
export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      // return {
      //   carts: [...state.carts, action.payload],
      // };
      const Index = state.carts.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (Index >= 0) {
        state.carts[Index].qnty += 1;
      } else {
        const temp = {
          ...action.payload,
          qnty: 1,
        };
        return {
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter((e) => (e.id === action.payload ? "" : e)),
      };
    case "RMV_ONE":
      const IteamIndex_dec = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);
        console.log([...state.carts, dltiteams]);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[IteamIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);

        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
