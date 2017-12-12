class AnimalFactory {
	constructor() {

	}

	static createAnimal(animal, n, w) {
		animal = animal.toLowerCase().trim()

		if (animal == 'lion') {
			return new Lion(n, w)
		}
		else if (animal == 'owl') {
			return new Owl(n, w)
		}

		else if (animal == 'dolphin') {
			return new Dolphin(n, w)
		}
		else {
			console.error('Can\'t create ' + animal)
		}
	}
}
