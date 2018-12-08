export class TypeOfBody {
    public carrier: string;
    public doors: number[];
    public name: string;

    constructor(carrier: string, doors: number[], name: string) {
        this.carrier = carrier;
        this.doors = doors;
        this.name = name;
    }
}
