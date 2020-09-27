import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDetailEntity } from './product-details.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn() // autoincrement id
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column('int')
  qty: number;
  @Column()
  price: number;

  @OneToOne(type => ProductDetailEntity)
  @JoinColumn()
  productDetails: ProductDetailEntity;
}
