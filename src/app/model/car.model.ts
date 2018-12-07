import { GearBox } from './gearbox.model';

export class Car {
    public id: string;
    public mark: string;
    public model: string[];
    public productionYear: string;
    public fuelTank: number;
    public designer: string;
    public drive: string[];
    public gearboxes: GearBox[];
    public capacity: number;
    public image: string;

    // tslint:disable:max-line-length
    constructor(id: string, mark: string, model: string[], productionYear: string, fuelTank: number, designer: string, drive: string[], gearboxes: GearBox[], capacity: number, image: string) {
        this.id = id;
        this.mark = mark;
        this.model = model;
        this.productionYear = productionYear;
        this.fuelTank = fuelTank;
        this.designer = designer;
        this.drive = drive;
        this.gearboxes = gearboxes;
        this.capacity = capacity;
        this.image = image;
    }

    guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}
