import { AppService } from './app.service';
import { Request } from 'express';
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    saveData(request: Request): Promise<import("./interfaces/subcriber.interface").Subcriber>;
    getData(): Promise<import("./interfaces/subcriber.interface").Subcriber[]>;
}
