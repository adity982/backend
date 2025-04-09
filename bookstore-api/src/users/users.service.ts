import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: UserEntity[] = [];

    create(createUserDto: CreateUserDto): UserEntity {
        const newUser = new UserEntity();
        Object.assign(newUser, createUserDto);
        this.users.push(newUser);
        return newUser;
    }

    findAll(): UserEntity[] {
        return this.users;
    }

    findOne(id: number): UserEntity {
        return this.users.find(user => user.id === id);
    }

    update(id: number, updateUserDto: UpdateUserDto): UserEntity {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex > -1) {
            const updatedUser = { ...this.users[userIndex], ...updateUserDto };
            this.users[userIndex] = updatedUser;
            return updatedUser;
        }
        return null;
    }

    remove(id: number): void {
        this.users = this.users.filter(user => user.id !== id);
    }
}