import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import { useRouter } from "next/dist/client/router"
import Image from "next/image"

const InfoCard = ({ id, img, location, title, description, star, price, total }) => {
    const router = useRouter();

    return (
        <div className="flex items-center py-7 px-4 border-b cursor-pointer shadow-md hover:shadow-lg scale-102 transition transform duration-200 ease-out bg-white rounded-2xl">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex items-center justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex items-end justify-between py-5">
                    <p className="flex items-center"><StarIcon className="h-5 text-red-400" />{star}</p>
                    <div className="flex flex-col justify-end -mt-2">
                        <p className="text-lg lg:text-2xl font-semibold pb-2">${price} CAD / night</p>
                        <p className="text-right font-extralight">${total} CAD total</p>
                        <button className="bg-red-400 py-1 rounded-xl mt-2 shadow-md transition transform duration-200 ease-out hover:scale-105 active:scale-90 font-semibold">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
