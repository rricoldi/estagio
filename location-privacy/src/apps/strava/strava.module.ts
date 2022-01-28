import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strava } from 'src/entities/strava/strava.model';
import { StravaController } from './strava.controller';
import { StravaService } from './strava.service';

@Module({
  imports: [TypeOrmModule.forFeature([Strava])],
  controllers: [StravaController],
  providers: [StravaService],
})
export class StravaModule {}
