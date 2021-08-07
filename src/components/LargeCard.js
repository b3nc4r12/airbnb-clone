import Image from "next/image"

const LargeCard = ({ img, title, description, buttonText }) => {
    return (
        <section className="relative my-16 cursor-pointer transition transform duration-150 hover:scale-105">
            <div className="relative h-96 min-w-[300px]">
                <Image
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>

            <div className={`absolute top-16 ${buttonText === "I'm flexible" && "top-24"} left-12`}>
                <h3 className={`text-4xl mb-3 w-64 ${buttonText === "I'm flexible" && "text-3xl sm:text-5xl font-semibold w-[340px]"}`}>{title}</h3>
                <p>{description}</p>
                <button className={`text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 ${buttonText === "I'm flexible" && "sm:px-7 text-[16px] font-semibold sm:py-3 py-2 px-5"}`}>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
