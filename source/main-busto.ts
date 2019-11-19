import BustoPaskola from './busto-paskola';

function rodytiBustoPaskola(): void{

    function isvestiReiksme(what: string, where: string, matas: string): void {
        let output: HTMLElement = document.getElementById(where);
        let slider: HTMLElement = document.getElementById(what);

        output.innerText = document.getElementById(what)['value'] + matas;
        bustoPaskolosDydis();

        slider.oninput = () => {
            let reiksme = document.getElementById(what)['value'];
            if (reiksme === '0') {
                if (what==='bvaikai'){
                    reiksme=0;
                } else {
                    reiksme = reiksme * 1 + 1;
                }  
            }
            output.innerHTML = reiksme + matas;
            document.getElementById('brezultatai').innerHTML = '';
            bustoPaskolosDydis();
        }
    }

    isvestiReiksme('bpaskola', 'bpaskolosdydis', ' Eur');
    isvestiReiksme('bterminas', 'bterminodydis', ' metai');
    isvestiReiksme('balga', 'balgosdydis', ' Eur');
    isvestiReiksme('bvaikai', 'bvaikuskaicius', ' ');
}

function bustoPaskolosDydis(): void{
    let suma=parseInt(document.getElementById('bpaskola')['value']);
    let laikas=parseInt(document.getElementById('bterminas')['value']);
    let alga=parseInt(document.getElementById('balga')['value']);
    let vaikai=parseInt(document.getElementById('bvaikai')['value']);
    let palukanos=2;
    let paskola = new BustoPaskola(suma,laikas,palukanos,alga,vaikai);
    let menesioImoka=paskola.skaiciuoti();
    if (suma===0) {
        suma=suma+1;
    } 
    let paskolosDydis: number = paskola.skaiciuotiPaskolosDydi();
 isvestiRezultata(suma,menesioImoka,laikas,paskolosDydis,vaikai);
}
function isvestiRezultata(suma: number, menesioImoka: number, laikas: number, paskolosDydis: number, vaikai:number):void {
    document.getElementById('skaiciuoti').onclick = () => {
        document.getElementById('brezultatai').innerHTML = `Prašoma suma - ${suma} Eur,
         mėnesio įmoka - ${menesioImoka} Eur, paskolos terminas - ${laikas} metais, 
         vaikų skaičius - ${vaikai}, maksimali galima paskola - ${paskolosDydis}Eur.`
    };
}

rodytiBustoPaskola();
