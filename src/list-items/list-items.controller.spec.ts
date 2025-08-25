import { Test, TestingModule } from '@nestjs/testing';
import { ListItemsController } from './list-items.controller';
import { ListItemsService } from './list-items.service';

describe('ListItemsController', () => {
  let controller: ListItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListItemsController],
      providers: [ListItemsService],
    }).compile();

    controller = module.get<ListItemsController>(ListItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
