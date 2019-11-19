import GreitojiPaskola from './greitoji-paskola';
import VartojamaPaskola from './vartojama-paskola';
import BustoPaskola from './busto-paskola';
import Vartojama from './main-vartojama';
import Greitoji from './main-gretoji';


// let paskola = document.getElementById('paskolos').getAttribute('value');
// if (paskola==='greitoji'){
//     let vykdyti = new Vartojama();
//     vykdyti.rodytiVartojamaPaskola();
// } else {console.log('neveikia');}

// =========================================================

// function rodytiGreitaPaskola(): void{

//     function isvestiReiksme(what: string, where: string, matas: string): void {
//         let output: HTMLElement = document.getElementById(where);
//         let slider: HTMLElement = document.getElementById(what);

//         output.innerText = document.getElementById(what)['value'] + matas;
//         greitosPaskolosDydis();

//         slider.oninput = () => {
//             let reiksme = document.getElementById(what)['value'];
//             if (reiksme==='0') {
//                 reiksme=reiksme*1+1;
//             }
//             output.innerHTML = reiksme + matas;
//             document.getElementById('grezultatai').innerHTML='';
//             greitosPaskolosDydis();
//         }
//     }

//     isvestiReiksme('gpaskola','gpaskolosdydis', ' Eur');
//     isvestiReiksme('gterminas','gterminodydis', ' mėn.');
// }

// function greitosPaskolosDydis(): void{
//     let suma=parseInt(document.getElementById('gpaskola')['value']);
//     let laikas=parseInt(document.getElementById('gterminas')['value']);
//     let palukanos=20;
//     let paskola = new GreitojiPaskola(suma,laikas,palukanos);
//     let menesioImoka=paskola.skaiciuoti();
//     if (suma===0) {
//         suma=suma+1;
//     } 
//     document.getElementById('skaiciuoti').onclick = ()=> {
//         document.getElementById('grezultatai').innerHTML=`Prašoma suma - ${suma} Eur,
//          mėnesio įmoka - ${menesioImoka} Eur, paskolos terminas - ${laikas} mėn.`
//     };

// }

// rodytiGreitaPaskola();
//====================================================================================

// function rodytiVartojamaPaskola(): void {

//     function isvestiReiksme(what: string, where: string, matas: string): void {
//         let output: HTMLElement = document.getElementById(where);
//         let slider: HTMLElement = document.getElementById(what);

//         output.innerText = document.getElementById(what)['value'] + matas;
//         vartojamosPaskolosDydis();

//         slider.oninput = () => {
//             let reiksme = document.getElementById(what)['value'];
//             if (reiksme === '0') {
//                 reiksme = reiksme * 1 + 1;
//             }
//             output.innerHTML = reiksme + matas;
//             document.getElementById('vrezultatai').innerHTML = '';
//             vartojamosPaskolosDydis();
//         }
//     }

//     isvestiReiksme('vpaskola', 'vpaskolosdydis', ' Eur');
//     isvestiReiksme('vterminas', 'vterminodydis', ' metai');
// }

// function vartojamosPaskolosDydis(): void {
//     let suma = parseInt(document.getElementById('vpaskola')['value']);
//     let laikas = parseInt(document.getElementById('vterminas')['value']);
//     if (suma === 0) {
//         suma = suma + 1;
//     }
//     kokiamDaigtui(suma,laikas);
// }

// function isvestiRezultata(suma: number, menesioImoka: number, laikas: number, palukanos: number):void {
//     document.getElementById('skaiciuoti').onclick = () => {
//         document.getElementById('vrezultatai').innerHTML = `Prašoma suma - ${suma} Eur,
//          mėnesio įmoka - ${menesioImoka} Eur, paskolos terminas - ${laikas} metais, palūkanų norma - 
//          ${palukanos}%.`
//     };
// }

// function kokiamDaigtui(suma:number, laikas:number): void{
//     let e = (document.getElementById('daigtas')) as HTMLSelectElement;
//     let sel = e.selectedIndex;
//     let opt = e.options[sel];
//     let daigtovardas = (<HTMLOptionElement>opt).value;
//     let palukanuNorma = palukanuDydis(daigtovardas);
//     let paskola = new VartojamaPaskola(suma, laikas, palukanuNorma, daigtovardas);
//     let menesioImoka = paskola.skaiciuoti();
//     isvestiRezultata(suma, menesioImoka, laikas, palukanuNorma);

//     document.getElementById('daigtas').oninput = () => {
//         sel = e.selectedIndex;
//         opt = e.options[sel];
//         daigtovardas = (<HTMLOptionElement>opt).value;
//         palukanuNorma = palukanuDydis(daigtovardas);
//         paskola = new VartojamaPaskola(suma, laikas, palukanuNorma, daigtovardas);
//         menesioImoka = paskola.skaiciuoti();
//         isvestiRezultata(suma, menesioImoka, laikas, palukanuNorma);
//     }
// }

// function palukanuDydis(vardas:string): number {
//     let palukanos = 0;
//     if (vardas === 'dviratis') {
//         palukanos = 20;
//     } else if (vardas === 'masina') {
//         palukanos = 15;
//     } else if (vardas === 'remontas') {
//         palukanos = 10;
//     } else if (vardas === 'kita') {
//         palukanos = 25;
//     } 
//     return palukanos;
// }
// rodytiVartojamaPaskola();

// =======================================================
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
