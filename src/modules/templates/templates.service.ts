import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Template, TEMPLATES } from './entities/template.entity';

@Injectable()
export class TemplatesService implements OnModuleInit {
  constructor(
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,
  ) {}

  async onModuleInit() {
    const count = await this.templateRepository.count();
    if (count === 0) {
      await this.templateRepository.save(TEMPLATES);
    }
  }

  create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const template = this.templateRepository.create(createTemplateDto);
    return this.templateRepository.save(template);
  }

  findAll(): Promise<Template[]> {
    return this.templateRepository.find();
  }

  findOne(id: number): Promise<Template> {
    return this.templateRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateTemplateDto: UpdateTemplateDto,
  ): Promise<Template> {
    await this.templateRepository.update(id, updateTemplateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.templateRepository.delete(id);
    return result.affected > 0;
  }
}
