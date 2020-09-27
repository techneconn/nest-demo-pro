import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDetails } from '../interfaces/product.interface';

@Entity({ name: 'product_details' })
export class ProductDetailsEntity {
  // constructor(init?: Partial<ProductDetailsEntity>) {
  //   Object.assign(this, init);
  // }

  @PrimaryGeneratedColumn() // autoincrement id
  id: number;
  @Column({ length: 45 })
  partNumber: string;
  @Column({ length: 45 })
  dimension: string;
  @Column('float')
  weight: number;
  @Column({ length: 45 })
  manufacturer: string;
  @Column({ length: 45 })
  origin: string;
}
