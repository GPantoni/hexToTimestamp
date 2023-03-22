import readline from 'readline';

function hexToTimestamp(hexString) {
  console.log('🚀 ~ file: index.js:4 ~ hexToTimestamp ~ hexString:', hexString);
  const hexArray = hexString.split(' ');
  console.log('🚀 ~ file: index.js:6 ~ hexToTimestamp ~ hexArray:', hexArray);
  const year = parseInt(hexArray[0], 16) + 2000;
  console.log('🚀 ~ file: index.js:8 ~ hexToTimestamp ~ year:', year);
  const month = parseInt(hexArray[1], 16);
  console.log('🚀 ~ file: index.js:10 ~ hexToTimestamp ~ month:', month);
  const dayBinary = parseInt(hexArray[2], 16).toString(2).padStart(8, '0');
  console.log(
    '🚀 ~ file: index.js:12 ~ hexToTimestamp ~ dayBinary:',
    dayBinary
  );
  const dayOfWeek = parseInt(dayBinary.slice(0, 3), 2);
  console.log(
    '🚀 ~ file: index.js:14 ~ hexToTimestamp ~ dayOfWeek:',
    dayOfWeek
  );
  const dayOfMonth = parseInt(dayBinary.slice(3), 2);
  console.log(
    '🚀 ~ file: index.js:16 ~ hexToTimestamp ~ dayOfMonth:',
    dayOfMonth
  );
  const hour = parseInt(hexArray[3], 16);
  console.log('🚀 ~ file: index.js:18 ~ hexToTimestamp ~ hour:', hour);
  const minute = parseInt(hexArray[4], 16);
  console.log('🚀 ~ file: index.js:20 ~ hexToTimestamp ~ minute:', minute);
  const secondOctal = parseInt(hexArray[5] + hexArray[6], 16)
    .toString(8)
    .padStart(5, '0');
  console.log(
    '🚀 ~ file: index.js:22 ~ hexToTimestamp ~ secondOctal:',
    secondOctal
  );
  const second = parseInt(secondOctal.slice(0, 2));
  console.log('🚀 ~ file: index.js:26 ~ hexToTimestamp ~ second:', second);
  const millisecond = parseInt(secondOctal.slice(2));
  console.log(
    '🚀 ~ file: index.js:28 ~ hexToTimestamp ~ millisecond:',
    millisecond
  );
  const date = new Date(
    year,
    month - 1,
    dayOfMonth,
    hour,
    minute,
    second,
    millisecond
  );
  console.log('🚀 ~ file: index.js:38 ~ hexToTimestamp ~ date:', date);
  const dayOfWeekArray = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const dayOfWeekString = dayOfWeekArray[dayOfWeek];
  console.log(
    '🚀 ~ file: index.js:49 ~ hexToTimestamp ~ dayOfWeekString:',
    dayOfWeekString
  );
  const dateString = date.toLocaleDateString('pt-BR');
  console.log(
    '🚀 ~ file: index.js:51 ~ hexToTimestamp ~ dateString:',
    dateString
  );
  const timeString = date.toLocaleTimeString(undefined, {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3,
  });
  console.log(
    '🚀 ~ file: index.js:59 ~ hexToTimestamp ~ timeString:',
    timeString
  );
  return `${dayOfWeekString} ${dateString} ${timeString}`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt() {
  rl.question('Digite a string hexadecimal (q para sair): ', (hexString) => {
    if (hexString === 'q') {
      rl.close();
      return;
    }
    const timestamp = hexToTimestamp(hexString);
    console.log(`Timestamp: ${timestamp}`);
    prompt();
  });
}

prompt();
