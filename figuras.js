pi=Math.PI;
//funciones de cuadrado----------------------------------------------------------
function CalculoPerimetroCuadrado(lado){
    return lado*4;
}
function CalculoAreaCuadrado(lado){
    return lado*lado;
}
//-------------------------------------------------------------------
//funciones de circulo 
function CalculoPerimetroCirculo(radio){
    const diam = CalculoDiametro(radio);
    return diam*pi;
}
function CalculoDiametro(radio){
    return radio*2;
}
function CalculoAreaCirculo(radio){
    return radio*pi;
}
//-----------------------------------------------------------------
//funciones del triangulo 
function valid(lado1,lado2,base){
    if(lado1===lado2 && base!==lado1){
        return 1;
    }
    else{
        return 0;
    } 
}
function CalculoPerimetroTriangulo(lado1,lado2,base){
    return (lado1*1)+(lado2*1)+(base*1);
}
function CalculoAreaTriangulo(lado2,base){
    const lado= base/2;
    const altura=Math.sqrt((lado2*lado2)-(lado*lado));
    return (base*altura)/2;
}

//aqui interactuamos con el html *******************************************************
//calculo del cuadrado
function PerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = CalculoPerimetroCuadrado(value);
    alert(perimetro);
}
function AreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = CalculoAreaCuadrado(value);
    alert(area);
}
//-----------------------------------------------------------------------
//calculo del circulo 
function PerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = CalculoPerimetroCirculo(value);
    alert(perimetro);
}
function AreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = CalculoAreaCirculo(value);
    alert(area);
}
//-------------------------------------------------------------------------
//calculo del triangulo 
function PerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    lado1= input1.value;
    lado2= input2.value;
    base= input3.value;
    const answer= valid(lado1,lado2,base);
    if(answer==1){
        const perimetro= CalculoPerimetroTriangulo(lado1,lado2,base);
        alert(perimetro);
    }
    else{
        alert("Primero verifica que el triangulo sea isoceles");
    }
}
function AreaTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    lado1= input1.value;
    lado2= input2.value;
    base= input3.value;
    const answer= valid(lado1,lado2,base);
    if(answer==1){
        const area= CalculoAreaTriangulo(lado2,base);
        const areaP= document.getElementById("areat");
        areaP.innerText= "el area del triangulo es " + area;
        
    }
    else{
        alert("Primero verifica que el triangulo sea isoceles");
    }

}
function Validacion(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    lado1= input1.value;
    lado2= input2.value;
    base= input3.value;
    const answer= valid(lado1,lado2,base);
    if(answer==1){
        alert("el triangulo es isoceles");
    }
    else{
        alert("el triangulo no es isoceles");
    }

}
