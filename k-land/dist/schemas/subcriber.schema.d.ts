import { Document } from 'mongoose';
export declare type SubcriberSchema = Subcriber & Document;
export declare class Subcriber {
    name: string;
    email: string;
}
export declare const SubcriberSchema: import("mongoose").Schema<any>;
