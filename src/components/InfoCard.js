import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { bookNow, removeStay, selectItems } from "../slices/bookSlice"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useSession } from "next-auth/client"

const stripePromise = loadStripe(process.env.stripe_public_key);

const InfoCard = ({ id, img, location, title, description, star, price, total }) => {
    const items = useSelector(selectItems);
    const [session] = useSession();
    const dispatch = useDispatch();

    const continueToBooking = () => {
        dispatch(bookNow({
            id,
            img,
            title,
            description,
            total
        }))
    }

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;

        const checkoutSession = await axios.post("/api/create-checkout-session", {
            items,
            email: session.user.email
        })

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })

        if (result.error) {
            alert(result.error.message);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row items-center py-7 px-4 border-b cursor-pointer shadow-md hover:shadow-lg space-y-5 sm:space-y-0 scale-102 transition transform duration-200 ease-out bg-white rounded-2xl">
            <div className="relative h-44 w-72 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow sm:pl-5">
                <div className="flex items-center justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex items-end justify-between py-5">
                    <p onClick={() => dispatch(removeStay())} className="flex items-center"><StarIcon className="h-5 text-red-400" />{star}</p>
                    <div className="flex flex-col justify-end -mt-2">
                        <p className="text-lg lg:text-2xl font-semibold pb-2">${price} CAD / night</p>
                        <p className="text-right font-extralight">${total} CAD total</p>
                        {items.length > 0 ? (
                            <>
                                {items.map((item) => {
                                    if (item.id == id) {
                                        return (
                                            <button
                                                role="link"
                                                onClick={createCheckoutSession}
                                                className="bg-red-400 py-1.5 rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3"
                                            >
                                                {!session ? "Sign in to book" : "Book Now"}
                                            </button>
                                        )
                                    } else {
                                        return (
                                            <button
                                                role="link"
                                                onClick={continueToBooking}
                                                className="bg-red-400 py-1.5 rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3"
                                            >
                                                {!session ? "Sign in to book" : "Continue to Booking"}
                                            </button>
                                        )
                                    }
                                })}
                            </>
                        ) : (
                            <button
                                role="link"
                                onClick={continueToBooking}
                                className="bg-red-400 py-1.5 rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold px-3"
                            >
                                {!session ? "Sign in to book" : "Continue to Booking"}
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
