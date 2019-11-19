import GreitojiPaskola from './greitoji-paskola';

export default class MainGreitoji{
rodytiGreitaPaskola(): void{
  function isvestiReiksme(what: string, where: string, matas: string): void {
        let output: HTMLElement = document.getElementById(where);
        let slider: HTMLElement = document.getElementById(what);

        output.innerText = document.getElementById(what)['value'] + matas;
        this.greitosPaskolosDydis();

        slider.oninput = () => {
            let reiksme = document.getElementById(what)['value'];
            if (reiksme==='0') {
                reiksme=reiksme*1+1;
            }
            output.innerHTML = reiksme + matas;
            document.getElementById('grezultatai').innerHTML='';
            this.greitosPaskolosDydis();
        }
    }

    isvestiReiksme('gpaskola','gpaskolosdydis', ' Eur');
    isvestiReiksme('gterminas','gterminodydis', ' mėn.');
}

greitosPaskolosDydis(): void{
    let suma=parseInt(document.getElementById('gpaskola')['value']);
    let laikas=parseInt(document.getElementById('gterminas')['value']);
    let palukanos=20;
    let paskola = new GreitojiPaskola(suma,laikas,palukanos);
    let menesioImoka=paskola.skaiciuoti();
    if (suma===0) {
        suma=suma+1;
    } 
    document.getElementById('skaiciuoti').onclick = ()=> {
        document.getElementById('grezultatai').innerHTML=`Prašoma suma - ${suma} Eur,
         mėnesio įmoka - ${menesioImoka} Eur, paskolos terminas - ${laikas} mėn.`
    };

}
}
