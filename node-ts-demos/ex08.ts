import { invoke } from './abdutils';

function hello(){
    console.log('Hello World');
}

console.log('start of script');
invoke(hello, 5000);
console.log('end of script');