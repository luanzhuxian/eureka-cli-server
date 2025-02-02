import { ConfigService } from '@nestjs/config';

export default (configService: ConfigService) => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get('DB_PORT'), 10),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // for development environment, set to false in production environment
});
