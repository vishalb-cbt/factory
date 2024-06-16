import { Entity } from "./Entity";
import { EntityFactory } from "./entityFactory";

class CRUDService {
  private entity: Entity;

  constructor(entityType: string) {
    this.entity = EntityFactory.createEntity(entityType);
  }

  async createEntity(data: any): Promise<any> {
    return this.entity.create(data);
  }

  async readEntity(id: string): Promise<any> {
    return this.entity.read(id);
  }

  async updateEntity(id: string, data: any): Promise<any> {
    return this.entity.update(id, data);
  }

  async deleteEntity(id: string): Promise<void> {
    await this.entity.delete(id);
  }
}

export { CRUDService };
