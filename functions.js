import readline from 'readline';
import {
    students as students,
    availableFemaleNames,
    availableMaleNames,
    availableGenders,
    showOptions,
    isInt,
    calculateRandomNumber,
    sumExtraPoints,
} from './data.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



function getOptionFromConsole() {
    const promise = new Promise((resolve, reject) => {
        rl.question('Elige una opción: ', (num) => {
            rl.pause();
            if (isInt(num)) {
                num = Number.parseInt(num);
                resolve(num);

            } else {
                reject('Introduce un número válido');
            }
        })

    })

    return promise;
}

export async function displayOptions() {
    let numberFromConsole
    let femalesList
    let studentsScores
    let studentAges

    do {
        // gestion de promise
        try {
            showOptions()
            numberFromConsole = await getOptionFromConsole();

        } catch (error) {
            console.log(error)
            process.exit(0)
        }


        // condiciones para la opcion elegida
        switch (numberFromConsole) {

            case 1:
                console.table(students);
                break;

            case 2:
                console.log('Número total de alumnos: ', students.length);
                break;

            case 3:
                const namesList = students.map(student => student.name);
                console.log('Lista de nombres de los alumnos: ')
                namesList.forEach(name => console.log(name));
                console.log('- Estos son todos los alumnos existentes -')
                break;

            case 4:
                students.pop();
                console.log('Estudiantes después de eliminar al último de la lista: ');
                console.table(students);
                break;

            case 5:
                students.splice(calculateRandomNumber(0, students.length), 1);

                console.log('Estudiantes después de eliminar un alumno aleatorio: ')
                console.table(students)
                break;

            case 6:
                femalesList = students.filter(student => student.gender === 'female');

                console.log('Tabla de alumnas: ');
                const showFemales = femalesList.length > 0 ? console.table(femalesList) : 'No hay chicas en la clase.';
                console.log(showFemales)
                break;

            case 7:
                const malesList = students.filter(student => student.gender === 'male');
                femalesList = students.filter(student => student.gender === 'female');

                console.log('Número de alumnas: ', femalesList.length);
                console.log('Número de alumnos: ', malesList.length);
                break;

            case 8:
  
                const allFemales = students.length > 0 ? students.every(student => student.gender === 'female') : false;

                console.log('¿Son todos los alumnos chicas?: ', allFemales);
                break;

            case 9:
                const youngList = students.filter(student => student.age >= 20 && student.age <= 25);
                const youngListNames = students.length > 0 ? youngList.map(student => student.name) : 'No hay alumnos en esta clase. Para añadir un nuevo alumno elige la opción 10.'

                console.log('Alumnos entre 20 y 25 años: ', youngListNames);
                break;

            case 10:
                const randomGender = availableGenders[Math.floor(Math.random() * availableGenders.length)];
                const randomName = randomGender === 'female' ? availableFemaleNames[Math.floor(Math.random() * availableFemaleNames.length)] : availableMaleNames[Math.floor(Math.random() * availableFemaleNames.length)];
                let randomAge = calculateRandomNumber(20, 50);

                students.push({ age: randomAge, examScores: [], gender: randomGender, name: randomName });

                console.log('Nueva tabla de alumnos con la incorporación: ');
                console.table(students)
                break;

            case 11:
                studentAges = students.map(student => student.age);

                const minYoungerAge = Math.min(...studentAges);
                const youngerStudent = students[studentAges.indexOf(minYoungerAge)];
                const youngerName = students.length > 0 ? youngerStudent.name : 'No hay alumnos en esta clase. Para añadir uno nuevo, elige la opción 10.';

                console.log('El alumno/a más joven es: ', youngerName);
                break;

            case 12:
                const sumStudentsAges = students.length > 0 ? studentAges.reduce((sum, n) => sum + n, 0) : 0;
                const avgStudetsAges = students.length > 0 ? Math.round(sumStudentsAges / students.length) : 0; // ternaria

                console.log('Edad media de todos los alumnos de la clase : ', avgStudetsAges);
                break;

            case 13:
                femalesList = students.filter(student => student.gender === 'female');

                const femalesAges = femalesList.map(female => female.age);
                const sumFemalesAges = femalesAges.reduce((sum, n) => sum + n, 0);
                const avgFemalesages = students.length > 0 ? Math.round(sumFemalesAges / femalesList.length) : 'No hay alumnos en esta clase. Para añadir uno nuevo, elige la opción 10.';

                console.log('Edad media de las alumnas: ', avgFemalesages);
                break;

            case 14:
             
                students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10))); 

                console.log('Notas de cada alumno actualizadas con punto extra: ')
                console.table(students)
                break;

            case 15:
                
                students.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // si los nombres son iguales:
                    return 0;
                });

                console.log('Estudiantes ordenados alfabéticamente: ');
                console.table(students)
                break;

            case 16:
                studentsScores = students.map(student => student.examScores);

                const sumStudentsScores = Array.from(studentsScores, (scores => scores.reduce((sum, n) => sum + n, 0)))
                const bestStudentIndex = sumStudentsScores.indexOf(Math.max(...sumStudentsScores));
                const bestStudent = students.length > 0 ? students[bestStudentIndex].name : 'No hay alumnos en esta clase. Para añadir uno nuevo, elige la opción 10.';

                console.log('El alumno/a con mejores notas es: ', bestStudent);

                break;

            case 17:
                // Nota media más alta de la clase y alumno al que pertenece.
                studentsScores = students.map(student => student.examScore);
                const studentsMedias = Array.from(studentsScores, (scores => scores.length > 0 ? ((scores.reduce((sum, n) => sum + n, 0)) / scores.length) : 0));
                const highMedia = Math.max(...studentsMedias);
                const highMediaStudentIndex = studentsMedias.indexOf(highMedia);
                const highMediaStudentName = studentsMedias.every(media => media === 0) ? 'Ningun alumno tiene notas aún. Para añadir una nueva nota, elija la opción 14' : students[highMediaStudentIndex].name;

                console.log('La nota media más alta es: ', highMedia, 'y pertenece al alumno/a: ', highMediaStudentName);
                break;

            case 18:
                //Añade un punto extra a cada nota existente de todos los alumnos.
                console.log('Notas con punto extra: ')
                sumExtraPoints()
                break

        }


    } while (numberFromConsole > 0 && numberFromConsole <= 18)

}

