import React from "react"
import "./InfoCards.css"
import PropTypes from "prop-types"

const infoText = {
  card_1_info: (
    <>
      Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos
      buscador, bloqueador de rastreadores y mejora de encriptación todo en
      una&nbsp;
      <a
        href="https://duckduckgo.com/app"
        target="_blank"
        rel="noopener noreferrer"
      >
        extensión de Chrome
      </a>
    </>
  ),
  card_2_info: (
    <>
      Busca de forma privada con nuestra app o extensión, añade búsqueda web
      privada a tu navegador preferido o busca en&nbsp;
      <a
        href="https://duckduckgo.com/app"
        target="_blank"
        rel="noopener noreferrer"
      >
        duckduckgo.com.
      </a>
    </>
  ),
  card_3_info: (
    <>
      Nuestro navegador privado para móviles viene equipado con nuestro motor de
      búsqueda, bloqueador de rastreadores, mejora de encriptación y más.
      Disponible para&nbsp;
      <a
        href="https://duckduckgo.com/app"
        target="_blank"
        rel="noopener noreferrer"
      >
        iOS y Android.
      </a>
    </>
  ),
}

const Card = ({ img, title, info }) => {
  return (
    <div className="info_card">
      <img src={img} alt="Laptop" className="img_card" />
      <div className="card_title">{title}</div>
      <div className="card_info">{info}</div>
    </div>
  )
}

const InfoCards = () => {
  return (
    <div className="info_cards_cont">
      <Card
        img="src/assets/laptop.svg"
        title="Privacidad para Chrome"
        info={infoText.card_1_info}
      />
      <Card
        img="src/assets/search.svg"
        title="Motor de Búsqueda Privada"
        info={infoText.card_2_info}
      />
      <Card
        img="src/assets/mobile.svg"
        title="Navegador Privado"
        info={infoText.card_3_info}
      />
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  info: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: "Título",
}

export default InfoCards
