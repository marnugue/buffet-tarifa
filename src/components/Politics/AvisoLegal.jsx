import React from "react";
import data from "/src/assets/data.json"

const AvisoLegal = () => {
    return ( <React.Fragment>

<h1 className="pt-4 text-center">AVISO LEGAL </h1>

<div className="p-2 p-md-4">
<p className="text-dark">La presente documentación de Cumplimiento LSSI-CE ha sido elaborada bajo la responsabilidad de {data["apellidos"]}, {data["nombre"]}, que responde de la veracidad y exactitud de las informaciones aportadas para la confección de las Documentación. </p>

<p className="text-dark">En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), le informamos de que: {data["apellidos"]} {data["nombre"]} (en adelante “{data["url"]}” {data["nombre"]} {data["apellidos"]} ABOGADO). Su NIF es  {data["dni"]} y tiene su domicilio en Calle General Copons 7, Bajo A – 11380 TARIFA- CADIZ.</p>

<div>Datos de contacto:</div>
<div>Teléfono: 9566627070</div>
<div>E-mail: {data["email"]}</div>
<br />
<h5 className="text-dark">Condiciones generales de uso del sitio web “{data["url"]}” {data["nombre"]} {data["apellidos"]} ABOGADO </h5>

<p className="text-dark">El nombre de dominio “{data["url"]}” es titularidad de {data["nombre"]} {data["apellidos"]} ABOGADO y su uso exclusivo está reservado a éste.</p>

<p className="text-dark">El portal oficial de“{data["url"]}”, tiene por objeto facilitar al público, en general, el conocimiento de las actividades que esta Organización realiza y de los productos y servicios que presta en materia de Abogado.</p>

<p className="text-dark">El uso de este sitio Web implica la expresa y plena aceptación de las condiciones aquí expuestas, sin perjuicio de aquellas particulares que pudieran aplicarse a algunos de los productos o servicios concretos ofrecidos a través del sitio Web.</p>

<p className="text-dark"> {data["nombre"]} {data["apellidos"]} ABOGADO se reserva la facultad de efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones y actualizaciones de la información contenida en su Web o en la configuración y presentación de ésta. </p>

<p className="text-dark">Con objeto de mantener actualizada la información publicada en el portal, los contenidos del mismo podrán ser modificados, corregidos, eliminados o añadidos en cualquier momento, por lo que será conveniente comprobar la vigencia o exactitud de los mismos acudiendo a las fuentes oficiales.</p>

<p className="text-dark">Propiedad intelectual, industrial y frames Todos los elementos que forman el sitio Web, así como su estructura, diseño, código fuente, así como los logos, marcas y demás signos distintivos que aparecen en la misma, son titularidad de {data["nombre"]} {data["apellidos"]} – ABOGADO- o de sus colaboradores y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.
Igualmente están protegidos por los correspondientes derechos de propiedad intelectual e industrial las imágenes y otros elementos gráficos contenidos en los portales.</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]} ABOGADO prohíbe expresamente la realización de “framings” o la utilización por parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o contenidos de nuestros portales. El uso de los contenidos deberá respetar su licenciamiento particular. De tal modo su uso, reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar o análoga, queda totalmente prohibida salvo que medie previa y expresa autorización de {data["nombre"]} {data["apellidos"]}. </p> 

<p className="text-dark">Respecto a las citas de noticias, productos y servicios de terceros, que puedan aparecer en la Web, “{data["url"]}” reconoce a favor de sus titulares los correspondientes derechos de propiedad industrial e intelectual, no implicando su sola mención o aparición en la Web la existencia de derechos ni de responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación. {data["nombre"]} {data["apellidos"]} – ABOGADO- declara su respeto a los derechos de propiedad intelectual e industrial de terceros; por ello, si considera que nuestros portales pudieran estar violando sus derechos, rogamos se ponga en contacto con {data["nombre"]} {data["apellidos"]}- ABOGADO-. </p>

<h5 className="text-dark">Responsabilidad</h5>

