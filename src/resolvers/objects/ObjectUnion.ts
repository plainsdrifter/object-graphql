import { createUnionType } from 'type-graphql'
import { ObjectLocked } from './ObjectLocked'
import { ObjectFree } from './ObjectFree'

export class ObjectUnion {
  static ObjectUnion = createUnionType({
    name: 'ObjectUnion',
    types: () => [ObjectFree, ObjectLocked],
  })
}
