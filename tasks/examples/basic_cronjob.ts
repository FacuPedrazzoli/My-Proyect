import * as cron from 'node-cron';

cron.schedule('* * * * * *', () => {
    console.log('Corre la tarea cada segundo');
});

cron.schedule('0 10 * * *', () => {
    console.log('Corre la tarea a las 10:00 AM todos los dias');
});

cron.schedule('0 12 * * 1', () => {
    console.log('Corre la tarea todos los lunes a las 12:00 PM');
});