import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';
import { Project } from './projects/entities/project.entity';
import { TemplatesController } from './templates/templates.controller';
import { TemplatesService } from './templates/templates.service';
import { Template } from './templates/entities/template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Template])],
  controllers: [ProjectsController, TemplatesController],
  providers: [ProjectsService, TemplatesService],
})
export class ProjectModule {}
