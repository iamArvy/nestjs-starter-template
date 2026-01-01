import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class SoftDeleteEntity extends BaseEntity {
  @Column({ type: 'boolean', default: false })
  is_deleted: boolean;

  @Column({ type: 'timestamp', nullable: true })
  deleted_at: Date | null;
}
