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
import { IsBeforeNow } from 'src/decorator/IsAfterNow.decorator';

export class CreateUserDto {
  @IsString()
  @MaxLength(25, { message: 'First name is too long' })
  firstName: string;

  @IsString()
  @MaxLength(25, { message: 'lastName is too long' })
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
  @IsBeforeNow()
  birthdate: Date;

  @Matches(/^[0-9,+,$]*$/, {
    message: 'Only numbers and prefix ( + ), format is +999999999999',
  })
  @IsPhoneNumber()
  phoneNumber: string;
}
