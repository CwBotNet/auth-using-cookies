import { Auth } from "../components/Auth"

export const SignIn = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Auth type="signin" />
        </div>
    )
}

