import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

enum EGenders {
  male = 'male',
  female = 'female',
}

@Schema()
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  // @Prop({ required: true, type: String, enum: ['male', 'female'] })
  // gender: ['male', 'female'];
  @Prop({ required: true, enum: EGenders })
  gender: string;

  @Prop({ required: true })
  pregnancy: boolean;

  @Prop({ required: true })
  birthdate: Date;

  @Prop({ required: true })
  phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
