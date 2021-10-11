function info(): void{
    console.log('Module name: abdutils');
    console.log('Method name: info');
    
}

// this is a named export, can be accessed from othre module
export function line(char: string = '-', times:number = 50){
    let ln = '';

    for(let i=0;i<times;i++){
        ln += char;
    }
    console.log(ln);
}

export const square = function (num: number): number {
    return num*num;
}

export function sleep(duration: number = 1000): void{
    let startTime = Date.now();
    while((Date.now() - duration) > startTime);
}

export function invoke(fn: any, duration: number = 1000){
    if(typeof fn !== 'function') throw 'First arg expected to be a function!';

    sleep(duration);
    fn();
}
