import { useEffect } from 'react'

export const Gasolinera = () => {
   var litros = 30
   useEffect(() => {
      document.getElementById('id_litrosRes').textContent = litros
   }, [])

   function calc() {
      var litrosConsumir = parseInt(document.getElementById('id_litrosConsumir').value)
      var litrosRes = parseInt(document.getElementById('id_litrosRes').textContent)
      var nCarros = parseInt(document.getElementById('id_Vehiculos').textContent)
      var recaudacion = parseFloat(document.getElementById('id_recaudacion').textContent)
      var mayorConsu = parseInt(document.getElementById('id_mayorConsu').textContent)

      if (litrosConsumir > litrosRes) {
         alert('Lo sentimos, quedan ' + litrosRes + ' litros')
      } else {
         litrosRes -= litrosConsumir
         document.getElementById('id_litrosRes').textContent = litrosRes

         nCarros++
         document.getElementById('id_Vehiculos').textContent = nCarros

         recaudacion += litrosConsumir * 1.25
         document.getElementById('id_recaudacion').textContent = recaudacion

         if (litrosConsumir > mayorConsu) {
            document.getElementById('id_mayorConsu').textContent = litrosConsumir
         }
      }
   }
   return (
      <>
         <p>
            1. En una gasolinera se instala un detector para controlar la cantidad de litros de
            gasolina que va despachando el pistero. Se conoce que al comenzar el turo de trabajo en
            el tanque de gasolina hay N litros. Confeccione un programa para conocer constantemente.
            <br />
            ✓ La cantidad de vehículos atendidos. <br />✓ La cantidad de dinero recaudado si cada
            litro de gasolina especial cuesta $1,25 ctvos. de dólar. <br />✓ Cuál es la mayor
            cantidad de gasolina despachada a un vehículo
         </p>

         <main class="principal">
            <section class="seccion">
               <h2>Despacho</h2>

               <form action="">
                  <label for="">Litros: </label>
                  <input
                     type="number"
                     name=""
                     id="id_litrosConsumir"
                     placeholder="Listros a despachar"
                  />
                  <input type="button" value="Despachar" onClick={calc} />
               </form>

               <div class="detalles-item">
                  <strong>Litros restantes:</strong>
                  <p id="id_litrosRes">NAN</p>
               </div>
            </section>

            <section class="seccion">
               <h2>Detalles</h2>

               <div class="detalles">
                  <div class="detalles-item">
                     <strong>Vehiculos atendidos:</strong>
                     <p id="id_Vehiculos">0</p>
                  </div>

                  <div class="detalles-item">
                     <strong>Recaudacion:</strong>
                     <p id="id_recaudacion">0</p>
                  </div>

                  <div class="detalles-item">
                     <strong>Mayor consumidor:</strong>
                     <p id="id_mayorConsu">0</p>
                  </div>
               </div>
            </section>
         </main>
      </>
   )
}
export const Base10 = () => {
   function calc() {
      var num = parseInt(document.getElementById('id_decimal').value)
      try {
         document.getElementById('respuesta').textContent = num.toString(2)
      } catch (e) {
         document.getElementById('respuesta').textContent = 'NAN'
      }
   }

   return (
      <>
         <p>2. Elabore un programa que lea un número en base 10 y lo imprima en binario</p>
         <main class="principal">
            <section class="seccion">
               <h1>Ingrese Datos</h1>

               <div>
                  <label for="id_decimal">Decimal</label>
                  <input
                     type="text"
                     name=""
                     id="id_decimal"
                     placeholder="Ingrese valor en decimal"
                     maxlength="5"
                     min="0"
                     required
                     pattern="[1-9]+"
                     onChange={calc}
                  />
               </div>
            </section>

            <section class="seccion">
               <h1>Transformacion</h1>
               <div id="respuesta"></div>
            </section>
         </main>
      </>
   )
}

export const Numeros = () => {
   function calc() {
      document.getElementById('respuesta-434').innerHTML = ''
      var numIni = parseInt(document.getElementById('id_inicio').value)
      var numFin = parseInt(document.getElementById('id_final').value)

      var acum = 0

      for (var i = numIni; i <= numFin; i++) {
         var num = i.toString()
         for (var j = 0; j < num.length; j++) {
            var cifra = parseInt(num[j])
            acum += Math.pow(cifra, 3)
         }

         if (acum == i) {
            crearNodo(i)
         }
         acum = 0
      }
   }

   function crearNodo(num) {
      var elemento = document.createElement('p')
      var text = document.createTextNode(num)
      elemento.appendChild(text)
      document.getElementById('respuesta-434').appendChild(elemento)
   }

   return (
      <>
         <p>
            3. Los cubos narcisista son aquellos números enteros positivos que son exactamente
            iguales a la suma de sus dígitos elevados al cubo. Por ejemplo: 370 = 33 +73 +03
            Confeccione un programa que imprima todos los cubos Narcisitas en un intervalo.
         </p>
         <main class="principal">
            <section class="seccion">
               <h1>Ingreso de datos</h1>
               <form action="">
                  <div>
                     <label for="id_inicio">Inicio</label>
                     <input
                        type="text"
                        name=""
                        id="id_inicio"
                        placeholder="Ingrese valor inicial"
                        required
                        maxlength="3"
                     />
                  </div>

                  <div>
                     <label for="id_final">Final</label>
                     <input
                        type="text"
                        name=""
                        id="id_final"
                        placeholder="Ingrese valor final"
                        required
                        maxlength="3"
                     />
                  </div>

                  <div>
                     <input type="button" value="Verificar" onClick={calc} id="btn_verificar" />
                  </div>
               </form>
            </section>

            <section class="seccion">
               <h1>Resultados</h1>

               <div id="respuesta-434" class="respuestas"></div>
            </section>
         </main>
      </>
   )
}

export const DosCifras = () => {
   function calc() {
      console.log('DASD')
      document.getElementById('respuesta-d-cifras').innerHTML = ''
      for (var i = 11; i <= 44; i++) {
         var num = i.toString()
         if (num[0] != num[1]) {
            crearNodo(i)
            if (i != 43) {
               crearNodo(',')
            }
         }
      }
   }

   function crearNodo(bin) {
      var elemento = document.createElement('span')
      var text = document.createTextNode(bin)
      elemento.appendChild(text)
      document.getElementById('respuesta-d-cifras').appendChild(elemento)
   }

   return (
      <>
         <p>
            4. Confeccione un programa para imprimir todos los números de dos cifras que se puedan
            formar con los dígitos 1,2,3,4 con la condicción de que en cada numero no haya dígitos
            iguales.
         </p>
         <main class="principal">
            <section class="seccion">
               <h1>Generar numeros</h1>

               <form action="">
                  <input type="button" value="Generar" onClick={calc} id="btn_generar" />
               </form>
            </section>

            <section class="seccion">
               <h1>Numeros generados</h1>

               <div id="respuesta-d-cifras"></div>
            </section>
         </main>
      </>
   )
}
