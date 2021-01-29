const totalAge = pets.reduce((total, {age}) => {
	return total + age
}, 0)

const totalAgeWeight = pets.reduce((total, {age, weight}) => {

	return {
  	age: total.age + age,
    weight: total.weight + weight
  }
  
}, {age: 0, weight: 0})

// ==============================================

const somaPesoMaiorIdade = pets
  .filter((pet) => pet.age > 3)
  .reduce((total, pet) => {
	  return total + pet.weight
  }, 0)