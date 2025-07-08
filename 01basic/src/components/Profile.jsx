import React from "react";
import useUserContext from "../context/context";

export default function Profile() {
    const {user, pass} = useUserContext()

    if(!user && !pass) return <h4>please enter username and password</h4>

    if(!user) return <h4>please enter username</h4>

    if(!pass) return <h4>please enter password</h4>

    return <h4>welcome {user} your password is {pass} </h4>
}