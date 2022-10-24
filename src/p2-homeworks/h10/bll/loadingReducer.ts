const initState = {
  isLoading: false,
};
export type InitStateType = typeof initState;

export const loadingReducer = (
  state = initState,
  action: ActionTypes
): InitStateType => {
  // fix any
  switch (action.type) {
    case "HANDLE-LOADING": {
      return { ...state, isLoading: action.payload.isLoading };
    }
    default:
      return state;
  }
};
export type ActionTypes = handleLoadingACType;

export type handleLoadingACType = ReturnType<typeof handleLoadingAC>;

export const handleLoadingAC = (isLoading: boolean) => {
  return {
    type: "HANDLE-LOADING",
    payload: { isLoading },
  } as const;
}; // fix any
