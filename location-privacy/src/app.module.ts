import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { UserModule } from './apps/user/user.module';
import { LocationModule } from './apps/location/location.module';
import { StravaModule } from './apps/strava/strava.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    LocationModule,
    StravaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
