type Car = {
  make: string
  model: string
  year: number
  capacity?: 1 | 2 | 3 | 4 | 5
}

export function introduceCar(car: Car) {
  return car
}
