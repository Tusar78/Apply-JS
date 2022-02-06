// traffic signal problem
const trafficSignal = signal => {
    let people;
    switch (signal) {
        case 'yellow':
            people = `Stop please!`;
            break;
        case 'red':
            people = `Danger`;
            break;
        case 'green':
            people = 'You can go~';
            break;            
        default:
            people = 'Please, Enter the valid data!'
            break;
    }
    return people;
}
const red = trafficSignal('red');
console.log(red);