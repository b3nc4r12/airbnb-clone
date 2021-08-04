import Image from "next/image"
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon
} from "@heroicons/react/solid"
import { signOut, useSession } from "next-auth/client"

const Header = () => {
    const [session] = useSession();

    return (
        <header className="sticky top-0 z-50">
            <div className="grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
                {/* Left - Airbnb Logo */}
                <div className="relative flex items-center h-10 cursor-pointer my-auto">
                    <Image
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>

                {/* Middle - Search */}
                <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                    <input
                        className="ml-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                        type="text"
                        placeholder="Start your search"
                    />
                    <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4 text-gray-500">
                    <p className="hidden md:inline cursor-pointer">Become a host</p>
                    <GlobeAltIcon className="h-6 cursor-pointer" />
                    <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                        <MenuIcon className="h-6 cursor-pointer mr-2" />
                        {session?.user.image ?
                            <Image
                                src={session.user.image}
                                height={24}
                                width={24}
                                onClick={signOut}
                                className="rounded-full cursor-pointer"
                            />
                            :
                            <UserCircleIcon onClick={signOut} className="h-6 cursor-pointer" />
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
