function add(a,b) {
    return a + b
}

function sub(a, b){
    if(!(a > b)) throw new Error('num a must be greater than b')
    return a - b
}

function mul(a, b) {
    return a * b
}

add(2, 5)
add(10, 23)
add(40, 42)


sub(10, 4)


mul(2, 3)
mul(20, 35)
mul(20, 11)
