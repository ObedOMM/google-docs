import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image
                src="https://links.papareact.com/lui"
                height="300"
                width="550"
                objectifFit="contain"
            />
            <h2>Hello</h2>
        </div>
    )
}

export default Login
