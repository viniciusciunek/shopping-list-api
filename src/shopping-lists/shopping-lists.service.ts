import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShoppingListsService {
  constructor(private prismaService: PrismaService) {}

  create(createShoppingListDto: CreateShoppingListDto, userId: number) {
    return this.prismaService.shoppingList.create({
      data: {
        title: createShoppingListDto.title,
        userId: userId,
      },
    });
  }

  findAll(userId: number) {
    return this.prismaService.shoppingList.findMany({
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const list = await this.prismaService.shoppingList.findUnique({
      where: { id: id },
    });

    if (!list) {
      throw new NotFoundException(`Lista com ID ${id} não encontrada.`);
    }

    if (list.userId !== userId) {
      throw new ForbiddenException(
        'Você não tem permissão para acessar esta lista.',
      );
    }

    return list;
  }

  async update(
    id: number,
    updateShoppingListDto: UpdateShoppingListDto,
    userId: number,
  ) {
    await this.findOne(id, userId);

    return this.prismaService.shoppingList.update({
      where: { id: id },
      data: { title: updateShoppingListDto.title },
    });
  }

  async remove(id: number, userId: number) {
    await this.findOne(id, userId);

    return this.prismaService.shoppingList.delete({
      where: { id: id },
    });
  }
}
