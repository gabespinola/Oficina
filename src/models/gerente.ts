import { FuncionarioBase } from "./funcionarioBase";


export class Gerente extends FuncionarioBase{


    constructor(

        id:number,
        nome: string,
        private equipe: number

    ){
        super(id,nome, "Gerente")
    }

    getDescricao(): string {
        return`${this.nome} gerencia uma equipe de ${this.equipe} pessoas`
    }
}