ieladejotPievienot(){
    for (let objekts in document.getElementsByTagName("img")){
        objekts.onclick() = (evt) => {
            inforadit(objekts.id)
        }
    }
}

const tabula = ["viens","divi","tris","cetri","pieci","sesi","septini","astoni"]

inforadit(id){
    document.getElementById("infovieta").innerHTML = tabula[id-1]

}



