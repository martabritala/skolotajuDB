function ieladejotPievienot(){
    for (let objekts in document.getElementsByTagName("img")){
        objekts.onclick = (evt) => {
            console.log(objekts)
            console.log(objekts.id, "pievienot")
            inforadit(objekts.id);
        }
    }
}

const tabula = ["viens","divi","tris","cetri","pieci","sesi","septini","astoni"];

function inforadit(id){
    console.log(id)
    document.getElementById("infovieta").innerHTML = tabula[Number(id)-1]

}



