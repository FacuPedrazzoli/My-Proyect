import 'dotenv/config'
import { suma, resta, multiplicacion, division, potencia } from './cuentas'

switch (process.argv[2]) {
    case "suma":
        console.log(`Funcion de suma (1 + 2) = ${suma(1, 2)}`)
        console.log(`Funcion de resta (5 - 1) = ${resta(5, 1)}`)
        console.log(`Funcion de multiplicacion (3 * 2) = ${multiplicacion(3, 2)}`)
        console.log(`Funcion de division (8 / 2) = ${division(8, 2)}`)
        console.log(`Funcion de potencia (2 ** 4) = ${potencia(2, 4)}`)
        break
    case "arcihvo 2":
        break
    case "archivo 3":
        break
    case "Archivo 4":
        break
    case "Archivo 5":
        break
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}