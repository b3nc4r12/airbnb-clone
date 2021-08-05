const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-12">
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
                    <p className="cursor-pointer">Diversity</p>
                    <p className="cursor-pointer">Belonging</p>
                    <p className="cursor-pointer">Referrals accepted</p>
                    <p className="cursor-pointer">Airbnb 2021</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 mb-7">
                    <h5 className="font-bold">HOST</h5>
                    <p className="cursor-pointer">Gift Cards</p>
                    <p className="cursor-pointer">Cancellation Options</p>
                    <p className="cursor-pointer">Against Discrimination</p>
                    <p className="cursor-pointer">Airbnb 2021</p>
                    <p className="cursor-pointer">Join Now</p>
                </div>
                <div className="space-y-4 text-xs text-gray-800 mb-7">
                    <h5 className="font-bold">SUPORT</h5>
                    <p className="cursor-pointer">Help Centre</p>
                    <p className="cursor-pointer">Trust & Safety</p>
                    <p className="cursor-pointer">Our COVID-19 Response</p>
                    <p className="cursor-pointer">Neighborhood Support</p>
                    <p className="cursor-pointer">Contact Us</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer