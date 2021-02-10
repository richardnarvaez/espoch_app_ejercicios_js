import Head from 'next/head'
import { Ej1, Ej2, Ej3 } from '../components/1. ejercicios'
import { Alquileres, Edad, Segundos, Supermercado } from '../components/2. ej_alternativos'
import { Base10, DosCifras, Gasolinera, Numeros } from '../components/3. ej_repeticion'
import { Random, Voice } from '../components/4. ej_otros'
export default function Home() {
   return (
      <div>
         <Head>
            <title>Aplicaciones Informaticas</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <header
            className="site-header sticky-top py-1"
            style={{ background: '#fff', boxShadow: '0 2px 5px #00000030' }}
         >
            <nav className="container d-flex flex-column flex-md-row justify-content-center">
               <a className="py-2" href="#" aria-label="Product">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     className="d-block mx-auto"
                     role="img"
                     viewBox="0 0 24 24"
                  >
                     <title>APPS</title>
                     <path
                        fill="currentColor"
                        d="M15 9L12 0L9 9L0 12L9 15L12 24L15 15L24 12L15 9M4 12L10 10L11 12H4M12 20L10 14L12 13V20M12 4L14 10L12 11V4M14 14L13 12H20L14 14M8.7 17.3L5 19L6.7 15.3L8.3 15.8L8.7 17.3M17.3 15.3L19 19L15.3 17.3L15.8 15.7L17.3 15.3M6.7 8.7L5 5L8.7 6.7L8.2 8.2L6.7 8.7M15.3 6.7L19 5L17.3 8.7L15.7 8.2L15.3 6.7Z"
                     />
                  </svg>
               </a>
            </nav>
         </header>

         <main>
            <div className="position-relative overflow-hidden m-md-3 text-center bg-light">
               <div className="col-md-5 p-lg-1 mx-auto my-5">
                  <h1 className="display-6 fw-normal">Aplicaciones Informaticas</h1>
                  <p className="lead fw-normal">Ejercicios resueltos en JS</p>
               </div>
            </div>

            <div className="accordion p-5" id="accordionExample">
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                     <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                     >
                        Lineales
                     </button>
                  </h2>
                  <div
                     id="collapseOne"
                     className="accordion-collapse collapse show"
                     aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link active"
                                 id="pills-home-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-home"
                                 role="tab"
                                 aria-controls="pills-home"
                                 aria-selected="true"
                              >
                                 Arbol
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-profile-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-profile"
                                 role="tab"
                                 aria-controls="pills-profile"
                                 aria-selected="false"
                              >
                                 Altura
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-contact-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-contact"
                                 role="tab"
                                 aria-controls="pills-contact"
                                 aria-selected="false"
                              >
                                 5 Numeros
                              </a>
                           </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                           <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                           >
                              1. Conocida la <code>altura(h)</code> de un poste y el largo de la
                              sombra de este proyectada sobre la acera(s),a una hora determinada del
                              día, haga un programa que calcule e imprima
                              <strong> (grados, minutos y segundos)</strong>, el ángulo de
                              incidencia del sol en ese momento.
                              <Ej1 />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                           >
                              2. Confeccione un programa para determinar desde que altura se dejó
                              caer un cuerpo, si se sabe qe este estuvo en el aire t segundos.
                              <Ej2 />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                           >
                              3. Dados 5 números de 5 cifras encontrar el 6 número de 5 cifras
                              también de la forma siguiente: <br />
                              <strong>
                                 94567
                                 <br />
                                 28954
                                 <br />
                                 36532
                                 <br />
                                 45668
                                 <br />
                                 65788
                              </strong>
                              <br />
                              Número de 5 cifras: 98568
                              <Ej3 />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                     >
                        Alternativos
                     </button>
                  </h2>
                  <div
                     id="collapseTwo"
                     className="accordion-collapse collapse"
                     aria-labelledby="headingTwo"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link active"
                                 id="pills-2-1-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-2-1"
                                 role="tab"
                                 aria-controls="pills-2-1"
                                 aria-selected="true"
                              >
                                 Supermercado
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-2-2-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-2-2"
                                 role="tab"
                                 aria-controls="pills-2-2"
                                 aria-selected="false"
                              >
                                 Segundos
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-2-3-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-2-3"
                                 role="tab"
                                 aria-controls="pills-2-3"
                                 aria-selected="false"
                              >
                                 Alquileres
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-2-4-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-2-4"
                                 role="tab"
                                 aria-controls="pills-2-4"
                                 aria-selected="false"
                              >
                                 Edad
                              </a>
                           </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                           <div
                              className="tab-pane fade show active"
                              id="pills-2-1"
                              role="tabpanel"
                              aria-labelledby="pills-2-1-tab"
                           >
                              1. Un supermercado ha puesto en oferta la venta al por mayor de cierto
                              producto, ofreciendo un descuento del <code>15%</code> por la compra
                              de más de 3 docenas y <code>10%</code> en caso contrario. Además por
                              la compra de más de 3 docenas se obsequia una unidad del producto por
                              cada docena en exceso sobre 3.
                              <strong>
                                 {' '}
                                 Determine el monto de la compra, el monto del descuento, el monto a
                                 pagar y el número de unidades de obsequio por la compra de cierta
                                 cantidad de docenas del producto.
                              </strong>
                              <Supermercado />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-2-2"
                              role="tabpanel"
                              aria-labelledby="pills-2-2-tab"
                           >
                              2. Calcule la hora al siguiente segundo
                              <Segundos />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-2-3"
                              role="tabpanel"
                              aria-labelledby="pills-2-3-tab"
                           >
                              3. Una compañía dedicada al alquiler de automóviles cobra un monto
                              fijo de $300000 para los primeros 300 km de recorrido. Para más de 300
                              km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada
                              kilómetro en exceso sobre 300. Para más de 1000 km cobra un monto
                              adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los
                              precios ya incluyen el 20% del impuesto general a las ventas, IVA.
                              Diseñe un programa que determine el monto a pagar por el alquiler de
                              un vehículo y el monto incluido del impuesto.
                              <Alquileres />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-2-4"
                              role="tabpanel"
                              aria-labelledby="pills-2-4-tab"
                           >
                              4. Calcule la edad de una persona conociendo su fecha de nacimiento en
                              día, mes y año
                              <Edad />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                     >
                        Repeticion
                     </button>
                  </h2>
                  <div
                     id="collapseThree"
                     className="accordion-collapse collapse"
                     aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link active"
                                 id="pills-3-1-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-3-1"
                                 role="tab"
                                 aria-controls="pills-3-1"
                                 aria-selected="true"
                              >
                                 3.1
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-3-2-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-3-2"
                                 role="tab"
                                 aria-controls="pills-3-2"
                                 aria-selected="false"
                              >
                                 3.2
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-3-3-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-3-3"
                                 role="tab"
                                 aria-controls="pills-3-3"
                                 aria-selected="false"
                              >
                                 3.3
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-3-4-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-3-4"
                                 role="tab"
                                 aria-controls="pills-3-4"
                                 aria-selected="false"
                              >
                                 3.4
                              </a>
                           </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                           <div
                              className="tab-pane fade show active"
                              id="pills-3-1"
                              role="tabpanel"
                              aria-labelledby="pills-3-1-tab"
                           >
                              <Gasolinera />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-3-2"
                              role="tabpanel"
                              aria-labelledby="pills-3-2-tab"
                           >
                              <Base10 />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-3-3"
                              role="tabpanel"
                              aria-labelledby="pills-3-3-tab"
                           >
                              <Numeros />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-3-4"
                              role="tabpanel"
                              aria-labelledby="pills-3-4-tab"
                           >
                              <DosCifras />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="accordion-item">
                  <h2 className="accordion-header" id="heading4">
                     <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="false"
                        aria-controls="collapse4"
                     >
                        Otros
                     </button>
                  </h2>
                  <div
                     id="collapse4"
                     className="accordion-collapse collapse"
                     aria-labelledby="heading4"
                     data-bs-parent="#accordionExample"
                  >
                     <div className="accordion-body">
                        <ul className="nav nav-pills mb-3" id="pills-4-tab" role="tablist">
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link active"
                                 id="pills-4-1-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-4-1"
                                 role="tab"
                                 aria-controls="pills-4-1"
                                 aria-selected="true"
                              >
                                 Voice
                              </a>
                           </li>
                           <li className="nav-item" role="presentation">
                              <a
                                 className="nav-link"
                                 id="pills-4-2-tab"
                                 data-bs-toggle="pill"
                                 href="#pills-4-2"
                                 role="tab"
                                 aria-controls="pills-4-2"
                                 aria-selected="false"
                              >
                                 Random
                              </a>
                           </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                           <div
                              className="tab-pane fade show active"
                              id="pills-4-1"
                              role="tabpanel"
                              aria-labelledby="pills-4-1-tab"
                           >
                              1. Realizar el program de interfaz de <code>voz</code>.
                              <Voice />
                           </div>
                           <div
                              className="tab-pane fade"
                              id="pills-4-2"
                              role="tabpanel"
                              aria-labelledby="pills-4-2-tab"
                           >
                              2. Realizar un programa que utilice la libreria random. (valido como
                              tarea de los parametros del tercer parcial).
                              <Random />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   )
}
