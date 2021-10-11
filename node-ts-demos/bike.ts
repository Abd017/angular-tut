import Vehicle from "./vehicle";

export default class Car implements Vehicle{
    start(): void {
        console.log("Bike started");
    }
    stop(): void {
        console.log("Bike stopped");
    }
    moveForward(): void {
        console.log("Bike moving forward");
    }
    moveBackward(): void {
        console.log("Bike moving backward");
    }
}