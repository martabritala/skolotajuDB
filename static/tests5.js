function ieladejotPievienot(saites){
    for(let objekts=1;objekts<9;objekts++){
        let lieta = document.getElementById('img'+objekts)
        console.log(objekts, "bus")
        lieta.addEventListener('click',function(eve) {
            inforadit(objekts);
        })
    }
    console.log(izlaseNoSaitem(saites,'www'))
    // oninput!!!
}

function izlaseNoSaitem(saites,teksts){
    let rezultats = saites.filter(saite => saite.includes(teksts));
    return rezultats
}

const tabula = ["<h4>Maksa</h4></br><ul><li>Bezmaksas - viss saturs ir par brīvu</li><li>Daļēji maksas - pamatsaturs ir par brīvu, bet daļa satura/funkcionalitātes - par maksu</li></ul>",
 "<h4>Kurš veido/lieto?</h4></br><ul><li>Lieto gatavu IT resursu - nodarbībā to izmanto</li><li>Veido IT resursu - nodarbībā to veido</li><li>Mācību darbā/-am SK - resurss skolotājam</li><li>Prof. pilnveide SK - resurss skolotājam</li><li>Pirmsskolas SN - resurss  pirmskolas posma skolēnam</li><li>Sākumskolas SN - resurss sākumizglītības posma skolēnam</li><li>Pamatskolas SN - resurss pamatizglītības posma skolēnam</li><li>Vidusskola I SN - resurss vidusskolas pamatkursa skolēnam</li><li>Vidusskola II SN - resurss vidusskolas padziļinātā kursa skolēniem</li><li>Augstskola - resurss studentam</li></ul>",
"<h4>Saturs</h4></br><ul><li>Konkrēts mācību kurss <i>(Ķīmija, Bioloģija, Fizika, Ģeogrāfija, Tehnoloģijas, Matemātika, IT)</i></li><li>Dabaszinības - integrētais dabaszinātņu kurss</li><li> Dabaszinātnes - vispārīgs resurss, noderīgs daudzos mācību kursos</li><li>Mācību progr. - dota un analizēta mācību programma vai to modulis</li><li>Nodarbību plāns - dots nodarbības plāns</li><li>Metodiskais materiāls - analizēta kādas mācību stratēģijas (metodikas) izmantošana</li></ul>",
"<h4>Resursa veids</h4></br><div class='row'><div class='col'><ul><li>Zinātniskais raksts;</li><li>Uzziņām - noder informācijas atrašanai;</li><li>e-bibliotēkas - plašs resursu klāsts;</li><li>R teksts - html un cita veida teksta resurss, e-grāmata;</li><li>R grafika - vizuālā informācija: diagramma, infografika, datorprezentācija;</li><li>R skaņa - audioresurss, podkasts;</li><li> R video - arī animācija;</li><li>Virtuālā ekskursija - arī virtuālie muzeji;</li><li>Demonstrējums;</li><li>Laboratorijas darbs;</li><li>Datorizēts eksperiments - izmanto sensorus u.c. digitālās ierīces</li></ul></div><div class='col'><ul><li>Modelēšana</li><li>Simulācija - arī virtuālā laboratorija;</li><li>Spēle;</li><li>Projektu darbs;</li><li>Virtuālā tāfele;</li><li>e-portfolio - noder resursu apkopošanai, darbam ar tiem;</li><li>Jēdzienu kartes - arī domu kartes;</li><li>Kartes - arī plāni, ģeogrāfijā, astronomijā</li><li>Pamācības - teksts, video veidā;</li><li> Interaktīvs materiāls; </li><li>Uzdevums - arī tests klasē, pārbaudei;</li><li>Mācību vide</li></ul></div></div>",
"<h4>Kāpēc lieto?</h4>",
"sesi",
"septini",
"astoni"];

function inforadit(id){
    console.log(id);
    let vieta = document.getElementById("infovieta");
    vieta.innerHTML="";
    let smukumi = document.createElement("div");
    smukumi.classList.add('bg-light');
    smukumi.innerHTML=tabula[id-1];
    vieta.appendChild(smukumi);
}



