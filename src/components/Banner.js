import Image from "next/image"
import Fade from "react-reveal/Fade"

const Banner = () => {
    return (
        <div className="relative h-[650px] sm:h-[700px] lg:h-[750px] xl:[800px] 2xl:h-[850px] -mt-24">
            <Image
                src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-200 left-40 flex">
                <Fade bottom>
                    <div className="flex flex-col max-w-[400px] h-auto">
                        <p className="font-bold text-white 2xl:line-height-70 xl:line-height-45 2xl:text-[70px] xl:text-[45px]">Olympian & Paralympian Online Experiences</p>
                        <button className="text-black bg-white w-2/5 py-2 shadow-md rounded-xl my-5 font-medium hover:shadow-xl active:scale-90 transition duration-150">Explore Now</button>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Banner