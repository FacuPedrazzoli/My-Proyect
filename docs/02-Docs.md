# Documentación del archivo 02-Ejercicio.ts

## Descripción

Este archivo se encarga de crear una estructura de directorios y archivos para organizar documentos en diferentes categorías y meses. Cada mes tiene un número específico de días, y cada día tiene un directorio con un archivo `leeme.txt` que contiene una descripción del formato de los documentos.

## Dependencias

- `fs`: Módulo de Node.js para interactuar con el sistema de archivos.
- `path`: Módulo de Node.js para trabajar con rutas de archivos y directorios.

## Constantes

- `baseDir`: Ruta base donde se crearán los directorios de las categorías y meses.

- `meses`: Array de objetos que contiene el nombre y el número de días de cada mes.

## Funciones

### `mesesYSusDias(categoriaDir: string)`

Crea la estructura de directorios y archivos para cada mes y día dentro de una categoría específica.

#### Parámetros

- `categoriaDir`: Ruta del directorio de la categoría.

#### Detalles `mesesYSusDias()`

1. Para cada mes en el array `meses`, crea un directorio con el nombre del mes.
2. Para cada día del mes, crea un directorio con el nombre del día seguido de `_no_utilizado`.
3. Dentro de cada directorio de día, crea un archivo `leeme.txt` con el contenido `el formato de los documentos es: tipo_de_documento__correspondencia`.

### `crearEstructura()`

Crea la estructura de directorios y archivos para varias categorías predefinidas.

#### Detalles

1. Define un array de categorías.
2. Para cada categoría, crea un directorio dentro de `baseDir`.
3. Llama a la función `mesesYSusDias` para crear la estructura de meses y días dentro de cada categoría.

```typescript
import { crearEstructura } from "./02-Ejercicio";

crearEstructura();
```
