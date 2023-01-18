import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  // @PrimaryGeneratedColumn()
  @PrimaryGeneratedColumn({ type: "int", width: 10 })
  id: number;

  @Column("varchar", { length: 100 })
  username: string;

  @Column("varchar", { length: 100 })
  fullname: string;
  
  @Column("varchar", { length: 20 })
  password: string;
  
  @Column({ type: "int", width: 10 })
  role_id: number;
  
  @CreateDateColumn()
  created_date: string;
  
  @UpdateDateColumn()
  last_update_date: string;

  // @Column({ default: true })
  // isActive: boolean;
}