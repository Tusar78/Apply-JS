// Find low budget mobile in available mobile list
const phones = [
    {model: 'Apple - iphone 12 pro', storage: '128gb', price: 1_61_999},
    {model: 'Samsung - s10 plus', storage: '64gb', price: 99_900},
    {model: 'Xiaomi - 12 mini', storage: '128gb', price: 42_000},
    {model: 'Walton - primo s8', storage: '64gb', price: 20_990},
    {model: 'Redmi - note 11', storage: '128gb', price: 19_000},
    {model: 'Google - pixel 6 pro', storage: '512gb', price: 1_00000}
];

// Get Lowest Object 
const getCheapestPhone = phoneList => {
    let cheapest = phoneList[0];
    for (const phone of phoneList) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheapest = getCheapestPhone(phones);
console.log(cheapest);

// Get heigh price object
const getHeightBudgetPhone = phoneList => {
    let high = phoneList[0];
    for (const phone of phoneList) {
        if (phone.price > high.price) {
            high = phone;
        }
    }
    return high;
}
const high = getHeightBudgetPhone(phones);
console.log(high);