function ieladejotPievienot(saites){
    for(let objekts=1;objekts<9;objekts++){
        let lieta = document.getElementById('img'+objekts)
        console.log(objekts, "bus")
        lieta.addEventListener('click',function(eve) {
            inforadit(objekts);
        })
    }
    console.log(saites)
}

const tabula = ["<h4>Maksa</h4></br><ul><li>Bezmaksas - viss saturs ir par brīvu</li><li>Daļēji maksas - pamatsaturs ir par brīvu, bet daļa satura/funkcionalitātes - par maksu</li></ul>",
... "<h4>Kurš veido/lieto?</h4></br><ul><li>Lieto gatavu IT resursu - nodarbībā to izmanto</li><li>Veido IT resursu - nodarbībā to veido</li><li>Mācību darbā/-am SK - resurss skolotājam</li><li>Prof. pilnveide SK - resurss skolotājam</li><li>Pirmsskolas SN - resurss  pirmskolas posma skolēnam</li><li>Sākumskolas SN - resurss sākumizglītības posma skolēnam</li><li>Pamatskolas SN - resurss pamatizglītības posma skolēnam</li><li>Vidusskola I SN - resurss vidusskolas pamatkursa skolēnam</li><li>Vidusskola II SN - resurss vidusskolas padziļinātā kursa skolēniem</li><li>Augstskola - resurss studentam</li></ul>",
..."tris",
..."cetri",
..."pieci",
..."sesi",
..."septini",
..."astoni"];

function inforadit(id){
    console.log(id);
    let vieta = document.getElementById("infovieta");
    vieta.innerHTML="";
    let smukumi = document.createElement("div");
    smukumi.classList.add('bg-light');
    smukumi.innerHTML=tabula[id-1];
    vieta.appendChild(smukumi);

}



