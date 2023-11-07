import React, { useState } from "react";
import "./ayuda.css";
import Commentss from "./commentss";

function Questions() {
    
    return (
        <div>
            <div>
                <h3 className="text-center text-info p-3">
                    Preguntas Frecuentes
                </h3>
            </div>
            <div className="row m-3 my-1">
                <div className="col-4 border border-info p-2 mb-2 bg-dark p-3">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link" href="#item-1">¿Cómo puedo ver la informacion de la película o serie?</a>
                            <a className="nav-link" href="#item-1-1">¿Como reproducir una pelicula?</a>
                            <a className="nav-link" href="#item-2">¿Como buscar una pelicula?</a>
                            <a className="nav-link" href="#item-3">La película no me funciona</a>
                            <a className="nav-link" href="#item-3-1">¿Qué hago si tengo problemas de reproducción?</a>
                            <a className="nav-link" href="#item-4">¿Puedo descargar películas para verlas sin conexión?</a>
                            <a className="nav-link" href="#item-5">¿Ofrecen contenido en varios idiomas o con subtítulos?</a>
                            <a className="nav-link" href="#item-6">¿Cómo puedo contactar con el servicio de asistencia?</a>
                        </nav>
                    </nav>
                </div>
                <div className="col-8 border border-info p-2 mb-2 bg-dark text-light p-3">
                    <div className="overflow-container ">
                        <div id="item-1">
                            <h5>¿Cómo puedo ver la película o serie?</h5>
                            <p>
                                Cuando encuentres la película o serie que capte tu interés, por lo general, se presentará a través de un póster o una imagen representativa que la identifica. En este punto, el siguiente paso es sencillo: basta con hacer clic en el póster de la película o serie que desees ver.</p>
                            <p>
                                Una vez que hayas hecho clic en el póster, te conducirán automáticamente a la página de información de la película o serie seleccionada. En esta página, te esperan una serie de detalles esenciales, como el título, la sinopsis que te ofrece una breve introducción a la trama, la lista de actores y actrices que participan, el nombre del director, la duración de la película y su género característico.</p>
                            <p>
                                Además, como un recurso valioso, en la mayoría de los casos, encontrarás un tráiler disponible para su visualización. Este tráiler te permite obtener un adelanto emocionante y cautivador de la película o serie, permitiéndote evaluar si es la elección perfecta antes de comenzar a verla. Este tráiler es una herramienta útil para despertar tu curiosidad y decidir si deseas disfrutar del contenido en su totalidad.
                            </p>
                        </div>
                        <div id="item-1-1">
                            <h5>¿Como reproducir una pelicula?</h5>
                            <p>
                                Si decides ver la película, busca un ícono de reproducción o "play" en la página de información. Este ícono suele tener forma de un triángulo ▶️ y se encuentra en un lugar prominente. Al hacer clic en este ícono, comenzará la reproducción de la película o serie en tu pantalla.</p>
                            <p>
                                Controles de Reproducción: Durante la reproducción, generalmente tendrás acceso a controles de reproducción, como pausar, retroceder, avanzar y ajustar el volumen. Estos controles te permiten personalizar tu experiencia de visualización.
                            </p>
                        </div>
                        <div id="item-2">
                            <h5>¿Como buscar una pelicula?</h5>
                            <p>Buscar una película en nuestro sitio es sencillo. A continuación, te indicamos los pasos a seguir:
                            </p>
                            <ol>
                                <li>Barra de Búsqueda: En la parte superior de nuestra página principal, encontrarás una barra de búsqueda. Simplemente haz clic en ella o selecciona el campo de búsqueda.
                                </li>
                                <li>Escribe el título de la película que deseas buscar o palabras clave relacionadas con ella. </li>
                                <li>
                                    Presiona "Buscar": Una vez que hayas ingresado la información, presiona la tecla "Enter" o el ícono de búsqueda (generalmente representado por una lupa) para iniciar la búsqueda.
                                </li>
                                <li>
                                    Resultados de la Búsqueda: Nuestra plataforma te mostrará una lista de películas y series que coinciden con tu búsqueda. Puedes hacer clic en el póster o título de la película para acceder a su página de información.
                                </li>
                                <li>
                                    <p>
                                        Además, para una búsqueda más precisa, puedes utilizar nuestras opciones de filtrado:
                                    </p>
                                    <ul>
                                        <li>
                                            Filtrar por Año de Estreno: Si deseas buscar películas lanzadas en un año específico, utiliza la opción de filtrar por año de estreno en la parte superior de la página de resultados de búsqueda. Simplemente selecciona el año deseado y se mostrarán las películas que correspondan a ese año.
                                        </li>
                                        <li>
                                            Filtrar por Tipo de Contenido: También puedes refinar tu búsqueda según el tipo de contenido que estás buscando, como películas, series, documentales, etc. Utiliza la opción de filtrar por tipo de contenido y selecciona la categoría que desees para encontrar exactamente lo que estás buscando.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <div id="item-3">
                            <h5>La película no me funciona</h5>
                            <p>Si experimentas problemas al intentar ver una película o serie en nuestro sitio, aquí hay algunas soluciones comunes para resolverlos:</p>
                            <ol>
                                <li>Comprueba tu Conexión a Internet: Asegúrate de que tu conexión a Internet esté funcionando correctamente. Problemas de velocidad o conectividad pueden causar interrupciones en la transmisión.</li>
                                <li>Actualiza tu Navegador o Aplicación: Asegúrate de que estás utilizando la última versión de tu navegador web Las actualizaciones a menudo solucionan problemas de compatibilidad y errores.</li>
                                <li>Borra la Caché: Borrar la caché del navegador o la aplicación puede ayudar a eliminar problemas de carga. Consulta la configuración de tu navegador o aplicación para hacerlo.</li>
                                <li>Verifica la Configuración de Reproducción: Asegúrate de que la calidad de la reproducción esté configurada adecuadamente. Si tu conexión es lenta, puedes reducir la calidad para una transmisión más fluida.</li>
                                <li>Reinicia tu Dispositivo: A veces, simplemente reiniciar tu dispositivo (computadora, teléfono, tableta, televisor, etc.) puede solucionar problemas técnicos.</li>
                                <li>Prueba en Otro Dispositivo: Si el problema persiste en un dispositivo en particular, intenta ver la película en otro dispositivo para determinar si el problema está relacionado con el dispositivo</li>
                                <li>Contacta con Soporte: Si ninguno de los pasos anteriores resuelve el problema, no dudes en contactarnos a través de nuestra página de "Contacto." Estaremos encantados de ayudarte a resolver cualquier problema técnico que puedas estar experimentando.</li>
                            </ol>
                        </div>
                        <div id="item-3-1">
                            <h5>¿Qué hago si tengo problemas de reproducción?</h5>
                            <p>
                                Consulta la pregunta anterior sobre "La película no me funciona" para obtener soluciones a problemas comunes de reproducción.
                            </p>
                        </div>
                        <div id="item-4">
                            <h5>¿Puedo descargar películas para verlas sin conexión?</h5>
                            <p>
                                No, actualmente no ofrecemos la opción de descargar películas para verlas sin conexión. Sin embargo, puedes ver películas y series en nuestro sitio web en cualquier momento y en cualquier lugar, siempre que tengas una conexión a Internet.
                            </p>
                        </div>
                        <div id="item-5">
                            <h5>¿Ofrecen contenido en varios idiomas o con subtítulos?</h5>
                            <p>
                                Sí, ofrecemos una amplia variedad de contenido en varios idiomas y con subtítulos. Para ver una lista de los idiomas disponibles, consulta la página de información de la película o serie que deseas ver.
                            </p>
                        </div>
                        <div id="item-6">
                            <h5>¿Cómo puedo contactar con el servicio de asistencia?</h5>
                            <p>
                                Si tienes alguna pregunta o problema, no dudes en contactarnos a través de nuestra página de "Contacto". Estaremos encantados de ayudarte.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <Commentss />
                </div>
            </div>

        </div >

    );
}

export default Questions;
