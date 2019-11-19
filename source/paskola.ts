export default abstract class Paskola {
    paskolosDydis: number;
    terminas: number;
    palukanos: number;

    constructor(paskolosDydis: number, terminas: number, palukanos:number) {
        this.paskolosDydis = paskolosDydis;
        this.terminas = terminas;
        this.palukanos = palukanos;
    }

    skaiciuoti(): void{

    }

}