import Vehicle from "./vehicle";

export default class Car implements Vehicle{
    start(): void {
        console.log("Car started");
    }
    stop(): void {
        console.log("Car stopped");
    }
    moveForward(): void {
        console.log("Car moving forward");
    }
    moveBackward(): void {
        console.log("Car moving backward");
    }

    honk(): void{
        console.log("Beeeeeeep");
    }
}