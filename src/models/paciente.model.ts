import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Paciente {
    constructor(
        public id: number,
        public nome: string,
        public sexo: string,
        public estadocivil: string,
        public email: string,
        public endereco: string,
        public nascimento: Date,
        public profissao: string,
        public telefone: string,
        public peso: number,
        public altura: number,
        public queixa: string,
        public doencaatual: string,
        public doencapre: string,
        public doencaassoc: string,
        public historia: string,
        public habitos: string,
        public medicacoes: string,
        public estado: string,
        public pa: number,
        public fc: number,
        public fr: number,
        public sp: number,
        public observacao: string,
    ) {}
}

@Injectable({
    providedIn: 'root'
})
export class PacienteAdapter implements Adapter<Paciente> {
    adapt(item: any): Paciente {
        return new Paciente(item.id, item.nome,item.sexo,
            item.estadocivil, item.email, item.endereco, new Date(item.nascimento),
            item.profissao, item.telefone, item.peso, item.altura, item.queixa, 
            item.doencaatual, item.doencapre, item.doencaassoc, item.historia,
            item.habitos, item.medicacoes, item.estadom, item.pa, item.fc, item.fr,
            item.sp, item.observacao );
    }
}