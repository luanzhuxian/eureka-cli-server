import { Template } from '../entities/template.entity';

export type CreateTemplateDto = Omit<
  Template,
  'id' | 'createdAt' | 'updatedAt'
>;
