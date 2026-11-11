import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity.js';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto.js';
import { PartialUpdateProductDto } from './dtos/partial-update-product.dto.js';
import { UpdateProductDto } from './dtos/update-product.dto.js';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Products) private readonly productsRepo : Repository<Products>){}

    async create(product: CreateProductDto): Promise<object>{
        try{
            const pro = this.productsRepo.create(product);
            await this.productsRepo.save(pro);
            return {
                message: "Product saved.",
                data: pro,
            }
        }catch{
            throw new BadRequestException("Product failed to create");
        }
    }
    async findAll(){
        try{
            return await this.productsRepo.find({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                stock: true,
                category: true,
                isActive: true
            },
                order: {
                    createdAt: "desc",
                }
            });

        }catch{
            throw new BadRequestException("No products found!");
        }
    }

    async findOne(id: number): Promise<object>{
        const pro = await this.productsRepo.findOne({
            where: {
                id: id
            },
        });
        if(pro){
            return {
                message: "product found",
                data: pro,
            }
        } else{
            return {
                message: `Product with id ${id} not found`
            }
        }

    }
    async findByCategory(cat: string): Promise<object>{
        const pro = await this.productsRepo.find({
            where: {
                category: cat
            }
        })
        if(pro){
            return {
                message: "products found",
                data: pro,
            }
        }else{
            return{
                message: "product not found"
            }
        }

    }

    async update(id: number, pro: PartialUpdateProductDto): Promise<object>{
        const product = await this.productsRepo.findOne({
            where: {
                id: id,
            }
        });
        if(product){
            const res = (await this.productsRepo.update(id,pro)).affected;
            if(res!=null && res>0){
                return {
                    message: `Product with id ${id} is updated.`,
                    data: product
                }

            }else{
                return {
                    message: `Product with id ${id} failed to be updated.`,
                }
            }

        }else {
            return {
                message: `Product with id ${id} not found`
            }
        }
    }
    async replace(id: number, pro: UpdateProductDto): Promise<object>{
        const product = await this.productsRepo.findOne({
            where: {
                id: id,
            }
        });
        if(product){
            const res = (await this.productsRepo.update(id,pro)).affected;
            if(res!=null && res>0){
                return {
                    message: `Product with id ${id} is replaced.`,
                    data: product
                }

            }else{
                return {
                    message: `Product with id ${id} failed to be replaced.`,
                }
            }

        }else {
            return {
                message: `Product with id ${id} not found`
            }
        }
    }

    async search(keyword: string): Promise<object>{
        const pro = await this.productsRepo.find({
            where: {
                name: ILike(`%${keyword}`)
            },
        });
        if(pro){

            return {
                message: pro.length > 0 ? "Products found successfully"
                : "No products found",
                count: pro.length,
            data: pro
        }
        }else{
            return {
                message: `Product with id ${keyword} not found`,
            };
        };

    }

    async toggleActive(id: number): Promise<object>{
        const pro = await this.productsRepo.findOne({
            where: {
                id: id
            }
        });
        if(pro){
            pro.isActive = !pro.isActive;
            const updatedPro = await this.productsRepo.save(pro);
            return {
                message: "Product toggled",
                data: updatedPro,
            }
        }else {
        throw new BadRequestException(`Product with id ${id} not found`);
    }

    }
    async remove(id: number): Promise<object>{
        const pro = (await this.productsRepo.delete(id)).affected;
        if(pro!=null && pro>0){
            return {
                message: `Product with id ${id} deleted.`,
                id: id
            }
        }else{
            return {
                message: `Product with id ${id} not found.`
            }
        }

    }

    





    



}
