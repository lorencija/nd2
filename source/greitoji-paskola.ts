import Paskola from './paskola';

export default class GreitojiPakola extends Paskola{

skaiciuoti(): number {
    if (this.paskolosDydis===0){
        this.paskolosDydis=this.paskolosDydis+1;
    }
let result=Math.round(this.paskolosDydis*(1+this.palukanos/100)/this.terminas);
return result;
}
}