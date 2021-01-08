import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('comic')

export class entityComic {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: Number;

    @Column('character varying', { nullable: true, unique: true, name: 'ppppp' })
    title: string;

    @Column('varchar')
    description: string;

    @Column('varchar', { name: 'img_url', length: 40 })
    imgeUrl: string;


}