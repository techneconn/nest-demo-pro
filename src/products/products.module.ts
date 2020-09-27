import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductDetailEntity } from './entities/product-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, ProductDetailEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
