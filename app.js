const board = document.querySelector('#board')
const colors = ['#FBCEB1', '#B5B8B1', '#7FFFD4', '#FF2400', '#78DBE2', '#E32636', '#ED3CCA', '#CD2682', '#AFEEEE', '#ACB78E', '#98FB98', '#F984E5', '#2F4F4F', '#9966CC', '#44944A', '#990066']
const squareNum = 500

for (let i = 0; i < squareNum; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
    
}


function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}



