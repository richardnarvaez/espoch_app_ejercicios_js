export const Supermercado = () => {
   function calc() {
      var cant = parseInt(document.getElementById('id_cantidad').value)

      var docenas = Math.trunc(cant / 12) /*DOCENAS*/
      var residuo = cant % 12
      var prdAdicional = 0
      var subtotal = 0
      var descuento = 0
      var total = 0

      if (docenas > 3) {
         prdAdicional++
         prdAdicional = docenas - 3
      }
      if (docenas > 3 && residuo > 3) {
         prdAdicional++
      }
      subtotal = cant * 0.6

      if (docenas > 3) {
         document.getElementById('id_porcentajeDes').textContent = '15%'
         descuento = subtotal * 0.15
      } else {
         document.getElementById('id_porcentajeDes').textContent = '10%'
         descuento = subtotal * 0.1
      }

      /*TOTALES A PAGAR*/
      total = subtotal - descuento
      document.getElementById('id_totalUnidades').textContent = cant + prdAdicional
      document.getElementById('id_cantidadPrd').textContent = cant
      document.getElementById('id_docenas').textContent = docenas
      document.getElementById('id_unidadesObsequidas').textContent = prdAdicional
      document.getElementById('id_subTotal').textContent = subtotal.toFixed(2)
      document.getElementById('id_descuento').textContent = descuento.toFixed(2)
      document.getElementById('id_total').textContent = total.toFixed(2)
   }
   return (
      <div className="row">
         <section class="col-6 seccion">
            <h1>Producto</h1>

            <div class="producto-img">
               <div>
                  <img src="/Img/productoImg.png" alt="" />
               </div>

               <div class="producto-detalle">
                  <p>
                     <strong>Coca Cola</strong>, bebida gaseosa y refrescante
                  </p>
                  <br />
                  <p>
                     <strong>Precio c/u: </strong>$0.60
                  </p>
               </div>
            </div>

            <div class="producto-add-reduce">
               <label for="id_cantidad">
                  <strong>Cantidad</strong>
               </label>
               <input
                  type="number"
                  name=""
                  max="500"
                  min="1"
                  maxlength="4"
                  id="id_cantidad"
                  onChange={calc}
               />
            </div>
         </section>

         <section class="col-6 seccion">
            <h1>Detalles</h1>

            <div class="detalles-prd">
               <div class="detalles-prd-item">
                  <h4>Cantidad</h4>
                  <h5 id="id_cantidadPrd">0</h5>
               </div>

               <div class="detalles-prd-item">
                  <h4>No. Docenas</h4>
                  <h5 id="id_docenas">0</h5>
               </div>

               <div class="detalles-prd-item">
                  <h4>Porcentaje Descuento</h4>
                  <h5 id="id_porcentajeDes">%0</h5>
               </div>

               <div class="detalles-prd-item">
                  <h4>Unidades Obsequidas</h4>
                  <h5 id="id_unidadesObsequidas">0</h5>
               </div>

               <div class="detalles-prd-item">
                  <h4>Total Unidades</h4>
                  <h5 id="id_totalUnidades">0</h5>
               </div>
            </div>
         </section>

         <section class="col-12 seccion">
            <h1>Cantidad a pagar</h1>

            <div class="detalles-prd">
               <div class="detalles-prd-item">
                  <h4>Subtotal</h4>
                  <h5 id="id_subTotal">$0</h5>
               </div>

               <div class="detalles-prd-item">
                  <h4>Descuento</h4>
                  <h5 id="id_descuento">$0</h5>
               </div>

               <div class="detalles-prd-item">
                  <h4>Total</h4>
                  <h5 id="id_total">$0</h5>
               </div>
            </div>
         </section>
      </div>
   )
}

