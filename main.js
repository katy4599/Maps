import input from 'input'

async function prompt(grades) {
    while (true) {
        let name = await input.text('What is the student name(or "cancel")?');
        if (name.toLowerCase() == 'cancel') {
            break;
        } else {
        let grade = await input.text('What is the grade?');
        grades.set(name, grade);
        }
    }
}

function display(grades) {
    for (const [name, grade] of grades) {
    
    console.log(`${name} has a ${grade}%.`);
    }
}

async function main() {
    const grades = new Map();

    await prompt(grades);
    display(grades);
}

main();
