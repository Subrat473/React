import { craeteContext } from "react";

const UserContext = craeteContext({
    loggedInUser: "Default User",
});

export default UserContext;
