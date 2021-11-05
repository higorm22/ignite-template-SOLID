import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const user = new User();
    const emailAlereadyExists = this.usersRepository.findByEmail(email);

    if (emailAlereadyExists) {
      throw new Error("Email user already exists!");
    }

    this.usersRepository.create({ email, name });
    return user;
  }
}

export { CreateUserUseCase };
