class Gatavs {
    constructor(){
        this.tresa = 70;
        this.otra = 0;
        this.vards = "NULL";
        this.uzvards = "NULL";
        this.programma = 0;
        this.datori="NULL";
        this.exNr = 0;
        this.padz1 = "NULL";
        this.padz2 = "NULL";
        this.padz3 = "NULL";
        this.krv="NULL";
        this.papang="NULL";
        this.debates="NULL";
        this.robo="NULL";
        this.anglit="NULL";
        this.filoz="NULL";
        this.publ="NULL";
        this.psih="NULL";
    }
    ielikt(masivs, tresa, otra, vards, uzvards, programma, numurs){
        this.otra=otra;
        this.vards = vards;
        this.uzvards = uzvards;
        if (programma == 4){
            this.programma=20;
        }
        if(programma == 3 || programma == 1){
            this.programma=programma*10;
        }
        this.exNr = numurs;
        if(otra=='72'){
            document.getElementById("rezotra73").style.display="none"
        } else {
            document.getElementById("rezotra72").style.display="none"
        }
        for (let i=0;i<masivs.length;i++){
            if(masivs[i]=='19'){
                this.tresa=tresa;
                if(tresa=='72'){
                    document.getElementById("reztresa71").style.display="none"
                } else {
                    document.getElementById("reztresa72").style.display="none"
                }
            }else if(masivs[i]=='-19'){
                document.getElementById("reztresa71").style.display="none";
                document.getElementById("reztresa72").style.display="none";
            }else if(masivs[i]<0 && masivs[i]>-34){
                if(masivs[i]=='-25'){
                    document.getElementById("mat25").innerHTML=3;
                }
                if(masivs[i]=='-22'){
                    this.datori==-22;
                }
                if(masivs[i]=='-23' && this.datori==-22){
                    this.datori==0;
                }
                document.getElementById("rez"+(0-masivs[i])).style.display="none";
            }else if (masivs[i]>0){
                if(programma==2 && masivs[i]<17){
                    this.programma=masivs[i]-2;
                }
                if (masivs[i]=='25'){
                    document.getElementById("mat25").innerHTML="";
                }
                if (masivs[i]=='22' || masivs[i]=='23'){
                    this.datori=masivs[i]-21;
                    console.log(this.datori);
                }
                if (masivs[i]>=25 && masivs[i]<=32){
                    document.getElementById("rez"+masivs[i]).style.display="";
                    if(this.padz1=="NULL"){
                        this.padz1=masivs[i]-24;
                    } else if (this.padz2=="NULL"){
                        this.padz2=masivs[i]-24;
                    } else if (this.padz3=="NULL"){
                        this.padz3=masivs[i]-24;
                    }
                }
                if (masivs[i]>33 || masivs[i]<-33){
                    switch (masivs[i]){
                        case '3410':
                            document.getElementById('rezspec34').style.display="";
                            document.getElementById('spec3410').innerHTML=2;
                            this.debates=10;
                            break;
                        case '3411':
                            document.getElementById('rezspec34').style.display="";
                            document.getElementById('spec3411').innerHTML=2;
                            this.debates=11;
                            break;
                        case '3412':
                            document.getElementById('rezspec34').style.display="";
                            document.getElementById('spec3412').innerHTML=2;
                            this.debates=12;
                            break;
                        case '35':
                            document.getElementById('rezspec35').style.display="";
                            this.anglit=1;
                            break;
                        case '36':
                            document.getElementById('rezspec36').style.display="";
                            this.filoz=1;
                            break;
                        case '3710':
                            document.getElementById('rezspec37').style.display="";
                            document.getElementById('spec3710').innerHTML=2;
                            this.publ=10;
                            break;
                        case '3711':
                            document.getElementById('rezspec37').style.display="";
                            document.getElementById('spec3711').innerHTML=2;
                            this.publ=11;
                            break;
                        case '3712':
                            document.getElementById('rezspec37').style.display="";
                            document.getElementById('spec3712').innerHTML=2;
                            this.publ=12;
                            break;
                        case '38':
                            document.getElementById('rezspec38').style.display="";
                            this.papang=1;
                            break;
                        case '39':
                            document.getElementById('rezspec39').style.display="";
                            this.psih=1;
                            break;
                        case '4010':
                            document.getElementById('rezspec40').style.display="";
                            document.getElementById('spec4010').innerHTML=2;
                            this.robo=10;
                            break;
                        case '4011':
                            document.getElementById('rezspec40').style.display="";
                            document.getElementById('spec4011').innerHTML=2;
                            this.robo=11;
                            break;
                        case '4012':
                            document.getElementById('rezspec40').style.display="";
                            document.getElementById('spec4012').innerHTML=2;
                            this.robo=12;
                            break;
                        case '4110':
                            document.getElementById('rezspec41').style.display="";
                            document.getElementById('spec4110').innerHTML=4;
                            this.krv=10;
                            break;
                        case '4111':
                            document.getElementById('rezspec41').style.display="";
                            document.getElementById('spec4111').innerHTML=4;
                            this.krv=11;
                            break;
                        case '4112':
                            document.getElementById('rezspec41').style.display="";
                            document.getElementById('spec4112').innerHTML=4;
                            this.krv=12;
                            break;
                    }
                }
            } 
            console.log(masivs[i])
        }
    }
    nosutitDatus(){
        let data = {
            vards: this.vards, 
            uzvards: this.uzvards, 
            programma: this.programma, 
            otraval: this.otra, 
            tresaval: this.tresa, 
            exnumurs: this.exNr,
            datori: this.datori,
            padz1:this.padz1,
            padz2:this.padz2,
            padz3:this.padz3,
            debates:this.debates,
            anglit:this.anglit,
            filoz:this.filoz,
            publ:this.publ,
            papang:this.papang,
            psih:this.psih,
            robo:this.robo,
            krv:this.krv
        };
        fetch("/suutiit", {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }).then(res => {
        console.log("Request complete! response:", res);
        });
        console.log("suta datus")
    }
}

let gatavais = new Gatavs();

function palaist(jsonmasivs, tresa, otra, vards, uzvards, programma, exNumurs){
    console.log(jsonmasivs, "palaist")
    let masivs = jsonmasivs[0].split(",")
    gatavais.ielikt(masivs, tresa, otra, vards, uzvards, programma, exNumurs)
}


function iesniegt(){
    gatavais.nosutitDatus();
    window.alert("Iesniegums iesniegts veiksmīgi. Paldies.");
    window.location.replace("/beigas")
    console.log("iesniegt")
}