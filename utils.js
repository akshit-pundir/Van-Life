import { Navigate, redirect } from "react-router-dom";

export async function authenticate(request){
    const pathName= new URL(request.url).pathname
    const isLoggedIn=localStorage.getItem("loggedin");
    if(!isLoggedIn){
       throw redirect(`/login?message=you must login first !!! &redirectTo=${pathName}`);
    }

    return null;


}