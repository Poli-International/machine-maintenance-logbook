# Registro de mantenimiento de máquinas: guía de uso

El Registro de mantenimiento de máquinas permite supervisar la identidad de los equipos, las horas de funcionamiento, los valores de calibración, los intervalos de revisión, los costes de reparación y el historial de inspecciones en estudios de tatuaje, anilladores y técnicos de mantenimiento de material para arte corporal.

## Para qué sirve este registro

El Registro de mantenimiento de máquinas ofrece un inventario estructurado para cada máquina rotativa, de bobinas, tipo bolígrafo (pen) o fuente de alimentación del estudio. En él se consignan los datos del fabricante, el número de serie de origen, el distribuidor comercial, el vencimiento de la garantía, la cabina de trabajo y el tatuador asignado.

El programa facilita el seguimiento de las labores habituales de taller: calibración del voltaje de trabajo, limpieza por ultrasonidos, sustitución de adaptadores de cartuchos de agujas, revisión de motores y rodamientos, comprobación de cables RCA, esterilización del grip y recambio de piezas de desgaste. Calcula el incremento de horas de uso entre intervenciones consecutivas, advierte al equipo cuando expira un plazo de revisión programado, totaliza los costes por máquina y por año natural, y genera archivos iCalendar sin necesidad de conexión a internet para planificar las revisiones del taller.

## A quién va dirigido

- **Propietarios y encargados de estudios de tatuaje** que gestionan la maquinaria común, controlan los calendarios de revisión entre las distintas cabinas y vigilan las partidas anuales de mantenimiento.
- **Tatuadores residentes, invitados y anilladores** que gestionan sus equipos personales, registran voltajes idóneos y vigilan el desgaste de sus motores.
- **Responsables de higiene y seguridad** encargados de mantener al día los partes de inspección y vincular los archivadores físicos de facturas con las fichas digitales.
- **Técnicos de reparación y constructores de máquinas** que realizan puestas a punto en banco de trabajo, sustituyen rodamientos y documentan las horas de funcionamiento para sus estudios clientes.

## Modo de uso

### Consultar alertas de revisión y exportar recordatorios al calendario

1. Revise el panel superior `Revisiones previstas y vencidas`. Las máquinas que sobrepasan los plazos establecidos muestran los avisos `Vencida hace {days} días` o `Excedida por {hours} horas de trabajo`.
2. Cuando falten catorce días o menos para una fecha de revisión programada, el panel indicará `Prevista en {days} días`.
3. Pulse en el botón `Descargar archivo .ics` situado junto al equipo correspondiente para obtener un archivo de evento que recoge el nombre de la máquina, número de serie, cabina y tatuador asignado.
4. Si todos los equipos en activo cumplen con los calendarios de servicio, el panel mostrará el mensaje `Todo el equipo activo se encuentra al día.`.

### Registrar una nueva máquina en el inventario

1. Abra la pestaña `Inventario de máquinas` en la barra de navegación.
2. En la sección de registro, introduzca el nombre o identificador interno en `Nombre de la máquina / ID`. Este campo es obligatorio.
3. Rellene las especificaciones técnicas en `Número de serie`, `Modelo / Versión` y `Proveedor / Distribuidor`.
4. Indique los plazos en `Fecha de compra` y `Vencimiento de garantía`.
5. Concrete la ubicación en `Puesto de trabajo / Cabina` e indique el profesional en `Tatuador asignado`.
6. Defina los criterios de revisión en `Intervalo de revisión (días)` o `Intervalo de revisión (horas)`.
7. Pulse en `Guardar máquina` para incorporar el equipo a la tabla general.

### Gestionar el estado operativo y retirar máquinas del servicio

1. En la pestaña `Inventario de máquinas`, localice el equipo en la tabla `Máquinas registradas`. Las máquinas en funcionamiento muestran la etiqueta verde `Operativa`.
2. Si un equipo se vende, se sustituye o pasa a reserva de emergencia, haga clic en `Dar de baja` dentro de la columna `Acciones disponibles`.
3. Confirme el procedimiento en la ventana emergente. La máquina recibirá la etiqueta `Fuera de servicio`. Todo su historial técnico anterior se conservará intacto para consultas, pero dejará de computar en los avisos de revisión inmediata.
4. Si desea reincorporar un equipo almacenado a la actividad normal, haga clic en `Reincorporar`.

### Anotar una intervención técnica en el registro

