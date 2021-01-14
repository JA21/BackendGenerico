import { UserCategory } from "src/modules/UserModule/enums";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')


export class userEntity{
    @PrimaryGeneratedColumn()
    idUser:number;

    @Column('varchar',{unique:true,length:225,nullable:true})
    nameUser:string;

    @Column('varchar',{nullable:true,length:225})
    passwordUser:string;

    @Column({type:'bool',default:true})
    stateUser:boolean;

    @Column({type:'varchar',length:150})
    categoryUser:string;

    @CreateDateColumn({type:'timestamp'})
    createUserDate:Date;
}