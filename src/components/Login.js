import { signIn } from "next-auth/client"
import Head from "next/head"
import Image from "next/image"

const Login = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col items-center">
                <Image
                    src="/login-logo.jpg"
                    height={300}
                    width={300}
                />
                <div
                    onClick={signIn}
                    className="mt-7 bg-red-400 w-60 text-white uppercase text-center rounded-xl py-2 cursor-pointer hover:bg-red-500 transition duration-200"
                >
                    Login
                </div>
            </div>
        </div>
    )
}

export default Login
