export class Engine {
    public hp: number[];
    public name: string;
    public type: string;

    constructor(hp: number[], name: string, type: string) {
        this.hp = hp;
        this.name = name;
        this.type = type;
    }
}