1. Vaya a la pestaña `Historial de revisiones` en la barra superior.
2. Seleccione el equipo correspondiente en el menú desplegable `Elegir máquina`.
3. Indique el día de la intervención en `Fecha del servicio`.
4. Introduzca la lectura del medidor en `Horas acumuladas actuales` si su fuente o temporizador registra el tiempo de uso.
5. Elija la labor efectuada en `Tipo de intervención`: `Calibración de voltaje`, `Limpieza y desinfección`, `Cambio de adaptador de cartuchos`, `Revisión integral (motor/rodamientos)`, `Comprobación cable / clavija RCA`, `Esterilización del grip`, `Sustitución de componentes` u `Otra tarea`.
6. Cumplimente los datos de control: tensión medida en `Voltaje de trabajo (V)`, piezas reemplazadas en `Piezas sustituidas`, importe facturado en `Importe del gasto` y código del documento en `Referencia física (carpeta de facturas / informe)`.
7. Anote las observaciones mecánicas en `Notas técnicas`.
8. Pulse en `Registrar intervención` para almacenar la ficha.

### Filtrar y consultar el historial de mantenimiento

1. Utilice la barra de filtros para segmentar por cabina mediante `Todas las cabinas / salas`, por operario mediante `Todos los tatuadores`, por equipo mediante `Todas las máquinas`, por tipo de labor mediante `Todas las modalidades`, o por estado mediante `Condición: Todas`, `Condición: Solo operativas` y `Condición: Solo fuera de servicio`.
2. En la tabla del registro, la columna `Horas (Diferencia)` calcula el tiempo de trabajo transcurrido desde el último servicio idéntico mediante la fórmula `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. Para eliminar una fila introducida por error, pulse el botón `Borrar` (`×`) situado en la propia fila y confirme la acción.

### Analizar componentes reemplazados y costes del taller

1. Entre en la pestaña `Piezas y gastos` de la barra principal.
2. En el panel `Gastos acumulados por máquina`, examine la lista de repuestos en `Piezas sustituidas`, la suma pormenorizada en `Desglose contable` y el montante global en `Gasto total`.
3. En el panel `Gastos acumulados por año natural`, revise el número de servicios realizados y el presupuesto anual empleado en el taller.

### Crear y restaurar copias de seguridad

1. Diríjase a la pestaña `Copia de seguridad` en la barra superior.
2. Haga clic en `Exportar copia JSON` para descargar un archivo que almacena la totalidad de los equipos, las hojas de mantenimiento y las periodicidades.
3. Si necesita trasladar el registro a otro ordenador o restaurar la información tras borrar la caché, pulse en `Restaurar copia JSON`, elija su archivo y confirme la carga.
4. Para vaciar por completo el almacenamiento local del navegador, pulse en `Eliminar todos los datos` y acepte la advertencia.

## Qué funciones no realiza este programa

- No calcula la amortización contable de la maquinaria, los períodos de retorno de inversión ni el umbral de rentabilidad horaria de los equipos; para estos estudios consulte la herramienta [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/).
- No evalúa los importes de alquiler de cabina, las tarifas por hora ni los porcentajes de reparto entre tatuadores; el estudio de las tarifas del estudio se realiza con la aplicación [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- No registra los ciclos de esterilización en autoclave de vapor, los controles biológicos por esporas ni las tiras de viraje químico; el control de autoclaves se gestiona desde el [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- No gestiona lotes de joyería para piercing estéril, informes de colada ni análisis de composición de aleaciones; los certificados de colada y las normas de aleación se comprueban con el [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Dónde se guardan los datos

El inventario de maquinaria y el registro de intervenciones se guardan exclusivamente en la memoria local del navegador web del dispositivo que esté utilizando. El software utiliza el almacenamiento `localStorage` del navegador y no envía datos de las máquinas, números de serie, importes ni nombres de tatuadores a Poli International ni a ningún servidor externo.

Dado que los registros permanecen guardados en su propio equipo, la limpieza del historial, el vaciado de la caché o el uso de ventanas privadas borrarán los datos. Descargue copias de seguridad de forma periódica con `Exportar copia JSON` antes de efectuar tareas de limpieza en el sistema operativo o en el navegador.

Un archivo de copia de seguridad JSON incluye la versión del esquema, la fecha de exportación, las fichas descriptivas de las máquinas y todos los partes de mantenimiento. La descarga en formato CSV genera una tabla organizada compatible con cualquier programa de hojas de cálculo.

## Opciones de impresión y descarga

- **Tablas en formato CSV**: en la pestaña `Historial de revisiones`, pulse en `Exportar tabla CSV` para descargar una tabla que incluye fechas, equipos, cabinas, tatuadores, labores, horas de uso, voltajes, piezas, gastos, referencias documentales y observaciones.
- **Avisos de calendario**: en el panel `Revisiones previstas y vencidas` o en la tabla `Inventario de máquinas`, utilice `Descargar archivo .ics` para obtener citas compatibles con Google Calendar, Apple Calendar o Microsoft Outlook.
- **Copias integrales en JSON**: en la pestaña `Copia de seguridad`, pulse en `Exportar copia JSON` para generar una copia completa apta para traslados de equipo o conservación del historial.
- **Impresión en soporte físico**: utilice la opción de imprimir del navegador (Ctrl+P o Cmd+P) en cualquier pantalla. El diseño para impresión oculta los menús, los botones y los fondos de color para crear fichas sobrias destinadas a los archivadores del estudio.

## Preguntas frecuentes

### ¿Cómo saber si una máquina de tatuar necesita una revisión?
El programa revisa de forma constante las máquinas operativas frente a los intervalos configurados. Si el plazo en días ha concluido o si las horas de uso superan el límite establecido desde la última comprobación, el recuadro superior marca la máquina como vencida. Si la fecha prevista se encuentra dentro de los siguientes catorce días, el sistema alertará de que la revisión es inminente.

### ¿Se pueden medir los intervalos de revisión por horas de uso en vez de por días?
Sí, cada ficha técnica permite fijar un intervalo en horas de trabajo, en días naturales, o combinando ambos requisitos al mismo tiempo. Al anotar las horas de trabajo registradas por la fuente de alimentación en cada intervención, el software suma el tiempo transcurrido y avisa cuando se llega al límite fijado.

### ¿Qué ocurre con el historial de mantenimiento al dar de baja una máquina?
Dar de baja una máquina conserva todos los partes de taller, los gastos de piezas y las calibraciones de voltaje realizadas con anterioridad. El equipo simplemente deja de mostrarse en el panel de revisiones urgentes y en los avisos del calendario, pero sigue accesible mediante los filtros de búsqueda.

### ¿Dónde se almacenan los datos de las máquinas registradas?
Toda la información queda archivada en el almacenamiento interno del navegador del ordenador, tableta o teléfono móvil en uso. No se envían datos de equipos, números de serie, costes ni nombres por internet ni se alojan en servidores de Poli International.

### ¿Cómo se traspasa el registro de máquinas a otro ordenador o tableta?
Abra la pestaña `Copia de seguridad` en su equipo actual y haga clic en `Exportar copia JSON` para descargar la base de datos. Transfiera ese archivo a su nuevo dispositivo, entre en la aplicación, pulse en `Restaurar copia JSON` y escoja el archivo para recuperar las máquinas y los partes técnicos.

### ¿Para qué se utiliza el campo de referencia física?
La referencia física vincula los datos informáticos con los documentos impresos custodiados en el estudio, como carpetas de facturas, albaranes o informes del fabricante. Al indicar un número de factura o la signatura de un archivador, el personal del estudio puede mostrar los comprobantes en papel ante una inspección higiénico-sanitaria.

### ¿Se pueden exportar las fechas de mantenimiento al calendario de Google o Apple?
Sí, al pulsar en `Descargar archivo .ics` junto a cualquier equipo pendiente de revisión se descarga un archivo de evento estándar. Al abrir este archivo puede integrarlo al instante en Google Calendar, Apple Calendar o Microsoft Outlook para disponer de alarmas locales.

### ¿Cómo se calcula la diferencia de horas de funcionamiento entre servicios?
Al indicar la cifra del contador de horas durante un servicio, el sistema localiza el registro previo guardado para esa máquina concreta y ese mismo tipo de trabajo. Resta el valor anterior del valor actual y muestra el número exacto de horas de funcionamiento acumuladas entre las dos revisiones.

## Límites del sistema

El Registro de mantenimiento de máquinas es un recurso para la organización administrativa y el control de costes del estudio, pero no puede determinar el estado mecánico de los equipos. El software no tiene capacidad para diagnosticar fatiga en los motores, holguras en los rodamientos, fallos de aislamiento eléctrico, pérdida de tensión en los muelles ni la eficacia de los procesos de esterilización.

Los tatuadores, anilladores y responsables del estudio son los únicos encargados de comprobar físicamente sus herramientas, verificar la seguridad de las conexiones eléctricas, respetar los manuales del fabricante y cumplir las normas de higiene vigentes. El archivo informático es un apoyo a la labor diaria en el taller, pero en ningún caso reemplaza la revisión técnica directa por parte de un mecánico cualificado.
