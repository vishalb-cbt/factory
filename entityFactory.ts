import { Entity } from "./Entity";
import { OrderEntity } from "./Order";
import { UserEntity } from "./User";

class EntityFactory {
  static createEntity(entityType: string): Entity {
    switch (entityType) {
      case "user":
        return new UserEntity();
      case "order":
        return new OrderEntity();
      default:
        throw new Error(`Unsupported entity type: ${entityType}`);
    }
  }
}

export { EntityFactory };
