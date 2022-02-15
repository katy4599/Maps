function main() {
    const myPets = new Map();
    myPets.set('Gunner', 'a terrier');
    myPets.set('Grayson', 'crazy');
    myPets.set('Filamena', 'a lab');
    myPets.set('Copper', 'a sheltie');
    myPets.set('Chance', 'a terrier');
    myPets.set('Teak', 'a elkhound');
    myPets.set('Max', 'a elkhound');

    myPets.forEach((description, name) => {
        console.log(`${name} is ${description}.`);
    });
}

main();
