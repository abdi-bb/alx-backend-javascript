const carBrand = Symbol('brand');
const carMotor = Symbol('motor');
const carColor = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[carBrand] = brand;
    this[carMotor] = motor;
    this[carColor] = color;
  }

  cloneCar() {
    return new this.constructor(this[carBrand], this[carMotor], this[carColor]);
  }
}
