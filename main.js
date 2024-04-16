const clearButton = document.querySelector('[data-all-clear]')
// console.info(clearButton)
// clearButton.addEventListener ('click', ()=>{
//     console.info('effacer')
// })

const output = document.querySelector('[data-output]')
// console.info(output)

function clear(){
    output.innerText=''
}

clearButton.addEventListener('click', ()=>{
    clear()
    OperationCalcul = undefined
})

const numberButtons = document.querySelectorAll('[data-number]')
// console.log(numberButtons)

function appendNumber(number){
    console.info(number)
    output.innerText = output.innerText + number
}


numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        // console.info(button.innerText)
        appendNumber(button.innerText)
    })
})

const operationButtons = document.querySelectorAll('[data-operation]')
// console.info(operationButtons)

var OperationCalcul = undefined

function chooseOperation(operation){
    if(OperationCalcul) return
    OperationCalcul = operation
    output.innerText = output.innerText.toString() + ' ' + operation + ' '
}


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText)
    })
})

const equalsButton = document.querySelector('[data-equals]')

equalsButton.addEventListener('click', button => {
    calcul()
})

function calcul(){
    if(output.innerText === '') return
    let split = output.innerHTML.split(OperationCalcul)
    // console.info(split)

    let nombre1 = parseFloat(split[0])
    let nombre2 = parseFloat(split[1])

    if (isNaN(nombre1) || isNaN(nombre2)) return

    console.log(nombre1)
    console.log(nombre2)
    console.log(OperationCalcul)

    let moncalcul;
    
    switch (OperationCalcul) {
        case '+':
            moncalcul =  nombre1 + nombre2 
            break
        case '-':
            moncalcul =  nombre1 - nombre2 
            break
        case '÷':
            moncalcul =  nombre1 / nombre2
            break
        case 'x':
            moncalcul =  nombre1 * nombre2   
            break
        default:
            return
    }
    // console.info(moncalcul)
    output.innerText = moncalcul
    OperationCalcul = undefined
}

const colorButtons = document.querySelectorAll('.color-button');

colorButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const colorScheme = button.id;
        changeCalculatorColor(colorScheme)
    });
});

function changeCalculatorColor(colorScheme) {
    const calculator = document.querySelector('#calc-grid');
    calculator.className = colorScheme;
}
