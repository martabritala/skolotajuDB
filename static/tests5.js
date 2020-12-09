function ieladejotPievienot(){
    for (let objekts in document.getElementsByTagName("img")){
        console.log(objekts)
        console.log(objekts.id, "pievienot")
        objekts.onclick = (evt) => {
            inforadit(objekts.id);
        }
    }
}

const tabula = ["viens","divi","tris","cetri","pieci","sesi","septini","astoni"];

function inforadit(id){
    console.log(id)
    document.getElementById("infovieta").innerHTML = tabula[Number(id)-1]

}



