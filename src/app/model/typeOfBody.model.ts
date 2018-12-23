export class TypeOfBody {
    public carrier: string;
    public doors: number[];
    public name: string;
    public seats: number[];

    constructor(carrier: string, doors: number[], name: string, seats: number[]) {
        this.carrier = carrier;
        this.doors = doors;
        this.name = name;
        this.seats = seats;
    }
}
