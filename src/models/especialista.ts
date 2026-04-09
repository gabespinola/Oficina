import { FuncionarioBase } from "./funcionarioBase";
import { Especialidade } from "./types/Especialidade";

export class Especialista extends FuncionarioBase{

    constructor(

        id:number,
        nome:string,
        private especialidade: Especialidade

   
    
    ){
            super(id, nome, "Especialista")
    }
    
    getDescricao(): string {
        return`${this.nome} é especialista em ${this.especialidade}`
    }
}