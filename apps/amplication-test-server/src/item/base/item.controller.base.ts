/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ItemService } from "../item.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ItemCreateInput } from "./ItemCreateInput";
import { Item } from "./Item";
import { ItemFindManyArgs } from "./ItemFindManyArgs";
import { ItemWhereUniqueInput } from "./ItemWhereUniqueInput";
import { ItemUpdateInput } from "./ItemUpdateInput";
import { SaleDetailFindManyArgs } from "../../saleDetail/base/SaleDetailFindManyArgs";
import { SaleDetail } from "../../saleDetail/base/SaleDetail";
import { SaleDetailWhereUniqueInput } from "../../saleDetail/base/SaleDetailWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ItemControllerBase {
  constructor(
    protected readonly service: ItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Item })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createItem(@common.Body() data: ItemCreateInput): Promise<Item> {
    return await this.service.createItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        itemImage: true,
        name: true,
        note: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Item] })
  @ApiNestedQuery(ItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async items(@common.Req() request: Request): Promise<Item[]> {
    const args = plainToClass(ItemFindManyArgs, request.query);
    return this.service.items({
      ...args,
      select: {
        createdAt: true,
        id: true,
        itemImage: true,
        name: true,
        note: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async item(
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<Item | null> {
    const result = await this.service.item({
      where: params,
      select: {
        createdAt: true,
        id: true,
        itemImage: true,
        name: true,
        note: true,
        price: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateItem(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() data: ItemUpdateInput
  ): Promise<Item | null> {
    try {
      return await this.service.updateItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          itemImage: true,
          name: true,
          note: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Item })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteItem(
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<Item | null> {
    try {
      return await this.service.deleteItem({
        where: params,
        select: {
          createdAt: true,
          id: true,
          itemImage: true,
          name: true,
          note: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/saleDetails")
  @ApiNestedQuery(SaleDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SaleDetail",
    action: "read",
    possession: "any",
  })
  async findSaleDetails(
    @common.Req() request: Request,
    @common.Param() params: ItemWhereUniqueInput
  ): Promise<SaleDetail[]> {
    const query = plainToClass(SaleDetailFindManyArgs, request.query);
    const results = await this.service.findSaleDetails(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        item: {
          select: {
            id: true,
          },
        },

        quantity: true,

        sale: {
          select: {
            id: true,
          },
        },

        unitPrice: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/saleDetails")
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async connectSaleDetails(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() body: SaleDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleDetails: {
        connect: body,
      },
    };
    await this.service.updateItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/saleDetails")
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async updateSaleDetails(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() body: SaleDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleDetails: {
        set: body,
      },
    };
    await this.service.updateItem({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/saleDetails")
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "update",
    possession: "any",
  })
  async disconnectSaleDetails(
    @common.Param() params: ItemWhereUniqueInput,
    @common.Body() body: SaleDetailWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      saleDetails: {
        disconnect: body,
      },
    };
    await this.service.updateItem({
      where: params,
      data,
      select: { id: true },
    });
  }
}
