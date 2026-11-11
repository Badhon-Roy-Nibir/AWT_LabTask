import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { Products } from './entities/products.entity.js';
import { promises } from 'dns';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto.js';
import { UpdateProductDto } from './dtos/update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() product: CreateProductDto): Promise<object>{
    
    return this.productsService.create(product);

  }

  @Get()
  getAllProducts(){
    return this.productsService.findAll();
  }
  @Get(":id")
  getProductbyId(@Param("id",ParseIntPipe) id: number): Promise<object>{
    return this.productsService.findOne(id);
  }
  @Get("category/:cat")
  getProductsByCategory(@Param("cat") cat: string): Promise<object>{
    return this.productsService.findByCategory(cat);

  }

  @Get("search")
  getProductByName(@Query("keyword") keyword: string): Promise<object>{

    return this.productsService.search(keyword);

  }

  @Patch(":id")
  updateproductPartial(@Param("id",ParseIntPipe) id: number, @Body() pro: PartialUpdateProductDto): Promise<object>{
    return this.productsService.update(id, pro);

  }
  @Put(":id")
  replaceProduct(@Param("id", ParseIntPipe) id: number, @Body() pro: UpdateProductDto): Promise<object>{
    return this.productsService.replace(id,pro);
  }

  @Patch(":id/toggle")
  toggleActive(@Param("id", ParseIntPipe) id: number): Promise<object>{
    return this.productsService.toggleActive(id);
  }
  @Delete(":id")
  deleteProduct(@Param("id", ParseIntPipe) id: number): Promise<object>{

    return this.productsService.remove(id);

  }

  


}
