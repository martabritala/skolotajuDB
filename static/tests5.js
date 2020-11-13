class Tests4{
    constructor(id){
        this.konteiners=document.getElementById(id);
        let divForma = document.createElement("div");
        divForma.id="popupforma";
        divForma.appendChild(document.createElement("div"));
        divForma.children[0].classList.add("col-6")
        let forma = document.createElement("form");
        forma.action="./";
        forma.classList.add("form-container","col-6","bg-info");
        forma.method="POST";
        forma.innerHTML+="<h4> Nosaukums, saite, anotācija:</h4><br>";
        let vardaVieta = document.createElement("input");
        vardaVieta.type = "text";
        vardaVieta.name = "vards";
        vardaVieta.placeholder = "Nosaukums";
        forma.appendChild(vardaVieta);
        let uzvardaVieta = document.createElement("input");
        uzvardaVieta.type = "url";
        uzvardaVieta.name = "saite";
        uzvardaVieta.required = true;
        uzvardaVieta.placeholder = "https://piemers.lv";
        forma.appendChild(uzvardaVieta);
        let AnotacijasVieta = document.createElement("textarea");
        AnotacijasVieta.name = "anotacija";
        AnotacijasVieta.rows = "10";
        AnotacijasVieta.cols = "50";
        AnotacijasVieta.placeholder = "Anotācija";
        forma.appendChild(AnotacijasVieta);
        forma.innerHTML+="<br><h4> Izvēlieties tipu:</h4><br>";
        let otraValoda = document.createElement("input");
        otraValoda.type = "radio";
        otraValoda.name = "otraval";
        otraValoda.required = true;
        otraValoda.value = "72";
        otraValoda.id="otraVacu";
        forma.appendChild(otraValoda);
        let labelVacu = document.createElement("label");
        labelVacu.setAttribute("for","otraVacu");
        labelVacu.innerHTML="Video";
        forma.appendChild(labelVacu);
        let otraValodaKr = document.createElement("input");
        otraValodaKr.type = "radio";
        otraValodaKr.name = "otraval";
        otraValodaKr.value = "73";
        otraValodaKr.id="otraKrievu";
        forma.appendChild(otraValodaKr);
        let labelKrievu = document.createElement("label");
        labelKrievu.setAttribute("for","otraKrievu");
        labelKrievu.innerHTML="Teksts";
        forma.appendChild(labelKrievu);
        let divtresaval = document.createElement("div");
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
        papilduInfo.value=rezultats;
        let izveleir = document.createElement("input");
        izveleir.type="hidden";
        izveleir.id="grozainputs";
        izveleir.name = "programma";
        izveleir.value= this.izvelesNr;
        console.log(rezultats);
        // forma.appendChild(pogaNavGatavs);
        forma.appendChild(papilduInfo);
        forma.appendChild(izveleir);
        let stunduskaiti = document.createElement("input");
        stunduskaiti.type="hidden";
        stunduskaiti.id="dazadiskaiti";
        stunduskaiti.name="stunduskaits[]";
        forma.appendChild(stunduskaiti);
        divForma.appendChild(forma);
        this.konteiners.appendChild(divForma);

    }


}

