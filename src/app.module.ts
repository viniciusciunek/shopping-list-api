import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';
import { ListItemsModule } from './list-items/list-items.module';

@Module({
  imports: [AuthModule, PrismaModule, ShoppingListsModule, ListItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
