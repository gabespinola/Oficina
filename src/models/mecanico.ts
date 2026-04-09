import { FuncionarioBase } from "./funcionarioBase";

export class Mecanico extends FuncionarioBase{

    constructor(
        id: number,
        nome: string,
        private anosExperiencia: number

    ){
        super(id, nome, "Mecanico")
    }

        getDescricao(): string {
            return`${this.nome} atua como mecânico a ${this.anosExperiencia} anos`
        }




}