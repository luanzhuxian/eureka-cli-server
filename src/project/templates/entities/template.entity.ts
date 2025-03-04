import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  gitUrl: string;

  @Column()
  branch: string;

  @Column()
  path: string;

  @Column()
  version: string;

  @Column()
  value: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// TODO:
export const TEMPLATES = [
  {
    name: 'vue3',
    description: 'vue3 template',
    gitUrl: 'https://github.com/vuejs/vue-next.git',
    branch: 'main',
    path: 'packages/vue3',
    version: '3.0.0',
    value: 'vue',
  },
  {
    name: 'react18',
    description: 'react template',
    gitUrl: 'https://github.com/facebook/react.git',
    branch: 'main',
    path: 'packages/react',
    version: '18.0.0',
    value: 'react',
  },
];
