export const Voice = () => {
   function startDictation() {
      if (window.hasOwnProperty('webkitSpeechRecognition')) {
         var recognition = new webkitSpeechRecognition()

         recognition.continuous = false
         recognition.interimResults = false

         recognition.lang = 'es'
         recognition.start()

         recognition.onresult = function (e) {
            document.getElementById('transcript').value = e.results[0][0].transcript
            recognition.stop()
            document.getElementById('labnol').submit()
         }

         recognition.onerror = function (e) {
            console.log(e)
            recognition.stop()
         }
      }
   }
   return (
      <div
         className="d-flex justify-content-center align-items-center"
         style={{ flexDirection: 'column' }}
      >
         <img src="https://i.imgur.com/6KzFxGW.gif?1" style={{ maxWidth: 400, marginTop: 16 }} />
         <form target="_blank" id="labnol" method="get" action="https://www.google.com/search">
            <div class="speech">
               <input type="text" name="q" id="transcript" placeholder="Search..." />
               <img onClick={() => startDictation()} src="//i.imgur.com/cHidSVu.gif" />
            </div>
         </form>
      </div>
   )
}

export const Random = () => {
   function rdm() {
      const a = Math.floor(Math.random() * 10)
      document.getElementById('dd').innerHTML = 'Num: ' + a
   }

   return (
      <div>
         <h1 id="dd"></h1>
         <button onClick={rdm}>GENERAR</button>
      </div>
   )
}
