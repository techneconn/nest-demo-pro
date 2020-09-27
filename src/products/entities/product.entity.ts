import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductDetailsEntity } from './product-details.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  // constructor(init?: Partial<ProductEntity>) {
  //   Object.assign(this, init);
  // }

  @PrimaryGeneratedColumn() // autoincrement id
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column('int')
  qty: number;
  @Column()
  price: number;

  @OneToOne(type => ProductDetailsEntity, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  productDetails: ProductDetailsEntity;
}
