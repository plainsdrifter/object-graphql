import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { ObjectFree } from './ObjectFree'
import { ObjectUnion } from './ObjectUnion'
import { ObjectService } from '../../services/ObjectService'
import { Service } from 'typedi'

@Service()
@Resolver(() => ObjectFree)
export class ObjectsResolver {
  constructor(private readonly objectService: ObjectService) {}

  @Query(() => ObjectUnion.ObjectUnion)
  async object(@Arg('id') id: number) {
    return this.objectService.getObject(id)
  }

  @Mutation(() => Boolean)
  async freeObject(@Arg('id') id: number) {
    this.objectService.freeObject(id)
    return true
  }
}
