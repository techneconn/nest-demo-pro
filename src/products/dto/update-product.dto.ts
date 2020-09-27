import { IsOptional, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsNumber()
  readonly qty: number;
  @IsOptional()
  @IsNumber()
  readonly price: number;
}
