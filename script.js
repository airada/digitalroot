class DRCalculator{
    constructor(previousText, currentText) {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    isNine(num){
        if (num%9 == 0){
            this.currentOperand = 9;
        }
        else {
            this.currentOperand = num%9
        }
        this.operation = undefined
        this.previousOperand = ''
    }
    drcompute() {
        let addNum
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev)){
           this.isNine(current)
        } else if (isNaN(current)){
            this.isNine(current)
        } else {
            addNum = prev+current
            this.isNine(addNum)
        }
    }

    getDisplayNumber(number) {
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')
    }

    updateDisplay() {
        this.currentText.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousText.innerText = ''
        }
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const drButton = document.querySelector('[data-dr]')
const deleteButton = document.querySelector('[data-delete]')
const previousText = document.querySelector('[data-previous-operand]')
const currentText = document.querySelector('[data-current-operand]')
const allclearButton = document.querySelector('[data-all-clear]')

const calculator = new DRCalculator(previousText, currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

drButton.addEventListener('click', button => {
    calculator.drcompute()
    calculator.updateDisplay()
  })
  
allclearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
  
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})