import React from "react";
import "./FeedItemDetail.css";
import { Rating } from "react-simple-star-rating";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { libraries } from "../FeedPage/FeedPage";
import moment from "moment";

function Map(props) {
  let centers = { lat: parseFloat(props.lat), lng: parseFloat(props.lng) };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });

  if (loadError) return "Error loading Maps";
  if (!isLoaded) return "Loading maps";

  const mapContainerStyle = {
    width: "74vw",
    height: "50vh",
  };

  const options = {
    styles: [
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            color: "#878787",
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f9f5ed",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#aee0f4",
          },
        ],
      },
    ],
    disableDefaultUI: true,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={centers}
      options={options}
    >
      {isLoaded && <Marker position={centers} title="Local" />}
    </GoogleMap>
  );
}

function FeedItemDetail(props) {
  const { modalInfo } = props;

  return (
    <div className="item_main">
      <div className="item_title">
        <span className="item_span">{modalInfo?.name}</span>
      </div>
      <div className="item_description">
        <span>{modalInfo?.description || modalInfo?.name} </span>
      </div>
      <div className="description_field">
        <span className="description_name">Avaliações</span>
        <span>
          <Rating ratingValue={modalInfo?.rating} size={20} />
        </span>
        <p>Nenhuma avaliação até o momento. :)</p>
      </div>
      {modalInfo.type !== "lazer" && (
        <div className="description_field">
          <span className="description_name">Preço</span>
          <p>Ingresso: R$0,00</p>
          <p>Meia-entrada: R$0,00</p>
        </div>
      )}
      {modalInfo.type !== "lazer" && (
        <div className="description_field">
          <span className="description_name">Data</span>
          <p>{moment(modalInfo.event_date_hour).format("DD-MM-YY, hh:mm")}</p>
        </div>
      )}
      <div>
        <span className="description_name">Localização</span>
        <p>{modalInfo?.address}</p>
        <Map
          lat={modalInfo?.event_coordinates[0]}
          lng={modalInfo?.event_coordinates[1]}
        />
      </div>
    </div>
  );
}
export default FeedItemDetail;
