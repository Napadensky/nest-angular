import { IsMongoId } from 'class-validator';

export class getOneUserDto {
  @IsMongoId()
  id: string;
}
