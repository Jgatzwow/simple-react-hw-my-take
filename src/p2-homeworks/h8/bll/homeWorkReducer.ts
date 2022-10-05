import { UserType } from "../HW8";

export const homeWorkReducer = (
  state: UserType[],
  action: ActionsType
): any => {
  // need to fix any
  switch (action.type) {
    case "SORT-UP": {
      // need to fix
      const stateCopy = [...state];
      return stateCopy.sort((a, b) => a.name.localeCompare(b.name));
    }
    case "SORT-DOWN":
      return [...state.sort((a, b) => (a.name > b.name ? -1 : 1))];
    case "FILTER-BY-AGE": {
      // need to fix
      return state.filter((u) => u.age > 18);
    }
    default:
      return state;
  }
};
type ActionsType = SortUpACType | SortDownACType | FilterByAgeACType;

type SortUpACType = ReturnType<typeof sortUpAC>;
type SortDownACType = ReturnType<typeof sortDownAC>;
type FilterByAgeACType = ReturnType<typeof filterByAgeAC>;

export const sortUpAC = () => {
  return {
    type: "SORT-UP",
  } as const;
};

export const sortDownAC = () => {
  return {
    type: "SORT-DOWN",
  } as const;
};

export const filterByAgeAC = () => {
  return {
    type: "FILTER-BY-AGE",
  } as const;
};
