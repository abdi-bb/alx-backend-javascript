export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.species];

    return new ModelCar();
  }
}