<p className="text-dark">{data["nombre"]} {data["apellidos"]}- ABOGADO- no garantiza la inexistencia de errores en el acceso a la Web, en su contenido, ni que éste se encuentre actualizado, aunque {data["nombre"]} {data["apellidos"]} ABOGADO desarrollará sus mejores esfuerzos para, en su caso, evitarlos, subsanarlos o actualizarlos.</p>

<p className="text-dark">Tanto el acceso a los portales de {data["nombre"]} {data["apellidos"]}- ABOGADO- como el uso que pueda hacerse de la información contenida en los mismos es de la exclusiva responsabilidad de quien lo realiza.</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]} ABOGADO no se hace responsable de los posibles errores de seguridad que se puedan producir ni de los posibles daños que puedan causarse al sistema informático del Usuario (hardware y software), los ficheros o documentos almacenados en el mismo, como consecuencia de la presencia de virus en el ordenador del Usuario utilizado para la conexión a los servicios y contenidos de la Web, de un mal funcionamiento del navegador o del uso de versiones no actualizadas del mismo.</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]}- ABOGDADO no se hace responsable de la información y contenidos almacenados, a título enunciativo, pero no limitativo, en foros, chats, blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web de {data["nombre"]} {data["apellidos"]}-ABOGADO-.</p>

<p className="text-dark">No obstante, y en cumplimiento de lo dispuesto en la LSSI, {data["nombre"]} {data["apellidos"]} ABOGADO se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, y colaborando de forma activa en la retirada o en su caso bloqueo de todos aquellos contenidos que pudieran afectar o contravenir la legislación nacional, o internacional, derechos de terceros o la moral y el orden público. En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, rogamos se ponga en contacto con {data["nombre"]} {data["apellidos"]} ABOGADO.</p>

<h5 className="text-dark">Links o hiperenlaces</h5>

<p className="text-dark">La Web puede contener enlaces a contenidos que dirijan a contenidos Web de terceros. El objetivo de dichos enlaces es únicamente facilitarle la búsqueda de los recursos que le puedan interesar a través de Internet. No obstante, dichas páginas no pertenecen a {data["nombre"]} {data["apellidos"]}- ABOGADO-, ni hace una revisión de sus contenidos y, por ello, {data["nombre"]} {data["apellidos"]}- ABOGADO no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre {data["nombre"]} {data["apellidos"]} ABOGADO y a las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren. {data["nombre"]} {data["apellidos"]} ABOGADO tampoco puede hacerse responsable del funcionamiento de la página enlazada o de los posibles daños que puedan derivarse del acceso o uso de la misma.</p>

<p className="text-dark">Los enlaces a la web de “{data["url"]}” deberán respetar las siguientes condiciones:</p>
<ol>
    <li>El establecimiento del enlace no supondrá per se ningún tipo de acuerdo, contrato, patrocinio ni recomendación por parte de {data["nombre"]} {data["apellidos"]} –ABOGADO- de la página que realiza el enlace.</li>

    <li>La página web en la que se establezca el hiperenlace no contendrá informaciones con contenidos que sean ilícitos, discriminatorios, contrarios a los principios éticos comúnmente aceptados o atenten contra el orden público, así como tampoco contendrá contenidos contrarios a cualesquiera derechos de terceros.</li>

    <li>{data["nombre"]} {data["apellidos"]}-ABOGADO- podrá solicitar que se retire un enlace a su web, sin necesidad de alegar causa alguna. En tal caso, la página que haya realizado el enlace deberá proceder a su inmediata supresión, tan pronto como reciba la notificación {data["nombre"]} {data["apellidos"]}- ABOGADO-.</li>
    
    <li> No se responsabiliza en modo alguno ni garantiza la calidad, exactitud, fiabilidad, corrección o moralidad de contenidos o servicios que el establecimiento del hiperenlace pueda ofrecer. El usuario asume bajo su exclusiva responsabilidad las consecuencias, daños o acciones que pudieran derivarse del acceso a la página web del hiperenlace.</li>
</ol>



<h5 className="text-dark">Protección de Datos Personales</h5>

