class Tests4{
    constructor(id){
        this.konteiners=document.getElementById(id);
        let divForma = document.createElement("div");
        divForma.id="popupforma";
        divForma.classList.add("fixed-bottom","row");
        divForma.appendChild(document.createElement("div"));
        divForma.children[0].classList.add("col-6")
        let forma = document.createElement("form");
        forma.action="./gatavs";
        forma.classList.add("form-container","col-6","bg-info");
        forma.method="POST";
        forma.innerHTML+="<h4> Vārds, Uzvārds:</h4><br>";
        let vardaVieta = document.createElement("input");
        vardaVieta.type = "text";
        vardaVieta.name = "vards";
        vardaVieta.required = true;
        vardaVieta.placeholder = "Vārds";
        forma.appendChild(vardaVieta);
        let uzvardaVieta = document.createElement("input");
        uzvardaVieta.type = "text";
        uzvardaVieta.name = "uzvards";
        uzvardaVieta.required = true;
        uzvardaVieta.placeholder = "Uzvārds";
        forma.appendChild(uzvardaVieta);
        forma.innerHTML+="<br><h4>Kombinētā iestājeksāmena kods (tikai cipari):</h4>";
        let numuraVieta = document.createElement("input");
        numuraVieta.type = "number";
        numuraVieta.name = "ExNr";
        numuraVieta.required = true;
        forma.appendChild(numuraVieta);
        forma.innerHTML+="<br><h4> Izvēlieties otro svešvalodu:</h4><br>";
        let otraValoda = document.createElement("input");
        otraValoda.type = "radio";
        otraValoda.name = "otraval";
        otraValoda.required = true;
        otraValoda.value = "72";
        otraValoda.id="otraVacu";
        forma.appendChild(otraValoda);
        let labelVacu = document.createElement("label");
        labelVacu.setAttribute("for","otraVacu");
        labelVacu.innerHTML="Vācu valoda";
        forma.appendChild(labelVacu);
        let otraValodaKr = document.createElement("input");
        otraValodaKr.type = "radio";
        otraValodaKr.name = "otraval";
        otraValodaKr.value = "73";
        otraValodaKr.id="otraKrievu";
        forma.appendChild(otraValodaKr);
        let labelKrievu = document.createElement("label");
        labelKrievu.setAttribute("for","otraKrievu");
        labelKrievu.innerHTML="Krievu valoda";
        forma.appendChild(labelKrievu);
        let divtresaval = document.createElement("div");
        if (document.getElementById("izvele19").selectedIndex==1){
            divtresaval.id = "tresavaloda";
            divtresaval.innerHTML="<h4> Izvēlieties trešo svešvalodu:</h4><br>";
            let tresaValoda = document.createElement("input");
            tresaValoda.type = "radio";
            tresaValoda.name = "tresaval";
            tresaValoda.required = true;
            tresaValoda.value = "71";
            tresaValoda.id = "tresaFrancu";
            divtresaval.appendChild(tresaValoda);
            let labelFrancu3 = document.createElement("label");
            labelFrancu3.setAttribute("for","tresaFrancu");
            labelFrancu3.innerHTML="Franču valoda";
            divtresaval.appendChild(labelFrancu3);
            let tresaValodaV = document.createElement("input");
            tresaValodaV.type = "radio";
            tresaValodaV.name = "tresaval";
            tresaValodaV.value = "72";
            tresaValodaV.id = "tresaVacu";
            divtresaval.appendChild(tresaValodaV);
            let labelVacu3 = document.createElement("label");
            labelVacu3.setAttribute("for","tresaVacu");
            labelVacu3.innerHTML="Vācu valoda";
            divtresaval.appendChild(labelVacu3);
        } else{
            let tresaValoda = document.createElement("input");
            tresaValoda.type="hidden";
            tresaValoda.name="tresaval";
            tresaValoda.value = "72"; 
            divtresaval.appendChild(tresaValoda);
        }
        forma.appendChild(divtresaval);
        let pogaGatavs = document.createElement("input");
        pogaGatavs.type = "submit";
        pogaGatavs.value = "Iesniegt izvēli";
        pogaGatavs.classList.add("btn","btn-success");
        forma.appendChild(pogaGatavs);
        let pogaNavGatavs = document.createElement("button");
        pogaNavGatavs.onclick = () => this.dzestFormu();
        pogaNavGatavs.classList.add("btn","btn-danger");
        pogaNavGatavs.innerHTML="Atgriezties pie izvēles"; 
        let papilduInfo = document.createElement("input");
        papilduInfo.type="hidden";
        papilduInfo.id="masivs";
        papilduInfo.name="izvele[]";
        let rezultats=[];
        for (let i=13; i<42; i++){
            if(i==34||i==37||i==40||i==41){
                rezultats.push(i*100+document.getElementById("izvele"+i).selectedIndex+9)
            }
            if(document.getElementById("izvele"+i)&&document.getElementById("izvele"+i).selectedIndex==1){
                rezultats.push(i);
            }
            else if (document.getElementById("izvele"+i)&&document.getElementById("izvele"+i).selectedIndex==2){
                rezultats.push(0-i);
            };
        };
        papilduInfo.value=rezultats;
        let izveleir = document.createElement("input");
        izveleir.type="hidden";
        izveleir.id="grozainputs";
        izveleir.name = "programma";
        izveleir.value= this.izvelesNr;
        console.log(rezultats);
        forma.appendChild(pogaNavGatavs);
        forma.appendChild(papilduInfo);
        forma.appendChild(izveleir);
        let stunduskaiti = document.createElement("input");
        stunduskaiti.type="hidden";
        stunduskaiti.id="dazadiskaiti";
        stunduskaiti.name="stunduskaits[]";
        stunduskaiti.value=[this.stundas10,this.stundas11,this.stundas12];
        forma.appendChild(stunduskaiti);
        divForma.appendChild(forma);
        document.body.appendChild(divForma);

    }


}

