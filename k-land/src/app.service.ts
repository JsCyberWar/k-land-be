import {Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Subcriber} from './interfaces/subcriber.interface';



@Injectable()
export class AppService {
    constructor(@InjectModel('Subcriber') private subcriberModal: Model<Subcriber>) {}

    async addEmailToDB(name: string, email:string):Promise<Subcriber>{
      const newSubcriber = new this.subcriberModal({
          name,
          email,
      });
        
      return await newSubcriber.save();
    }

    async getData() : Promise<Subcriber[]>{
        return await this.subcriberModal.find().exec();
    }
}