<p className="text-dark">{data["nombre"]} {data["apellidos"]} –ABOGADO- se encuentra profundamente comprometido con el cumplimiento de la normativa de protección de datos de carácter personal, y garantiza el cumplimiento íntegro de las obligaciones dispuestas, así como la implementación de las medidas de seguridad apropiadas para garantizar un nivel de seguridad adecuado al riesgo. {data["nombre"]} {data["apellidos"]} –ABOGADO-pone a disposición de los usuarios su Política de Privacidad y le ofrece información ampliada del tratamiento de datos realizado por la Entidad:</p>

<h4>INFORMACIÓN ADICIONAL SOBRE PROTECCIÓN DE DATOS</h4>

<h5 className="text-dark">¿Quién es el responsable del tratamiento de sus datos?</h5>

<div>Identidad:      {data["apellidos"]}, {data["nombre"]}, {data["dni"]}</div>
<div>Dir. Postal:     {data["direccion"]} {data["ciudad"]} CADIZ</div>
<div>Teléfono:        {data["telefono"]}</div>
<div>Correo electrónico:  {data["email"]}</div>

<h5 className="text-dark">¿Con qué finalidad tratamos sus datos personales?</h5>

<p className="">En {data["nombre"]} {data["apellidos"]} – ABOGADO- tratamos la información que nos facilitan nuestros grupos de interés para los siguientes tratamientos:</p>

<h5 className="text-dark">Tratamiento datos, finalidad del tratamiento, plazo conservación datos</h5>

<h4>Gestión de clientes, contable, fiscal y administrativa</h4>

<p className="text-dark">No se tomarán decisiones automatizadas en base a dicho perfil. Los datos personales tratados se conservarán en todo caso mientras sean necesarios para la finalidad del tratamiento, y se suprimirán a solicitud del interesado, o una vez finalizado el tratamiento sin perjuicio de su conservación por los plazos establecidos en normativa de aplicación para atender posibles responsabilidades.</p>

<h4>¿Cuál es la legitimación para el tratamiento de los mismos?</h4>

<p className="text-dark">Las bases legales para el tratamiento de datos personales en {data["nombre"]} {data["apellidos"]}- ABOGADO son las siguientes:</p>

<h5 className="text-dark">Tratamiento datos, Legitimación tratamiento</h5>

<p className="text-dark">Consentimiento del interesado que podrá retirar en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>

<h4>¿A qué destinatarios se comunicarán sus datos?</h4>

<p className="text-dark">La realización de estos tratamientos puede implicar la conexión de sus datos con tratamientos realizados por terceros. Le informamos a continuación de las previsiones en relación a la cesión de sus datos.</p>

<h4>Tratamiento datos, Previsión de cesiones, Transferencias internacionales</h4>

<div>Los datos se comunicarán a :</div>
<ul>
    <li>ADMINISTRACIÓN PÚBLICA CON COMPETENCIA EN LA MATERIA</li>
    <li>ENTIDADES BANCARIAS O FINANCIERAS</li>
    <li>No se transferirán datos fuera de la UE.</li>
</ul>

<h4>¿Cuáles son sus derechos cuando nos facilita sus datos?</h4>

<p className="text-dark">Cualquier persona tiene derecho a obtener confirmación sobre si en {data["nombre"]} {data["apellidos"]} ABOGADO estamos tratando datos personales que le conciernan, o no.</p>

<p className="text-dark">Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</p>

<p className="text-dark">En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o defensa de reclamaciones.</p>

<p className="text-dark">En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. {data["nombre"]} {data["apellidos"]} ABOGADO dejará de tratar los datos, salvo por motivos legítimos e imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</p>

<p className="text-dark">Asimismo, en determinadas circunstancias y cuando sea técnicamente posible, los interesados tienen derecho a que los datos personales se transmitan directamente a otro responsable a solicitud suya.</p>

<p className="text-dark">Para el ejercicio de estos derechos, póngase en contacto con nosotros dirigiendo un escrito a:</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]} ABOGADO, {data["direccion"]} {data["ciudad"]} CADIZ , o bien por e-mail a {data["email"]} acompañado de copia de su DNI.</p>

