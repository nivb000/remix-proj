import { useLoaderData, Form } from "@remix-run/react"
import { ActionFunctionArgs, json } from "@remix-run/node"
import { useState } from "react"
import CarList from "~/cmps/car-list"
import { demoCars, getRandomIntInclusive } from "~/utils/fakeData"
import type { car } from "~/interfaces/car"

//FOR LOAD,FETCH DATA
export const loader = async () => {
  //gets from db
  const cars: car[] = demoCars
  return json({ cars })
}

//FOR UPDATE, MUTATE DATA
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const brand = formData.get("brand")
  const year = formData.get("year")
  const newCar = {
    id: getRandomIntInclusive(0, 2000),
    brand: brand?.toString(),
    year: year ? parseInt(year.toString(), 10) : undefined
  } 
  demoCars.push(newCar)
  return ({ msg: "New Car Added" })

  //SEND TO DB...
}

const Car = () => {

  const { cars } = useLoaderData()
  const [modalIsOpan, setModalIsOpan] = useState(false)


  return <section className="car-page">
    <div className="flex space-between align-center">
      <h1>All Cars</h1>
      <button onClick={() => setModalIsOpan(prev => !prev)}>Add New Car</button>
    </div>
    <CarList cars={cars} />

    {modalIsOpan ? <div className="flex col align-center add-new-modal">
      <h3>Add New Car</h3>
      <Form method="post" className="flex col">
        <div className="flex space-between align-center">
          <label htmlFor="brand">brand</label>
          <input type="text" name="brand" id="brand" />
        </div>
        <div className="flex space-between align-center">
          <label htmlFor="year">year</label>
          <input type="number" name="year" id="year" />
        </div>
        <button type="submit" onClick={() => setTimeout(() => setModalIsOpan(false), 500)}>
          Add!
        </button>
      </Form>
    </div> : null}
  </section>
}

export default Car