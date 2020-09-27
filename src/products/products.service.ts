import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductDetailEntity } from './entities/product-details.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(ProductDetailEntity)
    private readonly productDetailsRepository: Repository<ProductDetailEntity>,
  ) {}
  // ↑productRepositoryはproducts.moduleに登録されていないと使えない

  async create(product: CreateProductDTO): Promise<Product> {
    const productDetails = await this.productDetailsRepository.save({
      dimension: product.dimension,
      partNumber: product.partNumber,
      weight: product.weight,
      manufacture: product.manufacturer,
      origin: product.origin,
    });
    const newProduct = new ProductEntity();
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.qty = product.qty;
    newProduct.productDetails = productDetails;
    await this.productRepository.save(newProduct);

    // return await this.productRepository.save(product);
    return { ...newProduct, productDetails };
  }

  async find(): Promise<Product[]> {
    return await this.productRepository.find({ relations: ['productDetails'] });
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne(id, { relations: ['productDetails'] });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }

  async update(id: number, recordToUpdate: UpdateProductDTO): Promise<UpdateResult> {
    // たぶん最初にfindをやったほうが良い
    return await this.productRepository.update(id, recordToUpdate);
    // find先やるならこういうやり方もある。
    // await this.productRepository.merge(product, recordToUpdate);
    // await this.productRepository.save(product);
  }
}
