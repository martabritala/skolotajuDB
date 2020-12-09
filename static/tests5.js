function ieladejotPievienot(saites){
    for(let objekts=0;objekts<7;objekts++){
        console.log(objekts, "bus")
        objekts.onclick = (evt) => {
            inforadit(objekts);
        }
    }
    console.log(saites)
}

const tabula = ["viens","divi","tris","cetri","pieci","sesi","septini","astoni"];

function inforadit(id){
    console.log(id)
    document.getElementById("infovieta").innerHTML = tabula[id-1]

}



