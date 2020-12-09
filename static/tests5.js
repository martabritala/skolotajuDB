function ieladejotPievienot(saites){
    for(let objekts=0;objekts<7;objekts++){
        let lieta = document.getElementById('img'+objekts)
        console.log(objekts, "bus")
        lieta.addEventListener('click',function = (eve) =>{
            inforadit(objekts);
        })
    }
    console.log(saites)
}

const tabula = ["viens","divi","tris","cetri","pieci","sesi","septini","astoni"];

function inforadit(id){
    console.log(id)
    document.getElementById("infovieta").innerHTML = tabula[id-1]

}