<p className="text-dark">De igual modo, puede ponerse en contacto con la Agencia Española de Protección de Datos, para formular una reclamación, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</p>

<h4>INFORMACIÓN ADICIONAL SOBRE PROTECCIÓN DE DATOS</h4>

<h5 className="text-dark">¿Quién es el Responsable del tratamiento de sus datos?</h5>

<div>Identidad:     {data["apellidos"]}, {data["nombre"]}- {data["dni"]}</div>

<div>Dir. Postal:      {data["direccion"]} {data["ciudad"]} CADIZ</div>

<div>Teléfono:        {data["telefono"]}</div>

<div>Correo electrónico:  {data["email"]}</div>

<h5 className="text-dark">¿Con qué finalidad tratamos sus datos personales?</h5>

<p className="text-dark">En {data["nombre"]} {data["apellidos"]}-ABOGADO- tratamos la información que nos facilitan nuestros grupos de interés para los siguientes tratamientos:</p>

<h4>Tratamiento datos      Finalidad del tratamiento      Plazo conservación datos</h4>

<h5 className="text-dark">GESTIÓN DE CLIENTES, CONTABLE, FISCAL Y ADMINISTRATIVA</h5>

<p className="text-dark">No se tomarán decisiones automatizadas en base a dicho perfil.   Los datos personales tratados se conservarán en todo caso mientras sean necesarios para la finalidad del tratamiento, y se suprimirán a solicitud del interesado, o una vez finalizado el tratamiento sin perjuicio de su conservación por los plazos establecidos en normativa de aplicación para atender posibles responsabilidades.</p>

<h5 className="text-dark">¿Cuál es la legitimación para el tratamiento de los mismos?</h5>

<p className="text-dark">Las bases legales para el tratamiento de datos personales en {data["url"]} son las siguientes:</p>

<h5 className="text-dark">Tratamiento datos      Legitimación tratamiento</h5>

<p className="text-dark">FORMULARIO WEB    Consentimiento del interesado que podrá retirar en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>

<h5 className="text-dark">¿A qué destinatarios se comunicarán sus datos?</h5>

<p className="text-dark">La realización de estos tratamientos puede implicar la conexión de sus datos con tratamientos realizados por terceros. Le informamos a continuación de las previsiones en relación a la cesión de sus datos.</p>

<h5 className="text-dark">¿Cuáles son sus derechos cuando nos facilita sus datos?</h5>

<p className="text-dark">Cualquier persona tiene derecho a obtener confirmación sobre si en {data["nombre"]} {data["apellidos"]} ABOGADO estamos tratando datos personales que le conciernan, o no.</p>

<p className="text-dark">Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</p>

<p className="text-dark">En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o defensa de reclamaciones. En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. {data["nombre"]} {data["apellidos"]} ABOGADO dejará de tratar los datos, salvo por motivos legítimos e imperiosos, o el ejercicio o la defensa de posibles reclamaciones. Asimismo, en determinadas circunstancias y cuando sea técnicamente posible, los interesados tienen derecho a que los datos personales se transmitan directamente a otro responsable a solicitud suya.</p>

<p className="text-dark">Para el ejercicio de estos derechos, póngase en contacto con nosotros dirigiendo un escrito a:</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]} ABOGADO, {data["direccion"]} {data["ciudad"]} CADIZ , o bien por e-mail a {data["email"]}  acompañado de copia de su DNI.</p>

<p className="text-dark">De igual modo, puede ponerse en contacto con la Agencia Española de Protección de Datos, para formular una reclamación, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</p>

<h4>INFORMACIÓN ADICIONAL SOBRE PROTECCIÓN DE DATOS</h4>

<h5 className="text-dark">¿Quién es el Responsable del tratamiento de sus datos?</h5>

<div>Identidad:     {data["apellidos"]}, {data["nombre"]}- {data["dni"]}</div>

<div>Dir. Postal:      {data["direccion"]} {data["ciudad"]} CADIZ</div>

