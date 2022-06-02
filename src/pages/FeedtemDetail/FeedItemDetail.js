import React from "react";
import "./FeedItemDetail.css";
import { Rating } from "react-simple-star-rating";

function FeedItemDetail() {
  return (
    <div className="item_main">
      <div className="item_title">
        <span className="item_span">Apresentação de dança</span>
      </div>
      <div className="item_description">
        Apresentação teatral do grupo de atores de rua. A peça mostra a história
        de um jovem que ao se mudar para uma nova cidade descobre que está
        proibido de dançar por conta de uma lei imposta na cidade após um
        acidente.
      </div>
      <div className="description_field">
        <span className="description_name">Avaliações</span>
        <span>
          Muito bom! <Rating ratingValue={5} size={20} />
        </span>
        <p>ótima apresentação, os atores eram muito bons, dançavam bem!</p>
        <b>ver mais...</b>
      </div>
      <div className="description_field">
        <span className="description_name">Preço</span>
        <p>Ingresso: R$30,00</p>
        <p>Meia-entrada: R$15,00</p>
      </div>
      <div>
        <span className="description_name">Localização</span>
        <div
          className="description_map"
          style={{
            backgroundImage: `url('https://cdn.filestackcontent.com/kzm0jTTAQMPr7x8TbC69')`,
          }}
        ></div>
      </div>
    </div>
  );
}
export default FeedItemDetail;
