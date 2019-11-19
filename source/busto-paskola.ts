import Paskola from './paskola';

export default class BustoPakola extends Paskola {
    alga:number;
    vaikai:number;

    constructor(paskolosDydis: number, terminas: number,palukanos: number, alga:number, vaikai:number) {
        super(paskolosDydis, terminas, palukanos);
        this.alga = alga;
        this.vaikai = vaikai;
    }

    skaiciuoti(): number {
      let paskolosDydis=this.skaiciuotiPaskolosDydi();
        let result = Math.round(paskolosDydis*(1+this.palukanos/100)/(this.terminas*12));
        return result;
    }
    skaiciuotiPaskolosDydi(): number {
        let procentasNuoVaiko=10;
        let procentasIslaidom=40;
        let bendrasProcentas=procentasIslaidom+procentasNuoVaiko*this.vaikai;
        let result = Math.round(this.alga*(1-bendrasProcentas/100)*(this.terminas*12));
        if (result<0) {
            result=0;
        }
        return result;
    }

}