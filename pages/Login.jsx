import React from "react"
import { useLoaderData, useNavigate,Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../api";
export function loginLoader( {request} ){
    const mssg=new URL(request.url).searchParams.get("message")
    return mssg;
}
export async function loginAction( {request } ){

    const formData= await request.formData();
    const email=formData.get("email");
    const password=formData.get("password");
    const url=new URL(request.url).searchParams.get("redirectTo") || '/';
    try{
         await  loginUser({email,password});
        localStorage.setItem("loggedin", true);
        return  redirect(url);
    } catch(err){
             return err.message;
    }

}

export default function Login() {
    
    const message=useLoaderData();
    const ErrorMssg=useActionData();
    const navigation=useNavigation();
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(loginFormData)
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginFormData(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }

    return (
        <div className="login-container  mb-72">
            <h1 className=" text-2xl font-bold m-8">Sign in to your account</h1>
                <h3 className=" text-red-600 text-lg">{message}</h3>
                {  ErrorMssg && <h2 className=" text-violet-500  font-semibold">{ErrorMssg}</h2>}

            <Form  method="post" className="login-form" replace >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    
                />
                {navigation.state ==="idle"?<button>Log in</button>:<button disabled>Logging in</button>  }
                
            </Form>
        </div>
    )

}