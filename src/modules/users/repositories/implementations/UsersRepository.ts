import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    console.log("Pushing user...", user);

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const userId = this.users.find((user) => user.id === id);
    return userId;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const userEmail = this.users.find((user) => user.email === email);
    return userEmail;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const user = receivedUser;

    user.admin = true;
    user.updated_at = new Date();
    return user;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
