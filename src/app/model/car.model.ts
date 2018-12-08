import { GearBox } from './gearbox.model';
import { Engine } from './engine.model';
import { TypeOfBody } from './typeOfBody.model';

export class Car {
    public id: string;
    public mark: string;
    public model: string[];
    public productionYear: string;
    public fuelTank: number;
    public designer: string;
    public drive: string[];
    public capacity: number;
    public eqVersions: string[];
    public engines: Engine[];
    public gearboxes: GearBox[];
    public typesOfBody: TypeOfBody[];
    public image: string;

    // tslint:disable:max-line-length
    constructor(id: string, mark: string, model: string[], productionYear: string, fuelTank: number, designer: string, drive: string[], capacity: number, eqVersions: string[], engines: Engine[], gearboxes: GearBox[], typesOfBody: TypeOfBody[], image: string) {
        this.id = id;
        this.mark = mark;
        this.model = model;
        this.productionYear = productionYear;
        this.fuelTank = fuelTank;
        this.designer = designer;
        this.drive = drive;
        this.capacity = capacity;
        this.eqVersions = eqVersions;
        this.engines = engines;
        this.gearboxes = gearboxes;
        this.typesOfBody = typesOfBody;
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
