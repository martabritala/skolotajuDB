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

const tabula = ["<h4>Maksa</h4></br><ul><li>Bezmaksas - viss saturs ir par brīvu</li><li>Daļēji maksas - pamatsaturs ir par brīvu, bet daļa satura/funkcionalitātes - par maksu</li></ul>","divi","tris","cetri","pieci","sesi","septini","astoni"];

function inforadit(id){
    console.log(id);
    let vieta = document.getElementById("infovieta");
    vieta.innerHTML="";
    let smukumi = document.createElement("div");
    smukumi.classList.add('bg-info');
    smukumi.innerHTML=tabula[id-1];
    vieta.appendChild(smukumi);

}



