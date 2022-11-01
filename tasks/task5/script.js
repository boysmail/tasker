function run(num){
    for (let index = 1; index <= num; index++) {    
        var elem = document.createElement("img");    
        var a = Number(prompt("Сторона 1"))
        var b = Number(prompt("Сторона 2"))
        var c = Number(prompt("Сторона 3"))
        var doc = document.getElementById("result")
        
        doc.innerText += "Треугольник " + index + "\n"
        if ((a+b>c) && (b+c>a) && (a+c>b)){
            doc.innerText += "Треугольник существует \n"
        }
        else {
            doc.innerText += "Треугольник не существует \n"
            continue
        }
    

    
        if ((a=b) && (b=c)){
            doc.innerText += "Треугольник равносторонний \n"
            doc.appendChild(elem);
            elem.id = "image" + index;
            elem.src = "images/e.png"
            continue
        }
        else{
            doc.innerText += "Треугольник не равносторонний \n"
        }

        if ((a=b) || (b=c) || (c=a)){
            doc.innerText += "Треугольник равнобедренный \n"
            doc.appendChild(elem);
            elem.id = "image" + index;
            elem.src = "images/eq.png"
            
        }
        else{
            doc.innerText += "Треугольник не равнобедренный \n"
        }

    }
}