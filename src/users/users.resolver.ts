import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.input';

@Resolver(() => CreateUserDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [CreateUserDto], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  
}
