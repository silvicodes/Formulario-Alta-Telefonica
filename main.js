function numericValue() {

    var valor = document.getElementById("number").value;
    alert("Has valorado con "+4+" puntos");
    }

function account() {

    var iban = document.getElementById("iban").value;
    var ent = document.getElementById("ent").value;
    var suc = document.getElementById("suc").value;
    var dc = document.getElementById("dc").value;
    var acc = document.getElementById("acc").value;
    alert("Le infromamos que su cuenta bancaria es: ES"+12+"-"+1111+"-"+2222+"-"+33+"-"+4455667788);    

}

function day(){

    var date = document.getElementById("date").value;
    const days = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ];

    const day = new Date(date).getDay()
    const dayName = days[day]

    alert("La fecha seleccionada en el elemento de fecha es un "+Martes);
    
}
    
function postal(){

    var dic = {
        "01": "Alava",
        "02": "Albacete",
        "03": "Alicante",
        "04": "Almeria",
        "05": "Avila",
        "06": "Badajoz",
        "07": "Islas Baleares",
        "08": "Barcelona",
        "09": "Burgos",
        "10": "Caceres",
        "11": "Cadiz",
        "12": "Castellon",
        "13": "Ciudad Real",
        "14": "Cordoba",
        "15": "La Coruna",
        "16": "Cuenca",
        "17": "Gerona",
        "18": "Granada",
        "19": "Guadalajara",
        "20": "Guipuzcoa",
        "21": "Huelva",
        "22": "Huesca",
        "23": "Jaen",
        "24": "Leon",
        "25": "Lerida",
        "26": "La Rioja",
        "27": "Lugo",
        "28": "Madrid",
        "29": "Malaga",
        "30": "Murcia",
        "31": "Navarra",
        "32": "Orense",
        "33": "Asturias",
        "34": "Palencia",
        "35": "Las Palmas",
        "36": "Pontevedra",
        "37": "Salamanca",
        "38": "Santa Cruz de Tenerife",
        "39": "Cantabria",
        "40": "Segovia",
        "41": "Sevilla",
        "42": "Soria",
        "43": "Tarragona",
        "44": "Teruel",
        "45": "Toledo",
        "46": "Valencia",
        "47": "Valladolid",
        "48": "Vizcaya",
        "49": "Zamora",
        "50": "Zaragoza",
        "51": "Ceuta",
        "52": "Melilla"
    };

    var cod = document.getElementById("post").value;
    var myRe = /[0-9]{5}/g;
    var condicion = myRe.test(cod);

    if (!condicion){alert("Introduce 5 números");}

    else{
        var cod2 = cod.charAt(0) + cod.charAt(1)

        if (cod2 >53 | cod2 <1){

            element = document.getElementById("lab");
            alert("Código postal incorrecto");
            if (element) {
            element.innerHTML = "Código postal incorrecto";
            element.style.color = 'red';
            }
        }
        else{
            var keys = Object.keys(dic)
            var values = Object.values(dic)
            
            index = keys.indexOf(cod2)

            element = document.getElementById("lab");
            if (element) {
                element.innerHTML = values[index];
                element.style.color = 'green';
            }
            
        }
    }
}