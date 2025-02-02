import { Template } from '../entities/template.entity';

export type UpdateTemplateDto = Partial<
  Omit<Template, 'id' | 'createdAt' | 'updatedAt'>
>;
