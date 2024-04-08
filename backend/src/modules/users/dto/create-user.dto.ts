import { Type } from 'class-transformer';
import {
  IsDate,
  IsString,
  IsNumber,
  IsBoolean,
  IsPositive,
  Max,
  MaxLength,
  IsEnum,
  IsPhoneNumber,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(25, { message: 'First name is too long' })
  firstName: string;

  @IsString()
  @MaxLength(25, { message: 'lastName name is too long' })
  lastName: string;

  @IsNumber()
  @IsPositive()
  @Max(999)
  age: number;

  @IsEnum({ female: 'female', male: 'male' })
  gender: string;

  @IsBoolean()
  pregnancy: boolean;

  @Type(() => Date)
  @IsDate()
  birthdate: Date;

  @Matches(/^[0-9,+,$]*$/, {
    message: 'Only numbers and prefix ( + ), format is +999999999999',
  })
  @IsPhoneNumber()
  phoneNumber: string;
}
