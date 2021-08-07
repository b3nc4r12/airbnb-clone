import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { getSession } from "next-auth/client"
import Login from "../components/Login"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns"
import InfoCard from "../components/InfoCard"

const Search = ({ session, londonResults, monctonResults, halifaxResults, newYorkResults }) => {
    if (!session) return <Login />

    const router = useRouter();

    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
    const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    let searchResults = londonResults;

    if (location == "Moncton" || location == "moncton") {
        searchResults = monctonResults
    }

    if (location == "London" || location == "london") {
        searchResults = londonResults
    }

    if (location == "Halifax" || location == "halifax") {
        searchResults = halifaxResults
    }

    if (location == "New York" || location == "new york" || location == "New york" || location == "new York") {
        searchResults = newYorkResults
    }

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
                        {searchResults.map(({ _id, img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={_id}
                                id={_id}
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

    const londonResults = await fetch("https://airbnb-api.vercel.app/london").then((res) => res.json());
    const monctonResults = await fetch("https://airbnb-api.vercel.app/moncton").then((res) => res.json());
    const halifaxResults = await fetch("https://airbnb-api.vercel.app/halifax").then((res) => res.json());
    const newYorkResults = await fetch("https://airbnb-api.vercel.app/newyork").then((res) => res.json());

    return {
        props: {
            session,
            londonResults,
            monctonResults,
            halifaxResults,
            newYorkResults
        }
    }
}

export default Search