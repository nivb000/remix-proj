import type { car } from "~/interfaces/car"

export const demoCars: car[] = [
  { id: 1, brand: 'Toyota', year: 2020 },
  { id: 2, brand: 'Honda', year: 2021 },
  { id: 3, brand: 'Tesla', year: 2022 },
  { id: 4, brand: 'Nissan', year: 2023 },
  { id: 5, brand: 'Suzuki', year: 2020 },
]


export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}