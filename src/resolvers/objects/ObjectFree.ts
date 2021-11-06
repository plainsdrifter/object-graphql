import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ObjectFree {
  static get(id: number) {
    return new ObjectFree({
      id,
    })
  }

  @Field()
  id!: number

  constructor(data?: ObjectFree) {
    Object.assign(this, data)
  }
}
