var stockLocation = {
    1: {
        1: false,
        2: false,
        3: false
    },
    2: {
        1: false,
        2: false,
        3: false
    },
    3: {
        1: false,
        2: false,
        3: false
    }
}
function someFunction(x, y) {
    stockLocation[x][y] = !stockLocation[x][y];
    var element = document.getElementsByClassName(`stock-x${x}-y${y}`)[0];
    element.style.opacity = (element.style.opacity == 1 ? 0 : 1);
    console.log(stockLocation);
}
