import { Label } from "./ui/Lable"


interface AuthType {
    type: string
}


export const Auth = ({ type }: AuthType) => {
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
                    {type === "signup" ? <Label lable="username" placeholder="Enter your user name" /> : null}
                    <Label lable="email" placeholder="Enter your user Email" />
                    <Label lable="password" placeholder="Enter your user password" />
                </div>

                <button className="bg-black w-full p-3  rounded text-white">{type === "signin" ? "Sign In" : "Sign Up"}</button>
            </div>
        </div>
    )
}


