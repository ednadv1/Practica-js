
const options = {
    1: 'Mostrar en formato de tabla todos los alumnos.',
    2: 'Mostrar por consola la cantidad de alumnos que hay en clase.',
    3: 'Mostrar por consola todos los nombres de los alumnos.',
    4: 'Eliminar el último alumno de la clase.',
    5: 'Eliminar un alumno aleatoriamente de la clase.',
    6: 'Mostrar por consola todos los datos de los alumnos que son chicas.',
    7: 'Mostrar por consola el número de chicos y chicas que hay en la clase.',
    8: 'Mostrar true o false por consola si todos los alumnos de la clase son chicas.',
    9: 'Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.',
    10: 'Añadir un alumno nuevo',
    11: 'Mostrar por consola el nombre de la persona más joven de la clase.',
    12: 'Mostrar por consola la edad media de todos los alumnos de la clase.',
    13: 'Mostrar por consola la edad media de las chicas de la clase.',
    14: 'Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10)',
    15: 'Ordenar el array de alumnos alfabéticamente según su nombre.',
    16: 'Mostrar por consola el alumno de la clase con las mejores notas.',
    17: 'Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.',
    18: 'Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.'
  }



export const students= [{
    age: 32,
    examScores: [2,4,0],
    gender: 'male',
    name: 'edu'
    },
    {
    age: 37,
    examScores: [4,6,9],
    gender: 'female',
    name: 'silvia'
    },

  { 
    age: 22, 
    examScores: [2, 3, 9], 
    gender: 'male', 
    name: 'Valentin' 
  },
  { 
    age: 37, 
    examScores: [7, 6, 4], 
    gender: 'male', 
    name: 'Gon' 
  },
  { 
    age: 27, 
    examScores: [9, 6, 3], 
    gender: 'female', 
    name: 'Edna' 
  },
  { 
    age: 42, 
    examScores: [3, 6, 9], 
    gender: 'male', 
    name: 'Alberto' 
  },
  { 
    age: 37, 
    examScores: [4, 6, 7], 
    gender: 'female', 
    name: 'ana' 
  },
  { 
    age: 40, 
    examScores: [10, 10, 10], 
    gender: 'female', 
    name: 'mariona' 
  }
]
  

export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'edu'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];






// Funcion

// Muestra el texto  input.
export const showOptions = () => {
    console.log(options)
}

// Comprueba si el input es un número.
export const isInt = (num) => {
    return !Number.isNaN(num)
}

// Calcula un número aleatorio 
export function calculateRandomNumber(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
return randomNumber;
}

// Suma un punto . 
    // Maximo 10
export const sumExtraPoints = () => {
    
    for (let i = 0; i < students.length; i++) {
        const studentsTable = students[i]
        
        if (student.examScores.length !== 0) {

            student.examScores = student.examScores.map(score => score < 10 ? ++score : score);
            debugger;

        } else if (student.examScores.length === 0) {
            student.examScores.push(10);
            
        }
        
    } console.table(students);
        
}


