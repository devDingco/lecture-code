import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // 없어도 되는것 => contents?: string

  // BaseEntity로부터 find 등을 상속 받자!
  // power!: number;
  // attack() {}
  // find() {}
}