<div>Teléfono:        {data["telefono"]}</div>

<div>Correo electrónico:  {data["email"]}</div>

<h5 className="text-dark">¿Con qué finalidad tratamos sus datos personales?</h5>

<p className="text-dark">En {data["nombre"]} {data["apellidos"]} ABOGADO  tratamos la información que nos facilitan nuestros grupos de interés para los siguientes tratamientos:</p>

<h4>Tratamiento datos      Finalidad del tratamiento      Plazo conservación datos</h4>

<h5 className="text-dark">PROVEEDORES, GESTIÓN DE CLIENTES, CONTABLE, FISCAL Y ADMINISTRATIVA</h5>

<p className="text-dark">No se tomarán decisiones automatizadas en base a dicho perfil.   Los datos personales tratados se conservarán en todo caso mientras sean necesarios para la finalidad del tratamiento, y se suprimirán a solicitud del interesado, o una vez finalizado el tratamiento sin perjuicio de su conservación por los plazos establecidos en normativa de aplicación para atender posibles responsabilidades.</p>

<h5 className="text-dark">¿Cuál es la legitimación para el tratamiento de los mismos?</h5>

<p className="text-dark">Las bases legales para el tratamiento de datos personales en {data["url"]} son las siguientes:</p>

<h4>Tratamiento datos      Legitimación tratamiento</h4>

<p className="text-dark">Consentimiento del interesado que podrá retirar en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>

<h5 className="text-dark">¿A qué destinatarios se comunicarán sus datos?</h5>

<p className="text-dark">La realización de estos tratamientos puede implicar la conexión de sus datos con tratamientos realizados por terceros. Le informamos a continuación de las previsiones en relación a la cesión de sus datos.</p>

<h4>Tratamiento datos      Previsión de cesiones Transferencias internacionales</h4>

<p className="text-dark">Los datos se comunicarán a:</p>
<ul>

<li>ADMINISTRACIÓN PÚBLICA CON COMPETENCIA EN LA MATERIA</li>

<li>ENTIDADES BANCARIAS O FINANCIERAS       No se transferirán datos fuera de la UE.</li>

</ul>

<h5 className="text-dark">¿Cuáles son sus derechos cuando nos facilita sus datos?</h5>

<p className="text-dark">Cualquier persona tiene derecho a obtener confirmación sobre si en {data["nombre"]} {data["apellidos"]}-ABOGADO estamos tratando datos personales que le conciernan, o no.</p>

<p className="text-dark">Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</p>

<p className="text-dark">
    En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o defensa de reclamaciones.
    En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos.  {data["nombre"]} {data["apellidos"]} ABOGADO dejará de tratar los datos, salvo por motivos legítimos e imperiosos, o el ejercicio o la defensa de posibles reclamaciones.
</p>
<p className="text-dark">Asimismo, en determinadas circunstancias y cuando sea técnicamente posible, los interesados tienen derecho a que los datos personales se transmitan directamente a otro responsable a solicitud suya.</p>

<p className="text-dark">Para el ejercicio de estos derechos, póngase en contacto con nosotros dirigiendo un escrito a:</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]}, {data["direccion"]} {data["ciudad"]} CADIZ , o bien por e-mail a {data["email"]}  acompañado de copia de su DNI.</p>

<p className="text-dark">De igual modo, puede ponerse en contacto con la Agencia Española de Protección de Datos, para formular una reclamación, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</p>

<h4>INFORMACIÓN ADICIONAL SOBRE PROTECCIÓN DE DATOS</h4>

<h5 className="text-dark">¿Quién es el Responsable del tratamiento de sus datos?</h5>

<div>Identidad:     {data["apellidos"]}, {data["nombre"]}- {data["dni"]}</div>

<div>Dir. Postal:      {data["direccion"]} {data["ciudad"]} CADIZ</div>

<div>Teléfono:        {data["telefono"]}</div>

<div>Correo electrónico:  {data["email"]}</div>

<h5 className="text-dark">¿Con qué finalidad tratamos sus datos personales?</h5>

