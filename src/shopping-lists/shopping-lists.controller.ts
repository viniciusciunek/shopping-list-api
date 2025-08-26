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
import { ShoppingListsService } from './shopping-lists.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Shopping Lists')
@ApiBearerAuth()
@Controller('shopping-lists')
@UseGuards(AuthGuard)
export class ShoppingListsController {
  constructor(private readonly shoppingListsService: ShoppingListsService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova lista de compras' })
  @ApiResponse({ status: 201, description: 'A lista foi criada com sucesso.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
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
  @ApiOperation({ summary: 'Lista todas as listas de compras do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Retorna um array com as listas de compras do usuário.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  findAll(@Request() request) {
    return this.shoppingListsService.findAll(request.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma lista de compras específica pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Retorna os dados da lista de compras.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({
    status: 403,
    description: 'Acesso negado (a lista pertence a outro usuário).',
  })
  @ApiResponse({ status: 404, description: 'Lista de compras não encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number, @Request() request) {
    return this.shoppingListsService.findOne(id, request.user.id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza os dados de uma lista de compras' })
  @ApiResponse({
    status: 200,
    description: 'A lista foi atualizada com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  @ApiResponse({ status: 404, description: 'Lista de compras não encontrada.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShoppingListDto: UpdateShoppingListDto,
    @Request() request,
  ) {
    return this.shoppingListsService.update(
      id,
      updateShoppingListDto,
      request.user.id,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exclui uma lista de compras' })
  @ApiResponse({
    status: 200,
    description: 'A lista foi excluída com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  @ApiResponse({ status: 404, description: 'Lista de compras não encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number, @Request() request) {
    return this.shoppingListsService.remove(id, request.user.id);
  }
}
