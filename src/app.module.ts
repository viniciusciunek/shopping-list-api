import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';

@Module({
  imports: [AuthModule, PrismaModule, ShoppingListsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