<p className="text-dark">En {data["nombre"]} {data["apellidos"]} ABOGADO tratamos la información que nos facilitan nuestros grupos de interés para los siguientes tratamientos:</p>

<h5 className="text-dark">Tratamiento datos      Finalidad del tratamiento      Plazo conservación datos</h5>

<h4>TRABAJADORA ,RECURSOS HUMANOS</h4>

<p className="text-dark">No se tomarán decisiones automatizadas en base a dicho perfil.</p>

<h5 className="text-dark">GESTIÓN DE NÓMINAS</h5>

<p className="text-dark">No se tomarán decisiones automatizadas en base a dicho perfil.   Los datos personales tratados se conservarán en todo caso mientras sean necesarios para la finalidad del tratamiento, y se suprimirán a solicitud del interesado, o una vez finalizado el tratamiento sin perjuicio de su conservación por los plazos establecidos en normativa de aplicación para atender posibles responsabilidades.</p>

<h5 className="text-dark">¿Cuál es la legitimación para el tratamiento de los mismos?</h5>

<p className="text-dark">Las bases legales para el tratamiento de datos personales en {data["nombre"]} {data["apellidos"]} ABOGADO son las siguientes:</p>

<h5 className="text-dark">Tratamiento datos, Legitimación tratamiento</h5>

<p className="text-dark">Consentimiento del interesado que podrá retirar en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</p>

<h5 className="text-dark">¿A qué destinatarios se comunicarán sus datos?</h5>

<p className="text-dark">La realización de estos tratamientos puede implicar la conexión de sus datos con tratamientos realizados por terceros. Le informamos a continuación de las previsiones en relación a la cesión de sus datos.</p>

<h4>Tratamiento datos      Previsión de cesiones Transferencias internacionales</h4>

<p className="text-dark">Los datos se comunicarán a :</p>

<ul>

<li>ADMINISTRACIÓN PÚBLICA CON COMPETENCIA EN LA MATERIA</li>

<li>ENTIDADES BANCARIAS O FINANCIERAS       No se transferirán datos fuera de la UE.</li>

</ul>


<h5 className="text-dark">¿Cuáles son sus derechos cuando nos facilita sus datos?</h5>

<p className="text-dark">Cualquier persona tiene derecho a obtener confirmación sobre si en {data["nombre"]} {data["apellidos"]}- ABOGADO estamos tratando datos personales que le conciernan, o no.</p>

<p className="text-dark">Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines para los que fueron recogidos.</p>

<p className="text-dark">En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o defensa de reclamaciones.</p>

<p className="text-dark">En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. {data["url"]} dejará de tratar los datos, salvo por motivos legítimos e imperiosos, o el ejercicio o la defensa de posibles reclamaciones.</p>

<p className="text-dark">Asimismo, en determinadas circunstancias y cuando sea técnicamente posible, los interesados tienen derecho a que los datos personales se transmitan directamente a otro responsable a solicitud suya.</p>

<p className="text-dark">Para el ejercicio de estos derechos, póngase en contacto con nosotros dirigiendo un escrito a:</p>

<p className="text-dark">{data["nombre"]} {data["apellidos"]} ABOGADO, {data["direccion"]} {data["ciudad"]} CADIZ , o bien por e-mail a {data["email"]}  acompañado de copia de su DNI.</p>

<p className="text-dark">De igual modo, puede ponerse en contacto con la Agencia Española de Protección de Datos, para formular una reclamación, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos.</p>

<p className="text-dark">Ley aplicable y jurisdicción La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso Legal, así como cualquier cuestión relacionada con los servicios del presente Portal, será la ley española.</p>

<p className="text-dark">Para la resolución de cualquier conflicto que pueda surgir con ocasión de la visita al Portal o del uso de los servicios que en él se puedan ofertar, {data["nombre"]} {data["apellidos"]}-ABOGADO- y el Usuario acuerdan someterse a los Jueces y Tribunales de domicilio de {data["nombre"]} {data["apellidos"]}  ABOGADO.</p>
</div>

</React.Fragment>
    )
}
export default AvisoLegal;