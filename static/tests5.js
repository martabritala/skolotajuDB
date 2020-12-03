function ieladejotPievienot(){
    for (let objekts in document.getElementsByTagName("img")){
        objekts.onclick = (evt) => {
            inforadit(objekts.id);
        }
    }
}

const tabula = ["viens","divi","tris","cetri","pieci","sesi","septini","astoni"];

function inforadit(id){
    document.getElementById("infovieta").innerHTML = tabula[int(id)-1]

}



