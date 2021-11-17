function relativityTeory(mass) {
  const speedOfLight = 3e8;
  const energy = mass * (speedOfLight ** 2);
  return energy
}

console.log(relativityTeory(0.001)); // Energy for 1 gram of mass
