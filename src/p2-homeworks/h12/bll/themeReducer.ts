const initState = {
  theme: "some",
};
export type InitStateType = typeof initState;

export const themeReducer = (
  state = initState,
  action: ActionTypes
): InitStateType => {
  // fix any
  switch (action.type) {
    case "SET-THEME": {
      return { ...state, theme: action.payload.theme };
    }
    default:
      return state;
  }
};
export type ActionTypes = setThemeACType;

export type setThemeACType = ReturnType<typeof setThemeAC>;

export const setThemeAC = (theme: string) => {
  return {
    type: "SET-THEME",
    payload: { theme },
  } as const;
}; // fix any
