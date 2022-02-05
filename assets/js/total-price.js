// Total Price
const products = [
    {name: 'shoe', price: 2200, quantity: 1},
    {name: 'Formal-Shirt', price: 600, quantity: 3},
    {name: 'belt', price: 300, quantity: 2},
    {name: 'bag', price: 150, quantity: 2},
    {name: 'Umbrella', price: 450, quantity: 1}
]

// Total Price in product
const totalPrice = productList => {
    let total = 0;
    for (const product of productList) {
        const perProductPrice = product.price * product.quantity;
        total += perProductPrice;
    }
    return total;
} 

const priceOfProducts = totalPrice(products);
console.log(priceOfProducts);