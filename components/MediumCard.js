import Image from "next/image"

const MediumCard = ({ img, title }) => {
    return (
        <div className="cursor-pointer transition transform duration-300 ease-out hover:scale-105">
            <div className="relative h-273 w-273">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-xl"
                />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard
