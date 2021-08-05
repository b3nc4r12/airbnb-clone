import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { getSession } from "next-auth/client"
import Login from "../components/Login"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns"
import InfoCard from "../components/InfoCard"

const Search = ({ session, searchResults }) => {
    if (!session) return <Login />

    const router = useRouter();

    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
    const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <>
            <Head>
                <title>Stays in {location}</title>
            </Head>

            <Header placeholder={`${location} | ${range} | ${noOfGuests} ${noOfGuests == 1 ? "guest" : "guests"}`} />

            <main className="flex bg-gray-100">
                <section className="flex-grow">
                    <div className="px-6 border-b pt-14 shadow-md bg-white">
                        <p className="text-xs">300+ Stays - {range} - {noOfGuests} {noOfGuests == 1 ? "guest" : "guests"}</p>
                        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                            <p className="button">Cancellation Flexibility</p>
                            <p className="button">Type of Place</p>
                            <p className="button">Price</p>
                            <p className="button">Rooms and Beds</p>
                            <p className="button">More filters</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-gray-100 px-6 my-5 space-y-5">
                        {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    const searchResults = await fetch("https://links.papareact.com/isz").then((res) => res.json());

    return {
        props: {
            session,
            searchResults
        }
    }
}

export default Search