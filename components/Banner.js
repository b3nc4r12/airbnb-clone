import Image from "next/image"
import Fade from "react-reveal/Fade"

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:[600px] 2xl:h-[700px]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />
            <div className="h-full w-full flex items-center justify-center">
                <Fade bottom>
                    <div className="flex flex-col items-center justify-center w-full text-center">
                        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Banner