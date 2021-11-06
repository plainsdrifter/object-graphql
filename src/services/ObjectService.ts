import { Service } from 'typedi'
import { ObjectLocked } from '../resolvers/objects/ObjectLocked'
import { ObjectFree } from '../resolvers/objects/ObjectFree'

@Service()
export class ObjectService {
  private locks: Set<number> = new Set<number>()

  public getObject(id: number): ObjectFree | ObjectLocked {
    if (this.locks.has(id)) {
      return ObjectLocked.get()
    }

    this.locks.add(id)
    return ObjectFree.get(id)
  }

  public freeObject(id: number) {
    if (this.locks.has(id)) {
      this.locks.delete(id)
    }
  }
}
