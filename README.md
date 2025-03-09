Instructivo
1. Crear uno o varios archivos .txt (no importa el nombre) en la carpeta /datos/in/ con la siguiente estructura JSON (SE PUEDE PONER MAS REGISTROS, SOLO TIENEN QUE ESTAR SEPARADO POR UNA COMA): 
  {
      "saldoAceptado": 10,
      "fechaVencimientoPago": "1900-01-10",
      "idFactura": {
          "cuitEmisor": "1234567890",
          "cbuEmisor": "1234567890"
      },
      "cuitComprador": "1234567890",
      "cbuComprador": "1234567890"
  }

2. Ejecute el comando "node index.js" o utilize ejecute el run.bat (este contiene el mismo comando)
3. El programa lee los datos de los archivos, convierte los datos y los pasa todo a un archivo .txt en el path /datos/out/ con el nombre resultado_(fechaexacta), una vez creado, el programa borra los archivos deL path /datos/in/
4. Listo, ya tiene los datos procesados

PD: en el path /datos/PRUEBA/ hay dos archivos de pruba para tener una estructura de ejemplo o bien, ver como funciona el programa.
