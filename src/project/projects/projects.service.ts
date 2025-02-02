import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private configService: ConfigService,
  ) {
    const dbHost = this.configService.get<string>('DB_HOST');
    // console.log('Database Host:', dbHost);
  }

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  findOne(id: number): Promise<Project> {
    return this.projectRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    await this.projectRepository.update(id, updateProjectDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.projectRepository.delete(id);
    return result.affected > 0;
  }
}
