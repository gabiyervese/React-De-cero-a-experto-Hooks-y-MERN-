import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo" }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
