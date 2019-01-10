import { GearBox } from './gearbox.model';
import { Engine } from './engine.model';
import { BodyType } from './typeOfBody.model';

export class Car {
    public id: string;
    public mark: string;
    public model: string[];
    public fromProductionYear: number;
    public toProductionYear: any;
    public fuelTank: number;
    public designer: string;
    public drive: string[];
    public capacity: number;
    public eqVersions: string[];
    public engines: Engine[];
    public gearboxes: GearBox[];
    public typesOfBody: BodyType[];
    public image: string;
    public isMarked: boolean;

    // tslint:disable:max-line-length
    constructor(id: string, mark: string, model: string[], fromProductionYear: number, toProductionYear: any, fuelTank: number, designer: string, drive: string[], capacity: number, eqVersions: string[], engines: Engine[], gearboxes: GearBox[], typesOfBody: BodyType[], image: string) {
        this.id = id;
        this.mark = mark;
        this.model = model;
        this.fromProductionYear = fromProductionYear;
        this.toProductionYear = toProductionYear;
        this.fuelTank = fuelTank;
        this.designer = designer;
        this.drive = drive;
        this.capacity = capacity;
        this.eqVersions = eqVersions;
        this.engines = engines;
        this.gearboxes = gearboxes;
        this.typesOfBody = typesOfBody;
        this.image = image;
        this.isMarked = false;
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
