export class BodyType {
    public minCarrier: number;
    public maxCarrier: number;
    public doors: number[];
    public name: string;
    public seats: number[];

    constructor(minCarrier: number, maxCarrier: number, doors: number[], name: string, seats: number[]) {
        this.minCarrier = minCarrier;
        this.maxCarrier = maxCarrier;
        this.doors = doors;
        this.name = name;
        this.seats = seats;
    }
}
