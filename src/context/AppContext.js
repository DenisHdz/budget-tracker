import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// The reducer is used to update the state, based on the action
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "REMOVE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET": {
      return { ...state, budget: action.payload };
    }
    default:
      return state;
  }
};

// Sets the initial state when the app loads
const initialState = {
  budget: 3000,
  expenses: [
    { id: uuidv4(), name: "TV", cost: 500 },
    { id: uuidv4(), name: "Headphones", cost: 200 },
  ],
};

// Creates the context that our components import and use to get the state
export const AppContext = createContext();

// The provider is a component that wraps the components which we want to pass the state to.
// We use it in conjunction with the useReducer hook to actually store the global state.
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
