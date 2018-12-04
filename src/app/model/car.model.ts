export class Car {
    public mark: string;
    public model: string;
    public productionYear: string;
    public fuelTank: number;
    public designer: string;
    public image: string;

    constructor(mark: string, model: string, productionYear: string, fuelTank: number, designer: string, image: string) {
        this.mark = mark;
        this.model = model;
        this.productionYear = productionYear;
        this.fuelTank = fuelTank;
        this.designer = designer;
        this.image = image;
    }
}
