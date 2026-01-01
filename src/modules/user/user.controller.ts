import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { UserResponse } from './dto/user.dto';
import { USER_CONTROLLER } from './constants';
import * as docs from './docs';
import * as dto from './dto';

@docs.UserControllerDocs()
@Controller(USER_CONTROLLER.basePath)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @docs.CreateUserDocs()
  @Post()
  create(@Body() createUserDto: dto.CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @docs.ListUserDocs()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOkResponse({
    description: 'The user has been successfully retrieved.',
    schema: { $ref: getSchemaPath(UserResponse) },
  })
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.findOne(+id);
  }

  @docs.UpdateUserDocs()
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @docs.DeleteUserDocs()
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.remove(+id);
  }
}
