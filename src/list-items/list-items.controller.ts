import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ListItemsService } from './list-items.service';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('shopping-lists/:listId/items')
@UseGuards(AuthGuard)
export class ListItemsController {
  constructor(private readonly listItemsService: ListItemsService) {}

  @Post()
  create(
    @Param('listId') listId: string,
    @Body() createListItemDto: CreateListItemDto,
    @Request() request,
  ) {
    return this.listItemsService.create(
      createListItemDto,
      +listId,
      request.user.id,
    );
  }

  @Get()
  findAll(@Param('listId') listId: string, @Request() request) {
    return this.listItemsService.findAll(+listId, request.user.id);
  }

  @Get(':id')
  findOne(
    @Param('listId') listId: string,
    @Param('id') id: string,
    @Request() request,
  ) {
    return this.listItemsService.findOne(+id, +listId, request.user.id);
  }

  @Patch(':id')
  update(
    @Param('listId') listId: string,
    @Param('id') id: string,
    @Body() updateListItemDto: UpdateListItemDto,
    @Request() request,
  ) {
    return this.listItemsService.update(
      +id,
      +listId,
      updateListItemDto,
      request.user.id,
    );
  }

  @Delete(':id')
  remove(
    @Param('listId') listId: string,
    @Param('id') id: string,
    @Request() request,
  ) {
    return this.listItemsService.remove(+id, +listId, request.user.id);
  }
}
