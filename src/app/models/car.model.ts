
export class Car {
    constructor(
        public numberPlate: String,
        public type: String,
        public brand: String,
        public model: String,
        public picture: String,
        public available: boolean,
        public kilometers: number,
        public state: String,
        public fuel: String,
        public priceDay: number
    ) {}
}