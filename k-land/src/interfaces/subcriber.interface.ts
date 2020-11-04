import {Document} from 'mongoose';

export interface Subcriber extends Document {
    name: string;
    email:string;
}