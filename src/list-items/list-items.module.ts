import { Module } from '@nestjs/common';
import { ListItemsService } from './list-items.service';
import { ListItemsController } from './list-items.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ListItemsController],
  providers: [ListItemsService],
})
export class ListItemsModule {}
