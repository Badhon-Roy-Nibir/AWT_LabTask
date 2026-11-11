import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private readonly productRepo : Repository<Products>){}


    
}
