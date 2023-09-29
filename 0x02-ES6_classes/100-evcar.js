import Car from './10-car';

const evBrand = Symbol('brand');
const evMotor = Symbol('motor');
const evColor = Symbol('color');
const evRange = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[evRange] = range;
  }

  cloneCar() {
    return new Car(this[evBrand], this[evMotor], this[evColor]);
  }
}
