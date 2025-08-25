import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListItemsService {
  constructor(private prismaService: PrismaService) {}

  private async checkListOwnership(listId: number, userId: number) {
    const list = await this.prismaService.shoppingList.findUnique({
      where: { id: listId },
    });

    if (!list) {
      throw new NotFoundException(
        `Lista de compras com ID ${listId} não encontrada.`,
      );
    }

    if (list.userId !== userId) {
      throw new ForbiddenException(
        'Você não tem permissão para acessar esta lista.',
      );
    }
  }

  async create(
    createListItemDto: CreateListItemDto,
    listId: number,
    userId: number,
  ) {
    await this.checkListOwnership(listId, userId);

    return this.prismaService.listItems.create({
      data: {
        ...createListItemDto,
        listId: listId,
      },
    });
  }

  async findAll(listId: number, userId: number) {
    await this.checkListOwnership(listId, userId);

    return this.prismaService.listItems.findMany({
      where: { listId: listId },
    });
  }

  async findOne(id: number, listId: number, userId: number) {
    await this.checkListOwnership(listId, userId);

    const item = await this.prismaService.listItems.findFirst({
      where: { id: id, listId: listId },
    });

    if (!item) {
      throw new NotFoundException(
        `Item com ID ${id} não encontrado nesta lista.`,
      );
    }

    return item;
  }

  async update(
    id: number,
    listId: number,
    updateListItemDto: UpdateListItemDto,
    userId: number,
  ) {
    await this.findOne(id, listId, userId);

    return this.prismaService.listItems.update({
      where: { id: id },
      data: updateListItemDto,
    });
  }

  async remove(id: number, listId: number, userId: number) {
    await this.findOne(id, listId, userId);

    return this.prismaService.listItems.delete({
      where: { id: id },
    });
  }
}
