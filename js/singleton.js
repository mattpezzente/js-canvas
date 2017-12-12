class Zoo {
	constructor() {
		this.animals = []
		this.name = document.querySelector('.txt-zoo').value
		this.lChart = new LineChart(document.querySelector('.canvas-chart-line'))
	}

	updateZoo() {
		let animalZoo = document.querySelectorAll('.animal-zoo')
		this.name = document.querySelector('.txt-zoo').value
		for (var i = 0; i < animalZoo.length; i++) {
			animalZoo[i].innerHTML = this.name
		}
	}

	addAnimal() {
		let formValues = document.querySelectorAll('*[data-zoo="animal"]')
		let insertionPoint = document.querySelector('.zoo-tbody')
		let tempAnimal = AnimalFactory.createAnimal(formValues[0].value, formValues[1].value, formValues[2].value)
		insertionPoint.innerHTML = ''
		this.animals.push(tempAnimal)
	
		for (let i = 0; i < this.animals.length; i++) {
			let tempHTML = `<tr id="animal-id-${this.animals[i].id}">`
			this.animals[i]
			tempHTML += `<td>${this.animals[i].name}</td>`
			tempHTML += `<td>${this.animals[i].id}</td>`
			tempHTML += `<td>${this.animals[i].species}</td>`
			tempHTML += `<td>${this.animals[i].weight}</td>`
			tempHTML += `<td class="animal-zoo">${this.name}</td>`
			tempHTML += '</tr>'
			insertionPoint.insertAdjacentHTML('beforeend', tempHTML)
			document.querySelector(`#animal-id-${this.animals[i].id}`).addEventListener('click', this.animals[i].feed)
		}
		this.lChart.createChartLines(this.getAnimalCounts(this.animals))
	}

	getAnimalCounts(animals) {
		let animalCounts = {
			lion: 0,
			owl: 0,
			dolphin: 0,
		}
		animals.forEach(animal => {
			if (animal.species == 'Lion') {
				animalCounts.lion++
			}
			if (animal.species == 'Owl') {
				animalCounts.owl++
			}
			if (animal.species == 'Dolphin') {
				animalCounts.dolphin++
			}
		})
		return animalCounts
	}

	static getInstance() {
		if (!Zoo._instance) {
			Zoo._instance = new Zoo()
			return Zoo._instance
		}
		else {
			throw 'Error, cannot instantiate another singleton'
		}
	}
}