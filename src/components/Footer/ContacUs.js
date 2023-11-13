import React from "react";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { BsTelegram, BsDiscord } from "react-icons/bs";
import "../../index.css";

const ContacUs = () => {
    return (
        <div>
            <h3 className="text-center text-info m-3">
                    Redes Sociales
                </h3>
            <p className="mt-4 mx-5 px-5 text-light text-center">
                A continuación, nuestras redes sociales y el formulario de contacto, donde encontrarás las últimas novedades sobre las películas más recientes o contactarnos, directamente desde la comodidad de tu hogar. Te invitamos cordialmente a unirte a nuestra comunidad en línea y seguirnos en las siguientes redes.  ¡No te pierdas ni una sola actualización!
            </p>
            <div className="d-flex justify-content-evenly row text-light">
                <div className="m-1 text-center">
                    <button className="btn btn-outline-primary p-2 " type="submit" >
                        <AiFillFacebook className="fs-1"/>
                    </button>
                    <p>Facebook</p>
                </div>
                <div className="m-1 text-center">
                    <button className="btn btn-outline-primary p-2" type="submit">
                        <AiOutlineInstagram className="fs-1"/>
                    </button>
                    <p>Instagram</p>
                </div>
                <div className="m-1 text-center">
                    <button className="btn btn-outline-primary p-2" type="submit">
                        <RiTwitterXFill className="fs-1"/>
                    </button>
                    <p>Twitter</p>
                </div>
                <div className="m-1 text-center">
                    <button className="btn btn-outline-primary p-2"
                        type="submit">
                        <AiOutlineYoutube className="fs-1"/>
                    </button>
                    <p>Youtube</p>
                </div>
                <div className="m-1 text-center">
                    <button className="btn btn-outline-primary p-2" type="submit">
                        <BsTelegram className="fs-1"/>
                    </button>
                    <p>Telegram</p>
                </div>
                <div className="m-1 text-center">
                    <button className="btn btn-outline-primary p-2" type="submit">
                        <BsDiscord className="fs-1"/>
                    </button>
                    <p>Discord</p>
                </div>
            </div>
        </div>
    );
};

export default ContacUs;