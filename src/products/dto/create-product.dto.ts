import { IsInt, isNotEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsNumber()
  readonly qty: number;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  productDetails: CreateProductDetailsDTO;
}

export class CreateProductDetailsDTO {
  @IsNotEmpty()
  @IsString()
  readonly partNumber: string;

  @IsOptional()
  @IsString()
  readonly dimension: string;

  @IsOptional()
  @IsInt()
  readonly weight: number;

  @IsOptional()
  @IsString()
  readonly manufacturer: string;

  @IsOptional()
  @IsString()
  readonly origin: string;
}
