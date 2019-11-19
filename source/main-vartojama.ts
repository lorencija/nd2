import VartojamaPaskola from './vartojama-paskola';

function rodytiVartojamaPaskola(): void {

    function isvestiReiksme(what: string, where: string, matas: string): void {
        let output: HTMLElement = document.getElementById(where);
        let slider: HTMLElement = document.getElementById(what);

        output.innerText = document.getElementById(what)['value'] + matas;
        vartojamosPaskolosDydis();

        slider.oninput = () => {
            let reiksme = document.getElementById(what)['value'];
            if (reiksme === '0') {
                reiksme = reiksme * 1 + 1;
            }
            output.innerHTML = reiksme + matas;
            document.getElementById('vrezultatai').innerHTML = '';
            vartojamosPaskolosDydis();
        }
    }

    isvestiReiksme('vpaskola', 'vpaskolosdydis', ' Eur');
    isvestiReiksme('vterminas', 'vterminodydis', ' metai');
}

function vartojamosPaskolosDydis(): void {
    let suma = parseInt(document.getElementById('vpaskola')['value']);
    let laikas = parseInt(document.getElementById('vterminas')['value']);
    if (suma === 0) {
        suma = suma + 1;
    }
    kokiamDaigtui(suma,laikas);
}

function isvestiRezultata(suma: number, menesioImoka: number, laikas: number, palukanos: number):void {
    document.getElementById('skaiciuoti').onclick = () => {
        document.getElementById('vrezultatai').innerHTML = `Prašoma suma - ${suma} Eur,
         mėnesio įmoka - ${menesioImoka} Eur, paskolos terminas - ${laikas} metais, palūkanų norma - 
         ${palukanos}%.`
    };
}

function kokiamDaigtui(suma:number, laikas:number): void{
    let e = (document.getElementById('daigtas')) as HTMLSelectElement;
    let sel = e.selectedIndex;
    let opt = e.options[sel];
    let daigtovardas = (<HTMLOptionElement>opt).value;
    let palukanuNorma = palukanuDydis(daigtovardas);
    let paskola = new VartojamaPaskola(suma, laikas, palukanuNorma, daigtovardas);
    let menesioImoka = paskola.skaiciuoti();
    isvestiRezultata(suma, menesioImoka, laikas, palukanuNorma);

    document.getElementById('daigtas').oninput = () => {
        sel = e.selectedIndex;
        opt = e.options[sel];
        daigtovardas = (<HTMLOptionElement>opt).value;
        palukanuNorma = palukanuDydis(daigtovardas);
        paskola = new VartojamaPaskola(suma, laikas, palukanuNorma, daigtovardas);
        menesioImoka = paskola.skaiciuoti();
        isvestiRezultata(suma, menesioImoka, laikas, palukanuNorma);
    }
}

function palukanuDydis(vardas:string): number {
    let palukanos = 0;
    if (vardas === 'dviratis') {
        palukanos = 20;
    } else if (vardas === 'masina') {
        palukanos = 15;
    } else if (vardas === 'remontas') {
        palukanos = 10;
    } else if (vardas === 'kita') {
        palukanos = 25;
    } 
    return palukanos;
}
rodytiVartojamaPaskola();