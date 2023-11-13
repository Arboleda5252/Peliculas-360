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
            <div class="form-main text-light">
                <div class="main-wrapper">
                    <h2 class="form-head">Contact From</h2>
                    <form class="form-wrapper">
                    <div class="form-card">
                        <input class="form-input" type="text" name="full_name" required="required"/>
                        <label class="form-label" for="full_name">Full Name</label>
                    </div>

                    <div class="form-card">
                        <input class="form-input" type="email" name="email" required="required"/>
                        <label class="form-label" for="email">Email</label>
                    </div>

                    <div class="form-card">
                        <input class="form-input" type="number" name="phone_number" required="required"/>
                        <label class="form-label" for="phone_number">Phone number</label>
                    </div>

                    <div class="form-card">
                        <textarea class="form-textarea" maxlength="420" rows="3" name="phone_number" required="required"></textarea>
                        <label class="form-textarea-label" for="phone_number">Description</label>
                    </div>
                    <div class="btn-wrap">
                        <button> Submit </button>
                    </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-center text-light">
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