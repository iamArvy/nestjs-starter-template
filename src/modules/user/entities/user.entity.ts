import { SoftDeleteEntity } from 'src/database/entities';
import { Column } from 'typeorm';

export class User extends SoftDeleteEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
