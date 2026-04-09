import { Funcionario } from "./funcionario";

export class FuncionarioBase implements Funcionario{

    constructor(
        public id:number,
        public nome: string,
        public cargo: string
    
    ){}
    getDescricao(): string {
        return`${this.nome} atua como ${this.cargo}`
    }

}


