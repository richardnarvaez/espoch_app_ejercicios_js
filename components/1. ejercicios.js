export const Ej1 = () => {
  const calcular = () => {
    let h = document.getElementById("iAltura").value;
    let w = document.getElementById("iLargo").value;

    let hex = Math.atan(h / w);
    hex = (hex * 360) / (2 * Math.PI);

    let gr = parseInt(hex);
    let min = (gr % 1) * 60;
    let segundos = (min % 1) * 60;

    alert(gr + "⁰ " + min + "' " + segundos + "''");
  };

  return (
    <div className="d-flex m-4 align-items-center justify-content-center">
      <div className="card p-4" style={{ maxWidth: 300 }}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            H
          </span>
          <input
            id="iAltura"
            type="number"
            min="0"
            class="form-control"
            placeholder="Altura"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon2">
            L
          </span>
          <input
            id="iLargo"
            type="number"
            min="0"
            class="form-control"
            placeholder="Largo"
          />
        </div>

        <button
          type="button"
          onClick={() => calcular()}
          class="btn btn-primary"
        >
          Obtener
        </button>
      </div>
    </div>
  );
};

export const Ej2 = () => {
  function calcular() {
    var t = document.getElementById("id_segundos").value;
    var altura = ((9.8 * Math.pow(t, 2)) / 2).toFixed(2);
    alert(altura + " m");
  }
  return (
    <form action="" class="frm-datos">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="id_segundos"
          placeholder="10"
          required
        />
        <label for="floatingInput">Segundos</label>
      </div>

      <div class="frm-btn-calcular">
        <button
          type="button"
          class="btn btn-primary btn-sm"
          onClick={() => calcular()}
        >
          Calcular
        </button>
      </div>
    </form>
  );
};

export const Ej3 = () => {
  function calcular() {
    var n1 = document.getElementById("id_valor1").value;
    var n2 = document.getElementById("id_valor2").value;
    var n3 = document.getElementById("id_valor3").value;
    var n4 = document.getElementById("id_valor4").value;
    var n5 = document.getElementById("id_valor5").value;

    var resultado = 0;
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (i == 0 && j == 0) {
          resultado += parseInt(n1[j]) * 10000;
        }
        if (i == 1 && j == 1) {
          resultado += parseInt(n2[j]) * 1000;
        }
        if (i == 2 && j == 2) {
          resultado += parseInt(n3[j]) * 100;
        }
        if (i == 3 && j == 3) {
          resultado += parseInt(n4[j]) * 10;
        }
        if (i == 4 && j == 4) {
          resultado += parseInt(n5[j]);
        }
      }
    }
    alert(resultado);
  }

  return (
    <form action="" class="frm-datos">
      <div class="frm-datos-contenido">
        <label for="id_valor1">Número 1: </label>
        <input
          type="text"
          placeholder="Ingrese valor"
          id="id_valor1"
          maxlength="5"
          minlength="5"
        />
      </div>

      <div class="frm-datos-contenido">
        <label for="id_valor2">Número 2: </label>
        <input
          type="text"
          placeholder="Ingrese valor"
          id="id_valor2"
          maxlength="5"
          minlength="5"
        />
      </div>

      <div class="frm-datos-contenido">
        <label for="id_valor3">Número 3: </label>
        <input
          type="text"
          placeholder="Ingrese valor"
          id="id_valor3"
          maxlength="5"
          minlength="5"
        />
      </div>

      <div class="frm-datos-contenido">
        <label for="id_valor4">Número 4: </label>
        <input
          type="text"
          placeholder="Ingrese valor"
          id="id_valor4"
          maxlength="5"
          minlength="5"
        />
      </div>

      <div class="frm-datos-contenido">
        <label for="id_valor5">Número 5: </label>
        <input
          type="text"
          placeholder="Ingrese valor"
          id="id_valor5"
          maxlength="5"
          minlength="5"
          required
        />
      </div>

      <div class="frm-calcular">
        <input
          type="submit"
          type="button"
          value="Calcular"
          onClick={calcular}
        />
      </div>
    </form>
  );
};
