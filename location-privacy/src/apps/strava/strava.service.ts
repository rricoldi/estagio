import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Strava } from 'src/entities/strava/strava.model';
import { User } from 'src/entities/user/user.model';
import { Repository } from 'typeorm';
import { AddStravaInfoDto } from './dto/add-strava_info.dto';

@Injectable()
export class StravaService {
  constructor(
    @InjectRepository(Strava)
    private readonly stravaRepository: Repository<Strava>,
  ) {}

  async addStravaInfo(
    addStravaInfoDto: AddStravaInfoDto,
    userId: number,
  ): Promise<Strava> {
    const stravaInfo = new Strava({
      ...addStravaInfoDto,
      user: {
        id: userId,
      } as User,
    });

    return this.stravaRepository.save(stravaInfo);
  }
}
