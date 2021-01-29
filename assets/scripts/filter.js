const pets = [
	{
  	name: "Pet1",
    age: 1,
    weight: 20
  },
  {
  	name: "Pet2",
    age: 5,
    weight: 10
  },
  {
  	name: "Pet3",
    age: 10,
    weight: 20
  }
]

const newPets = pets.filter(({age}) => age > 2)