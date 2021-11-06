import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ObjectLocked {
  static get() {
    return new ObjectLocked({
      locked: true,
    })
  }

  @Field()
  locked!: boolean

  constructor(data?: ObjectLocked) {
    Object.assign(this, data)
  }
}
