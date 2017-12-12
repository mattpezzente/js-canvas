// Matthew Pezzente - Factory Project

(() => {
	let zoo = Zoo.getInstance()

	document.querySelector('.btn-add').addEventListener('click', e => {
		e.preventDefault()
		zoo.addAnimal()
	})
	document.querySelector('.btn-update').addEventListener('click', e => {
		e.preventDefault()
		zoo.updateZoo()
	})
})()