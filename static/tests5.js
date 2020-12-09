function ieladejotPievienot(saites){
    for (let objekts in document.getElementsByTagName("img")){
        console.log(objekts, "bus")
        console.log(objekts.id, "pievienot")
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



