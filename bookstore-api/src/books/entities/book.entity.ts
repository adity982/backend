import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    publishedDate: Date;

    @Column()
    isbn: string;

    @Column({ nullable: true })
    description?: string;

    @Column()
    price: number;
}