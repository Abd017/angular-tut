import Car from './car';
import Vehicle from './vehicle';
import Bike from './bike';
import Person from './person';

function repairVehicle(v1: Vehicle): void {
    v1.start();
    v1.moveForward();
    v1.moveBackward();
    v1.stop();
}

repairVehicle(new Car())
repairVehicle(new Bike())
// repairVehicle(new Person())
