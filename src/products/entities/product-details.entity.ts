import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_details' })
export class ProductDetailEntity {
  @PrimaryGeneratedColumn() // autoincrement id
  id: number;
  @Column({ length: 45 })
  partNumber: string;
  @Column({ length: 45 })
  dimension: string;
  @Column('float')
  weight: number;
  @Column({ length: 45 })
  manufacture: string;
  @Column({ length: 45 })
  origin: string;
}
