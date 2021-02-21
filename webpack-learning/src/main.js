import notifier from './notification';

notifier.greet('Hello Modules i am the greeter');
notifier.log('Hello multiple exported functions from notification ');

class Form {
  constructor() {
    console.log('Yay Babel transpiler works');
  }
}

new Form();

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '27 cube root is equal to ' + Math.cbrt(5),
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
