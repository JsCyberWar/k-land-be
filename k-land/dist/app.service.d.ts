import { Model } from 'mongoose';
import { Subcriber } from './interfaces/subcriber.interface';
export declare class AppService {
    private subcriberModal;
    constructor(subcriberModal: Model<Subcriber>);
    addEmailToDB(name: string, email: string): Promise<Subcriber>;
    getData(): Promise<Subcriber[]>;
}
