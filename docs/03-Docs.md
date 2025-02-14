# Cronjob

## Introducción

Un cronjob es una tarea programada que se ejecuta automáticamente a intervalos regulares en sistemas Unix y Linux. Se utiliza para automatizar tareas repetitivas como la ejecución de scripts, la copia de seguridad de datos, la limpieza de archivos temporales, entre otros.

## Sintaxis de Cron

La sintaxis básica de una entrada en el archivo crontab es la siguiente:

```
* * * * * comando
```

Cada asterisco representa un campo de tiempo específico:

1. Minuto (0 - 59)
2. Hora (0 - 23)
3. Día del mes (1 - 31)
4. Mes (1 - 12)
5. Día de la semana (0 - 7) (Domingo puede ser 0 o 7)

Por ejemplo, la siguiente entrada ejecuta un comando a las 5:30 AM todos los días:

```
30 5 * * * /ruta/al/comando
```

## Ejemplos de Cronjobs

### Ejecutar un script cada 15 minutos

```
*/15 * * * * /ruta/al/script.sh
```

### Ejecutar un comando todos los días a la medianoche

```
0 0 * * * /ruta/al/comando
```

### Ejecutar un script todos los lunes a las 8:00 AM

```
0 8 * * 1 /ruta/al/script.sh
```

### Ejecutar un comando el primer día de cada mes a las 12:00 PM

```
0 12 1 * * /ruta/al/comando
```

## Administración de Cronjobs

### Ver los cronjobs del usuario actual

Para ver los cronjobs del usuario actual, usa el siguiente comando:

```sh
crontab -l
```

### Editar los cronjobs del usuario actual

Para editar los cronjobs del usuario actual, usa el siguiente comando:

```sh
crontab -e
```

Esto abrirá el archivo crontab en el editor de texto predeterminado, donde puedes agregar, modificar o eliminar cronjobs.

### Eliminar todos los cronjobs del usuario actual

Para eliminar todos los cronjobs del usuario actual, usa el siguiente comando:

```sh
crontab -r
```

## Archivos de Log

Los cronjobs generan logs que se pueden revisar para verificar la ejecución de las tareas programadas. En muchos sistemas, estos logs se encuentran en `/var/log/syslog` o `/var/log/cron`.

Para ver los logs de cron, puedes usar el siguiente comando:

```sh
grep CRON /var/log/syslog
```

## Consideraciones

- Asegúrate de que los scripts y comandos tengan los permisos de ejecución necesarios.
- Verifica que las rutas a los scripts y comandos sean correctas.
- Prueba los scripts manualmente antes de agregarlos a cron para asegurarte de que funcionen correctamente.

## Recursos Adicionales

- [Documentación de Cron](https://man7.org/linux/man-pages/man5/crontab.5.html)
- [Guía de Cronjobs](https://www.adminschoice.com/crontab-quick-reference)
