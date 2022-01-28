import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/entities/location/location.model';
import { User } from 'src/entities/user/user.model';
import { Repository } from 'typeorm';
import { AddRouteDto } from './dto/add-route.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async addRoute(
    addRouteDto: AddRouteDto,
    userId: number,
  ): Promise<Location[]> {
    const locations = addRouteDto.locations.map(
      (location) =>
        new Location({
          ...location,
          user: {
            id: userId,
          } as User,
        }),
    );

    return this.locationRepository.save(locations);
  }
}
