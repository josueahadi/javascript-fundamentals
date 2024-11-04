
const sortProducts = (arr) => {
    return arr.sort((a,b) => a.price - b.price)
}

const products = [ 
    {id: 1, name: 'iphone 13', price: 400}, 
    {id: 2, name: 'computer mouse', price: 5}, 
    {id: 3, name: 'SSD', price: 120}
]

console.log(sortProducts(products))
