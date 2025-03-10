import { createContext } from "react";

const UserContext = createContext({
  user: null,
  setNewUser: (val) => {},
});

export default UserContext;
