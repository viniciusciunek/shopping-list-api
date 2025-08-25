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
import { ShoppingListsService } from './shopping-lists.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('shopping-lists')
@UseGuards(AuthGuard)
export class ShoppingListsController {
  constructor(private readonly shoppingListsService: ShoppingListsService) {}

  @Post()
  create(
    @Body() createShoppingListDto: CreateShoppingListDto,
    @Request() request,
  ) {
    return this.shoppingListsService.create(
      createShoppingListDto,
      request.user.id,
    );
  }

  @Get()
  findAll(@Request() request) {
    return this.shoppingListsService.findAll(request.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() request) {
    return this.shoppingListsService.findOne(+id, request.user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingListDto: UpdateShoppingListDto,
    @Request() request,
  ) {
    return this.shoppingListsService.update(
      +id,
      updateShoppingListDto,
      request.user.id,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() request) {
    return this.shoppingListsService.remove(+id, request.user.id);
  }
}
