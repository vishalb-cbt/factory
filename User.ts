import { Entity } from "./Entity";

interface User {
  id: string;
  name: string;
  email: string;
}

class UserEntity implements Entity {
  private users: User[] = [];

  async create(data: User): Promise<User> {
    const newUser = { ...data, id: `${Date.now()}` };
    this.users.push(newUser);
    return newUser;
  }

  async read(id: string): Promise<User> {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new Error(`User not found with ID: ${id}`);
    }
    return user;
  }

  async update(id: string, data: User): Promise<User> {
    let updatedUser: User | null = null;
    this.users = this.users.map((user) => {
      if (user.id === id) {
        updatedUser = { ...user, ...data };
        return updatedUser;
      }
      return user;
    });
    if (!updatedUser) {
      throw new Error(`User not found with ID: ${id}`);
    }
    return updatedUser;
  }

  async delete(id: string): Promise<void> {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== id);
    if (this.users.length === initialLength) {
      throw new Error(`User not found with ID: ${id}`);
    }
  }
}

export { UserEntity };
