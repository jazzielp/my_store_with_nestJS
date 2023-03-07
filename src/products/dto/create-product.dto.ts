import { IsString, IsUrl, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  readonly stock: number;

  @IsUrl()
  readonly image: string;
}
