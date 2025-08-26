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
  ParseIntPipe,
} from '@nestjs/common';
import { ListItemsService } from './list-items.service';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('List Items')
@ApiBearerAuth()
@Controller('shopping-lists/:listId/items')
@UseGuards(AuthGuard)
export class ListItemsController {
  constructor(private readonly listItemsService: ListItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Adiciona um novo item a uma lista de compras' })
  @ApiParam({
    name: 'listId',
    description: 'ID da lista de compras à qual o item será adicionado',
  })
  @ApiResponse({
    status: 201,
    description: 'O item foi adicionado com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({
    status: 403,
    description: 'Acesso negado (a lista pertence a outro usuário).',
  })
  create(
    @Param('listId', ParseIntPipe) listId: number,
    @Body() createListItemDto: CreateListItemDto,
    @Request() request,
  ) {
    return this.listItemsService.create(
      createListItemDto,
      listId,
      request.user.id,
    );
  }

  @Get()
  @ApiOperation({
    summary: 'Lista todos os itens de uma lista de compras específica',
  })
  @ApiParam({ name: 'listId', description: 'ID da lista de compras' })
  @ApiResponse({
    status: 200,
    description: 'Retorna um array com os itens da lista.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  findAll(@Param('listId', ParseIntPipe) listId: number, @Request() request) {
    return this.listItemsService.findAll(listId, request.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um item específico em uma lista de compras' })
  @ApiParam({ name: 'listId', description: 'ID da lista de compras' })
  @ApiParam({ name: 'id', description: 'ID do item a ser buscado' })
  @ApiResponse({ status: 200, description: 'Retorna os dados do item.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  @ApiResponse({ status: 404, description: 'Item não encontrado na lista.' })
  findOne(
    @Param('listId', ParseIntPipe) listId: number,
    @Param('id', ParseIntPipe) id: number,
    @Request() request,
  ) {
    return this.listItemsService.findOne(id, listId, request.user.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um item de uma lista de compras' })
  @ApiParam({ name: 'listId', description: 'ID da lista de compras' })
  @ApiParam({ name: 'id', description: 'ID do item a ser atualizado' })
  @ApiResponse({
    status: 200,
    description: 'O item foi atualizado com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  @ApiResponse({ status: 404, description: 'Item não encontrado na lista.' })
  update(
    @Param('listId', ParseIntPipe) listId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateListItemDto: UpdateListItemDto,
    @Request() request,
  ) {
    return this.listItemsService.update(
      id,
      listId,
      updateListItemDto,
      request.user.id,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui um item de uma lista de compras' })
  @ApiParam({ name: 'listId', description: 'ID da lista de compras' })
  @ApiParam({ name: 'id', description: 'ID do item a ser excluído' })
  @ApiResponse({ status: 200, description: 'O item foi excluído com sucesso.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  @ApiResponse({ status: 404, description: 'Item não encontrado na lista.' })
  remove(
    @Param('listId', ParseIntPipe) listId: number,
    @Param('id', ParseIntPipe) id: number,
    @Request() request,
  ) {
    return this.listItemsService.remove(id, listId, request.user.id);
  }
}
