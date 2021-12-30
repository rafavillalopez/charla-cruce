// @ts-check

/**
 * El nombre mio
 * @type {String}
 */
const nombrePersona = "Rafael Antonio";

/**
 * Array of numbers
 * @type {Array<number>}
 */
const array = [1, 2, 3, 4, 5];

/**
 * @type {{id: string, edad: string|number, name: string }}
 */
const humano = {
  edad: 18,
  name: "Pablo",
  id: "343546546-fgh",
};

/**
 * Esta funcion hace una multiplicacion por los numeros pasados como parametro
 * @type {Function}
 * @param {number} a - Multiplicar
 * @param {number} b - Multiplicando
 * @returns {number} - resultado de la multiplicacion
 */

const multiplicar = (a, b) => a * b;

/**
 * Class to create a person
 */
class Persona {
  /**
   *
   * @param {Object} infoPersona Informacion (edad, nombre) de la persona a crear
   */
  constructor(infoPersona) {
    /**
     * @property {string} name Persons name
     */
    this.name = infoPersona.name;
    /**
     * @property {string} age Persons age
     */
    this.age = infoPersona.age;
  }

  /**
   * @property {Function} - Saluda con los datos de la persona
   * @returns {void}
   */
  saludar() {
    console.log(`Hola mi nombre es ${this.name} y tengo ${this.age} años`);
  }
}

// const Rafa = new Persona({ name: "Rafa", age: "21" });

// console.log(Rafa.saludar());
