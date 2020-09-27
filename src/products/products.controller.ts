import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filters/http.exception';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { NotFoundException } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('products')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return await this.productsService.create(product);
  }

  @Get()
  async find(): Promise<Product[]> {
    return await this.productsService.find();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: UpdateProductDTO): Promise<UpdateResult> {
    return await this.productsService.update(Number(id), product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    // throw new HttpException('hoge', 400);
    return await this.productsService.delete(Number(id));
    // ちゃんと判別して正しいレスポンスコードを返す
    //   "data": {
    //     "raw": {
    //         "fieldCount": 0,
    //         "affectedRows": 0,
    //         "insertId": 0,
    //         "serverStatus": 2,
    //         "warningCount": 0,
    //         "message": "",
    //         "protocol41": true,
    //         "changedRows": 0
    //     },
    //     "affected": 0
    // }
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Product> {
    const result = await this.productsService.findOne(Number(params.id));
    if (!result) {
      throw new NotFoundException('Could not find any product');
    }
    return result;
  }
}
