class LineChart {
	constructor(canvas) {
		this.canvas = canvas
		this.createChart()
		this.chartGrowthFactor = 1
		this.moduloNumber = 20
	}

	createChart() {
		let ctx = this.canvas.getContext('2d')
		let leftPadding = 75
		ctx.lineWidth = 2

		ctx.beginPath()
		ctx.moveTo(leftPadding, 25)
		ctx.lineTo(leftPadding, 125)
		ctx.lineTo(255, 125)
		ctx.stroke()
		ctx.closePath()

		ctx.font = '16px serif'
		ctx.fillText('Animals in the Zoo', 100, 15)
		ctx.font = '14px serif'
		ctx.fillText('Lions', 10, 50)
		ctx.font = '14px serif'
		ctx.fillText('Owls', 10, 75)
		ctx.font = '14px serif'
		ctx.fillText('Dolphins', 10, 100)
		ctx.font = '14px serif'
		ctx.fillText('Number of Animals', 110, 140)
	}

	createChartLines(objects) {
		this.resetCanvas()
		this.createChart()
		let ctx = this.canvas.getContext('2d')
		let leftPadding = 75
		let growthRate = 9
		growthRate = growthRate / this.chartGrowthFactor
		let maxLength = 255

		for(let animalCount in objects) {
			if (this.moduloNumber / objects[animalCount] == 1) {
				this.moduloNumber += 20
				this.chartGrowthFactor += 1
				break
			}
		}

		if (objects.lion > 0) {
			ctx.beginPath()
			ctx.moveTo(leftPadding, 45)
			ctx.lineTo(leftPadding + (objects.lion * growthRate), 45)
			ctx.stroke()
			ctx.closePath()
			ctx.font = '12px serif'
			ctx.fillText(objects.lion, leftPadding + (objects.lion * growthRate + 5), 50)
		}

		if (objects.owl > 0) {
			ctx.beginPath()
			ctx.moveTo(leftPadding, 70)
			ctx.lineTo(leftPadding + (objects.owl * growthRate), 70)
			ctx.stroke()
			ctx.closePath()
			ctx.font = '12px serif'
			ctx.fillText(objects.owl, leftPadding + (objects.owl * growthRate + 5), 75)
		}

		if (objects.dolphin > 0) {
			ctx.beginPath()
			ctx.moveTo(leftPadding, 95)
			ctx.lineTo(leftPadding + (objects.dolphin * growthRate), 95)
			ctx.stroke()
			ctx.closePath()
			ctx.font = '12px serif'
			ctx.fillText(objects.dolphin, leftPadding + (objects.dolphin * growthRate + 5), 100)
		}
	}

	resetCanvas() {
		let ctx = this.canvas.getContext('2d')
		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}