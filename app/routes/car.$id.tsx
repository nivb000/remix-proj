import { useParams } from "@remix-run/react"
import { useLoaderData } from "@remix-run/react"
import { LoaderFunctionArgs, json } from "@remix-run/node"

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const cars = [
        { id: 1, brand: 'Toyota', year: 2020 },
        { id: 2, brand: 'Honda', year: 2021 },
        { id: 3, brand: 'Tesla', year: 2022 },
        { id: 4, brand: 'Nissan', year: 2023 },
        { id: 5, brand: 'Suzuki', year: 2020 },
    ]

    // const carById = cars.find(car => car.id === params.id.parseInt())
    //get from db
    return json({ cars })
}

const CarDetails = () => {

    const { id } = useParams()
    const car = useLoaderData()

    return <div>
        This is car details page
        Choosen Car: {id}
    </div>
}

export default CarDetails