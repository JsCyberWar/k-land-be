import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubcriberSchema = Subcriber & Document;

@Schema()
export class Subcriber {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const SubcriberSchema = SchemaFactory.createForClass(Subcriber);