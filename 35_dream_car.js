const car = {}

car.model = "Toyota"
car.year = 2025
car.color = "Black"
car.used = false

const message = `I'm looking for a ${car.color} ${car.year} ${car.model} that is ${car.used ? "used" : "new"}.`
console.log(message)
