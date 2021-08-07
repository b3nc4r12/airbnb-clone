import { GlobeAltIcon } from "@heroicons/react/solid"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-12 z-50">
            <div className="container mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="space-y-4 text-xs text-gray-800 mb-7">
                    <h5 className="font-bold">ABOUT</h5>
                    <p className="cursor-pointer">How Airbnb works</p>
                    <p className="cursor-pointer">Newsroom</p>
                    <p className="cursor-pointer">Investors</p>
                    <p className="cursor-pointer">Airbnb Plus</p>
                    <p className="cursor-pointer">Airbnb Luxe</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 mb-7">
                    <h5 className="font-bold">COMMUNITY</h5>
                    <p className="cursor-pointer">Accessibility</p>
                    <p className="cursor-pointer">Diversity & Belonging</p>
                    <p className="cursor-pointer">Airbnb Associates</p>
                    <p className="cursor-pointer">Guest Referrals</p>
                    <p className="cursor-pointer">Airbnb 2021</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 mb-7">
                    <h5 className="font-bold">HOST</h5>
                    <p className="cursor-pointer">Host your home</p>
                    <p className="cursor-pointer">Host an Online Experience</p>
                    <p className="cursor-pointer">Host an Experience</p>
                    <p className="cursor-pointer">Responsibe hosting</p>
                    <p className="cursor-pointer">Join Now</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 mb-7">
                    <h5 className="font-bold">SUPPORT</h5>
                    <p className="cursor-pointer">Help Centre</p>
                    <p className="cursor-pointer">Trust & Safety</p>
                    <p className="cursor-pointer">Our COVID-19 Response</p>
                    <p className="cursor-pointer">Neighborhood Support</p>
                    <p className="cursor-pointer">Cancellation Options</p>
                </div>
            </div>
            <div className="container mx-auto mt-6 border-t text-gray-600 text-xl border-gray-300 pt-6 pb-12 flex flex-col space-y-4 px-5 sm:px-0 sm:space-y-0 sm:flex-row justify-between">
                <p className="flex items-center space-x-3">
                    <span>&copy;</span>
                    <span>2021</span>
                    <span>Ben Carter</span>
                </p>
                <p className="flex items-center space-x-4">
                    <span className="flex items-center space-x-2">
                        <GlobeAltIcon className="-mb-0.5 h-5 text-gray-600" />
                        <span>English</span>
                    </span>
                    <span>$ CAD</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer