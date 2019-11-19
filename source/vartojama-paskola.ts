import Paskola from './paskola';

export default class VartojamaPakola extends Paskola {
    paskolosobjektas:string;

    constructor(paskolosDydis: number, terminas: number,palukanos: number, paskolosobjektas: string) {
        super(paskolosDydis, terminas, palukanos);
        this.paskolosobjektas = paskolosobjektas;
    }

    skaiciuoti(): number {
        if (this.paskolosDydis === 0) {
            this.paskolosDydis = this.paskolosDydis + 1;
        }
        let result = Math.round(this.paskolosDydis*(1+this.palukanos/100)/(this.terminas*12));
        return result;
    }

}