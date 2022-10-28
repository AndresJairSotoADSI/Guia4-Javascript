addEventListener("DOMContentLoaded", () => {
    /*########################### Ejercicio 1 #########################*/
    let ejer1 = document.querySelector("#form1");
    ejer1.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = Number(document.querySelector("#num_multi").value);
        document.querySelector("#form1").reset();
        document.querySelector("#dataTable_multi").innerHTML = "";
        let num = 11;
        for (var i = 0; i <= num; i++) {
            let resul = numero * i;
            let plantillas = `
        <tr>
            <td>${numero}</td>
            <td>${i}</td>
            <td>${resul}</td>
        </tr>`;
            document.querySelector("#dataTable_multi").insertAdjacentHTML("beforeend", plantillas);
        }
    })
    /*########################### Ejercicio 2 #########################*/
    let ejer2 = document.querySelector("#ejercicio2");
    ejer2.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#serie").innerHTML = "";
        let par = 1;
        let impar = 0;
        for (var i = 0; i < 8; i++) {
            impar = par + 4;
            console.log(impar);
            par = impar - 2
            let plantillas = `
        <tr>
            <td>Impar ${impar}</td>
        </tr>
        <tr>
            <td>Par${par}</td>
        </tr>
        `;
            document.querySelector("#serie").insertAdjacentHTML("beforeend", plantillas);
        }

    })
    /*########################### Ejercicio 3 #########################*/
    let ejer3 = document.querySelector("#form3");
    let limpiar3 = document.querySelector("#Limpiar3");
    let mensaje3 = document.querySelector("#mensaje3")
    mensaje3.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 3',
            '3. La Universidad del Valle requiere un programa que le permita conocer cómo califican los estudiantes la comida de la cafetería central. Para ello definió una escala de 1 a 10 (1 denota horrible y 10 denota excelente). El programa debe ser capaz capturar la calificación de cualquier número de estudiantes (no se sabe cuántos estudiantes se encuestarán, así que cuando el encuestador ingrese la calificación de 0, se sabrá que la encuesta habrá concluido). El programa deberá mostrar en su salida cuántos estudiantes fueron encuestados, así como el resumen de la encuesta como el promedio y cuál es la nota más alta dada y la nota más baja dada en la encuesta efectuada.',
        )
    })
    limpiar3.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form3").reset();
        document.querySelector("#dataTable_calif").innerHTML = "";
        document.querySelector("#res3").innerHTML = "";

    })
    ejer3.addEventListener("submit", (e) => {
        e.preventDefault();

        function Calificacion(calificacion) {
            this.calificacion = calificacion;
        }
        let resultado3 = document.querySelector("#calificacion3").value;
        nuevaCalificacion = new Calificacion(resultado3);
        Agrega();
    })
    let basededatos = [];
    let sum1 = 0;
    let sum2 = 0;

    function Agrega() {
        basededatos.push(nuevaCalificacion);
        if (nuevaCalificacion.calificacion >= 1 && nuevaCalificacion.calificacion <= 5) {
            document.querySelector("#dataTable_calif").innerHTML += '<tbody><td>' + basededatos.length + '</td><td>' + Math.max(nuevaCalificacion.calificacion) + '</td><td>' + "Horrible " + '</td></tbody>';
            sum1 += 1;

        } else if (nuevaCalificacion.calificacion >= 6 && nuevaCalificacion.calificacion <= 10) {
            sum2 += 1;
            document.querySelector("#dataTable_calif").innerHTML += '<tbody><td>' + basededatos.length + '</td><td>' + nuevaCalificacion.calificacion + '</td><td>' + "Excelente" + '</td></tbody>';
        } else {
            alert("Ingrese un valor correcto")
        }

        let sumatotal = sum1 + sum2;
        let promedio = sumatotal / sumatotal;
        document.querySelector("#res3").innerHTML = `la suma de votantes es${sumatotal} y el promedio es ${promedio}% numeromayo  `;

    }
    /*########################### Ejercicio 4 #########################*/
    let ejer4 = document.querySelector("#form4");
    let mensaje4 = document.querySelector("#mensaje4")
    let limpiar4 = document.querySelector("#Limpiar4")
    /*Mensaje*/
    mensaje4.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 4',
            'Una persona adquirió un producto para pagar en 20 meses. El primer mes pagó $10, el segundo $20, el tercero $40 y así sucesivamente. Realice un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo que pagó después de los 20 meses y represéntelo mediante pseudocódigo y el utilizando el ciclo apropiado.'
        )
    })

    /******Boton Limpiar***** */
    limpiar4.addEventListener("click", () => {
        document.querySelector("#form4").reset();
        document.querySelector("#Tabla_producto").innerHTML = "";
        document.querySelector("#num_mensual").innerHTML = "";
    })
    ejer4.addEventListener("submit", (e) => {
        e.preventDefault();
        let mensu = document.querySelector("#num_mensual").value;
        console.log(mensu)
        let mes = 0;
        let total = 0;
        for (let i = 1; i <= mensu; i++) {
            if (i == 1) {
                mensualidad = 10;
            } else {
                mensualidad = mensualidad * 2;
            }

            let plantillas = `
            <tr>
                <td>${i}</td>
                <td>${mensualidad}</td>
            </tr>`;
            document.querySelector("#Tabla_producto").insertAdjacentHTML("beforeend", plantillas);
            total += mensualidad;
        }

        let plantillas = `
            <tr>
                <td>Total a pagar por ${mensu} meses</td>
                <td>${total}</td>
            </tr>`;
        document.querySelector("#Tabla_producto").insertAdjacentHTML("beforeend", plantillas);
    })
    /*########################### Ejercicio 5 #########################*/
    let ejer5 = document.querySelector("#form5");
    let mensaje5 = document.querySelector("#mensaje5")
    let limpi5 = document.querySelector("#Limpiar5")
    let tota = document.querySelector("#total5")
    /*Mensaje*/
    mensaje5.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 5',
            'Un empleado de la tienda “Tiki Taka” realiza N ventas durante el día, se requiere saber cuántas de ellas fueron mayores a $1000, cuántas fueron mayores a $500 pero menores o iguales a $1000, y cuántas fueron menores o iguales a $500. Además, se requiere saber el monto de lo vendido en cada categoría y de forma global. Realice un algoritmo que permita determinar lo anterior.'
        )
    })
    limpi5.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form5").reset();
        document.querySelector("#Tabla_tikitaki").innerHTML = "";
    })
    let base1 = [];
    let base2 = [];
    let base3 = [];
    let suma1 = 0;
    let suma2 = 0;
    let suma3 = 0;

    ejer5.addEventListener("submit", (e) => {
        e.preventDefault();
        let result5 = document.querySelector("#valor5").value;
        document.querySelector("#form5").reset();
        if (result5 > 0 && result5 <= 500) {
            document.querySelector("#Tabla_tikitaki").innerHTML += '<tbody><td>' + "X" + '</td><td></td><td></td> <td>' + result5 + ' </td></tbody>';
            base1.push(parseInt(result5))

            function sumaRecursivaArreglo1(base1) {
                for (let i in base1) {
                    if (Array.isArray(base1[i])) suma1 += sumaRecursivaArreglo1(base1[i])
                    else suma1 += base1[i]
                }
                return suma1;
            }
            sumaRecursivaArreglo1(base1)


        }
        if (result5 > 500 && result5 <= 1000) {
            document.querySelector("#Tabla_tikitaki").innerHTML += '<tbody><td></td><td>' + "X" + '</td><td></td> <td>' + result5 + ' </td></tbody>';
            base2.push(parseInt(result5))

            function sumaRecursivaArreglo2(base2) {
                for (let i in base2) {
                    if (Array.isArray(base2[i])) suma2 += sumaRecursivaArreglo2(base2[i])
                    else suma2 += base2[i]
                }
                return suma2;
            }
            sumaRecursivaArreglo2(base2)

        }
        if (result5 > 1000 && result5 <= 100000) {
            document.querySelector("#Tabla_tikitaki").innerHTML += '<tbody><td></td><td></td><td>' + "X" + '</td> <td>' + result5 + ' </td></tbody>';
            base3.push(parseInt(result5))

            function sumaRecursivaArreglo3(base3) {
                for (let i in base3) {
                    if (Array.isArray(base3[i])) suma3 += sumaRecursivaArreglo3(base3[i])
                    else suma3 += base3[i]
                }
                return suma3;
            }
            sumaRecursivaArreglo3(base3)

        }
        if (result5 == "") {
            document.querySelector("#Tabla_tikitaki").innerHTML += '<tbody><td>' + suma1 + '</td><td>' + suma2 + '</td><td>' + suma3 + '</td> <td> </td></tbody>';

        }
    })

    /*########################### Ejercicio 6 #########################*/
    let ejer6 = document.querySelector("#form6");
    let limpiar6 = document.querySelector("#Limpiar6");
    let mensaje6 = document.querySelector("#mensaje6")
    mensaje6.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 6',
            'En una empresa de 100 trabajadores, se hará un aumento al salario de acuerdo al tiempo deservicio, para este aumento se tomará en cuenta lo siguiente:- Tiempo de servicio: de 1 a 5 años Aumento: 100 PESOS - Tiempo de servicio: de 5 a 10 años Aumento: 250 PESOS - Tiempo de servicio: de 10 a 20 años Aumento: 400 PESOS. - Tiempo de servicio: de 20 años a más Aumento: 550 PESOS.</h4>',
        )
    })
    limpiar6.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form6").reset();
        document.querySelector("#datanombres").innerHTML = "";

    })
    ejer6.addEventListener("submit", (e) => {
        e.preventDefault();

        function Datos(nombre, years, ) {
            this.nombre = nombre;
            this.years = years;
        }
        let Name = document.querySelector("#nombre").value;
        let tiempo = document.querySelector("#year").value;
        nuevaDatos = new Datos(Name, tiempo);
        console.log(nuevaDatos)
        Agregar();
    })
    let modelo = [];

    function Agregar() {
        modelo.push(nuevaDatos);
        if (nuevaDatos.years > 0 && nuevaDatos.years <= 5) {
            document.querySelector("#datanombres").innerHTML += '<tbody><td>' + modelo.length + '</td><td>' + nuevaDatos.nombre + '</td><td>' + nuevaDatos.years + '</td> <td>' + "Aumento: 100 Pesos" + '</td></tbody>';

        } else if (nuevaDatos.years > 6 && nuevaDatos.years <= 10) {
            document.querySelector("#datanombres").innerHTML += '<tbody><td>' + modelo.length + '</td><td>' + nuevaDatos.nombre + '</td><td>' + nuevaDatos.years + '</td> <td>' + "Aumento: 250 Pesos" + '</td></tbody>';
        } else if (nuevaDatos.years > 10 && nuevaDatos.years <= 20) {
            document.querySelector("#datanombres").innerHTML += '<tbody><td>' + modelo.length + '</td><td>' + nuevaDatos.nombre + '</td><td>' + nuevaDatos.years + '</td> <td>' + "Aumento: 400 Pesos" + '</td></tbody>';
        } else {
            document.querySelector("#datanombres").innerHTML += '<tbody><td>' + modelo.length + '</td><td>' + nuevaDatos.nombre + '</td><td>' + nuevaDatos.years + '</td> <td>' + "Aumento: 550 Pesos" + '</td></tbody>';
        }
    }


    /*########################### Ejercicio 7 #########################*/


    let ejer7 = document.querySelector("#form7");
    let limpiar7 = document.querySelector("#Limpiar7");
    let mensaje7 = document.querySelector("#mensaje7")
    mensaje7.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 7',
            'Diseñe un pseudocódigo que lea el valor de un ángulo expresado en radianes y calcule e imprima el valor del seno de dicho ángulo. Se leerá también el número de términos de la serie. SEN(X) = X - ( X 3 / 3 ! ) + ( X 5 / 5 ! ) - (X7/ 7!) ',
        )
    })
    limpiar7.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form7").reset();
        resultado7.innerHTML = "";

    })
    ejer7.addEventListener("submit", (e) => {
        e.preventDefault();
        let resultado7 = document.querySelector("#res7")
        let signo = 1;
        let pi = 3.14;
        let ang = document.querySelector("#max_exp").value;
        let rad = document.querySelector("#ang_rad").value;
        let x = rad * (180 / pi);
        let sen = x;

        for (let i = 1; i <= ang; i++) {
            let a = 1;
            let b = 1;
            while (a <= i) {
                b = b * a;
                a = a + 1;
            }
            if (signo % 2 == 1) {

                sen = sen - ((x ** i) / b);

            } else {

                sen = sen + ((x ** i) / b);
            }
            signo += 1;
        }
        resultado7.innerHTML = `El seno es de: ${sen}`
    });
    /*########################### Ejercicio 8 #########################*/
    let ejer8 = document.querySelector("#form8");
    let Limpiar8 = document.querySelector("#limpiar8");
    let mensaje8 = document.querySelector("#mensaje8")
    mensaje8.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 8',
            'Hacer un algoritmo que al ingresar 2 números por la pantalla y se calcule la suma, resta, multiplicación y división. El proceso debe terminar cuando se hallan realizado 10 procesos (Hacer uso de contadores)',
        )
    })
    Limpiar8.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form8").reset();
        document.querySelector("#resultados").innerHTML = "";
    })
    ejer8.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = Number(document.querySelector("#numeroresul").value);
        let num = 11;
        for (var i = 0; i <= num; i++) {
            let suma = numero + i;
            console.log(suma)
            let resta = numero - i;
            let multiplicacion = numero * i;
            let division = numero / i;
            let plantillas = `
        <tr>
            <td>${numero}+${i} = ${suma}</td>
            <td>${numero}-${i} = ${resta}</td>
            <td>${numero}*${i} = ${multiplicacion}</td>
            <td>${numero}/${i} = ${division}</td>
        </tr>`;
            document.querySelector("#resultados").insertAdjacentHTML("beforeend", plantillas);
        }
    })
    /*########################### Ejercicio 9 #########################*/
    let ejer9 = document.querySelector("#form9");
    let limpiar9 = document.querySelector("#Limpiar9");
    let messaje9 = document.querySelector("#mensaje9")
    let resulta9 = document.querySelector("#res9")
    messaje9.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 9',
            ' Diseñar un diagrama que permita emitir la factura correspondiente a una compra de un artículo del cual se adquiere una o varias unidades y se conoce su precio antes de IVA (iva igual al 16%), y si el precio bruto (precio de venta más IVA) es mayor de $500.000.oo se debe realizar un descuento del 15%.',
        )
    })
    limpiar9.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form9").reset();
        document.querySelector("#datanombres").innerHTML = "";

    })
    ejer9.addEventListener("submit", (e) => {
        e.preventDefault();

        function Pago(nombreproducto, valorproducto) {
            this.nombreproducto = nombreproducto
            this.valorproducto = valorproducto;

        }
        let nombreprodut = document.querySelector("#nomproducto").value;
        let valorinproduct = Number(document.querySelector("#valorproducto").value);
        datosProducto = new Pago(nombreprodut, valorinproduct);
        AgregarProducto();
    })
    let productobase = [];
    let productobase2 = [];
    let sumer = 0;
    let descuento = 0;
    let totaliva = 0;
    let totalconiva = 0;
    let totalcoodescuento = 0;

    function AgregarProducto() {
        productobase.push(parseInt(datosProducto))
        if (datosProducto.valorproducto > 0) {
            document.querySelector("#facturacion").innerHTML += '<tbody><td>' + productobase.length + '</td><td>' + datosProducto.nombreproducto + '</td><td>' + datosProducto.valorproducto + '</td> <td>' + "16%" + '</td></tbody>';
            productobase2.push(datosProducto.valorproducto)
            sumer += datosProducto.valorproducto
            totaliva = sumer * 0.16;
            totalconiva = sumer + totaliva
            descuento = sumer * 0.15;
            totalcoodescuento = sumer - descuento;
            if (sumer > 500) {
                resulta9.innerHTML = `Total de productos: ${productobase.length} total de compras ${sumer} total iva ${totaliva} total con iva${totalconiva} descuento 15% ${descuento} total con descuento ${totalcoodescuento} `
            } else {
                resulta9.innerHTML = `Total de productos: ${productobase.length} total de compras ${sumer} total iva ${totaliva} total con iva${totalconiva} descuento 0% `
            }
        }


    }
    /*########################### Ejercicio 10 #########################*/


    let ejer10 = document.querySelector("#form10");
    let limpi10 = document.querySelector("#Limpiar10");
    let mensaje10 = document.querySelector("#mensaje10")
    let resultado10=  document.querySelector("#res10")
    mensaje10.addEventListener("click", () => {
        Swal.fire(
            'Ejercicio 10',
            ' Construya los algoritmos que permitan calcular las siguientes series con un valor de N ingresadodesde teclado:<br> 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup>+...N<sup>2</sup> tal que N es positivo<br> 1<sup>1</sup> + 2<sup> 2 </sup> + 3<sup> 3 </sup> +...N<sup> n </sup> tal que N es positivo ',
        )
    })
    limpi10.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#form10").reset();
        resultado10.innerHTML = "";

    })
    ejer10.addEventListener("submit", (e) => {
        e.preventDefault();
        let numserie = Number(document.querySelector("#numeroserie").value); 
        let serie1 = 0; 
        let serie2 = 0;
        for (let i = 1; i <= numserie; i++) {
            serie1 += Math.pow(i, 2);
            serie2 += Math.pow(i, i);
        }
        document.querySelector("#res10").innerHTML = `Serie 1: ${serie1}  Serie 2: ${serie2}`;
    });

})