import { useState } from "react"
import { Label } from "./ui/Lable"
import axios from "axios";


interface AuthType {
    type: string
}
interface User {
    name?: string;
    email: string;
    password: string
}


export const Auth = ({ type }: AuthType) => {

    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: ""
    })

    const handelAuth = async () => {
        const response = await axios.post(`http://localhost:3000/user/${type === "signin" ? "signin" : "signup"}`, user, {
            withCredentials: true
        })
        return response.data

    }

    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl">{type === "signin" ? "Sign In to your account" : "Cretate an Account"}</h1>
                <p>Don't have a account {" "}
                    <a href={type === "signin" ? "/signup" : "/signin"} className="underline cursor-pointer">{type === "signin" ? "signup" : "signin"}</a>
                </p>
            </div>
            <div className=" flex flex-col space-y-2">
                <div>
                    {type === "signup" ? <Label lable="username" onChange={(e) => {
                        setUser({
                            ...user,
                            name: e.target.value
                        })
                    }} placeholder="Enter your user name" /> : null}
                    <Label lable="email" placeholder="Enter your user Email" onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} />
                    <Label lable="password" placeholder="Enter your user password" type="password" onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={handelAuth} className="bg-black w-full p-3  rounded text-white">{type === "signin" ? "Sign In" : "Sign Up"}</button>
                </div>

            </div>
        </div>
    )
}


