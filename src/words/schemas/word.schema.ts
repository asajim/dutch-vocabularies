import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WordDocument = Word & Document;

@Schema()
export class Word {
  @Prop()
  id: string;

  @Prop()
  value: string;

  @Prop()
  sentences: string[];

  @Prop()
  meanings: string[];
}

export const WordSchema = SchemaFactory.createForClass(Word);
