const pig = {
  name: "Napoleon",
  type: "Pig",
  age: 5,
  makeSound() {
    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes Oink!`);
  }
}

const sheep = {
  name: "Molly",
  type: "Sheep",
  age: 3,
  makeSound() {
    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes Baa!`);
  }
}

const dog = {
  name: "Max",
  type: "Dog",
  age: 4,
  makeSound() {
    console.log(`${this.name} is a ${this.age} year old ${this.type} that goes Woof!`);
  }
}

pig.makeSound();
sheep.makeSound();
dog.makeSound();
