import { Link } from "@remix-run/react"
import type { car } from "~/interfaces/car"

const CarList = ({ cars }: any) => {


    return <section className="flex car-list">
        {cars.map((car: car) => <Link to={`/car/${car.id}`} key={car.id}>
            <div className="flex col justify-center align-center car-preview" key={car.id}>
                <h3>{car.brand}</h3>
                <h3>{car.year}</h3>
            </div>
        </Link>)}
    </section>

}

export default CarList