import React from "react";
import { Link } from "react-router-dom";

//c dentro de circulo, nombre de la pagina
//contacto
//redes sociales
//enlaces a contactanos o acerca de nosotros

const Footer = () => {
	return (
		<div className="bg-dark">
			<div className="container p-3 text-center fw-bold small text-light">
				<div className=" row">
					<p className="col">
						<Link to="/" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"> 
							Inicio
						</Link>
					</p>
					<p className="col">
						<Link to="/info" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
							Acerca de Peliculas360
						</Link>
					</p>
					<p className="col">
						<Link to="/contacUs" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
							Contáctenos
						</Link>
					</p>
					<p className="col">
						<Link to="/ayuda" className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
							Preguntas Frecuentes
						</Link>
					</p>
				</div>
				<div>
					<p>&copy; Peliculas360 es un servicio de pagina web de peliculas y series con una variedad de contenido, su contenido está sujeto a disponibilidad.</p>
				</div>
			</div>
		</div>

	);
};

export default Footer;