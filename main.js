import input from 'input'

async function prompt(cars) {
    while (true) {
        const name = await input.text('What is your name?');
        const car = {
            make: await input.text('What is the make of your car?'),
            model: await input.text('What is the model of your car?'),
            year: await input.text('What is the year of your car?'),
        }
        cars.set(name, car)
        const finished = await input.text('Are you finished?');
            if (finished) {
                break;
            }
    }
}

function display(cars) {
    for (const [name, car] of cars) {
    console.log(`${name} has a ${car.year} ${car.make} ${car.model}.`);
    }
}

async function main() {
    const myCars = new Map();
    await prompt(myCars);
    display(myCars);
}

main();