export const Segundos = () => {
   function calc() {
      var hora = document.getElementById('id_hora').value

      var hh = hora[0] + hora[1]
      var mm = hora[3] + hora[4]
      var ss = hora[6] + hora[7]

      hh = parseInt(hh)
      mm = parseInt(mm)
      ss = parseInt(ss)

      ss = ss + 1

      if (hh != 23 && mm != 59 && ss == 60) {
         ss = 0
         mm = mm + 1
      } else {
         if (hh != 23 && mm == 59 && ss == 60) {
            ss = 0
            mm = 0
            hh = hh + 1
         } else {
            if (hh == 23 && mm == 59 && ss == 60) {
               hh = 0
               mm = 0
               ss = 0
            } else {
               if (hh == 23 && mm != 59 && ss == 60) {
                  ss = 0
                  mm = mm + 1
               }
            }
         }
      }

      document.getElementById('id_horaCalculada').textContent = hh + ':' + mm + ':' + ss
   }

   return (
      <div>
         <section class="seccion">
            <h1>Ingrese Hora</h1>

            <form action="">
               <div>
                  <label for="">Hora</label>
                  <input type="time" name="" id="id_hora" step="1" />
               </div>

               <div>
                  <input type="button" value="Calcular" onClick={calc} />
               </div>
            </form>
         </section>

         <section class="seccion">
            <h1>Hora siguiente segundo...</h1>

            <div>
               <h3>Resultado: </h3>
               <h4 id="id_horaCalculada">00:00:00</h4>
            </div>
         </section>
      </div>
   )
}

export const Alquileres = () => {
   function calc() {
      var km = parseInt(document.getElementById('id_km').value)

      var monto = 300000

      if ((km > 300) & (km <= 1000)) {
         monto += (km - 300) * 15000
      }

      if (km > 1000) {
         monto += (km - 1000) * 10000
      }

      document.getElementById('id_kilometros').textContent = km + ' km'
      document.getElementById('id_montoIva').textContent = '$' + monto * 0.2
      document.getElementById('id_montoTotal').textContent = '$' + monto
   }

   return (
      <main class="principal">
         <section class="seccion">
            <h2>Ingreso de datos</h2>
            <form action="">
               <div>
                  <label for="">Kilometros</label>
                  <input type="text" name="" placeholder="Kilometros recorridos" id="id_km" />
               </div>

               <div>
                  <input type="button" value="Calcular" onClick={calc} />
               </div>
            </form>
         </section>

         <section class="seccion">
            <h2>Titulo seccion</h2>

            <div>
               <div>
                  <p>
                     <strong>Kilometros: </strong>
                  </p>
                  <p id="id_kilometros">n km</p>
               </div>

               <div>
                  <p>
                     <strong>Monto IVA.: </strong>
                  </p>
                  <p id="id_montoIva">$100000</p>
               </div>

               <div>
                  <p>
                     <strong>Monto Total: </strong>
                  </p>
                  <p id="id_montoTotal">$100000</p>
               </div>
            </div>
         </section>
      </main>
   )
}

export const Edad = () => {
   function calc() {
      var fecha = document.getElementById('id_fecha').value
      var fechaSep = fecha.split('-', 3)

      var anio = parseInt(fechaSep[0])
      var mes = parseInt(fechaSep[1])
      var dia = parseInt(fechaSep[2])

      var fecha = new Date()
      var anioA = fecha.getFullYear()
      var mesA = fecha.getMonth() + 1
      var diaA = fecha.getDate()
      if (dia > diaA) {
         diaA += 30
         mes += 1
      } else {
         diaA -= dia
      }
      if (mes > mesA) {
         mesA = mesA + 12 - mes
         anio += 1
      } else {
         mesA -= mes
      }
      anioA -= anio

      document.getElementById('id_edad').textContent =
         anioA + ' años, ' + mesA + ' meses, ' + diaA + ' dias'
   }

   return (
      <main class="principal">
         <section class="seccion">
            <h1>Titulo seccion</h1>

            <form action="">
               <div>
                  <input type="date" name="" id="id_fecha" required />
               </div>

               <div>
                  <input type="button" value="Calcular" onClick={calc} />
               </div>
            </form>
         </section>

         <section class="seccion">
            <h1>Tu edad es...</h1>
            <div>
               <h2 id="id_edad"></h2>
            </div>
         </section>
      </main>
   )
}
