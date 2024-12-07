import { createContext } from "react";
const UserContext = createContext({
    loggedUser:"Default user",
})

export default UserContext;