import React, {
  //  useContext,
    useEffect, useState } from "react";
import "./FeedPage.css";
import Input from "../../components/Input/Input";
import FeedChoice from "../../components/FeedChoice/FeedChoice";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { getAllPartners } from "../../actions/FeedAction";
import _ from "lodash";
// import { UserContext } from "../../hooks/UserContext";

function FeedPage() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [currentTab, setCurrentTab] = useState("cultural");
  const [eventsData, setEventsData] = useState([]);
  const [querySearch, setQuerySearch] = useState();
  const changeRoute = () => {
    navigate(`/options`);
  };

  useEffect(() => {
    async function apiCall() {
      const response = await getAllPartners();
      !!response && setEventsData(response.results);
    }
    if (currentTab === "cultural") {
      apiCall();
    } else {
      setModalInfo(``);
    }
  }, [currentTab]);

  // useEffect(() =>{
  //   // async function getUser = () =>
  //   console.log(eventsData);
  //   // const events = _.map(eventsData, x => x())
  // },[querySearch])

  const cardChoosed = (data) => {
    setModalInfo(data);
    setOpenModal(true);
  };

  const receiveNewTab = (data) => {
    setCurrentTab(data);
  };

  const onBlurSearch = (e) =>{
    const value = e.target.value;
    setQuerySearch(value);

  }

  return (
    <div className="Feedpage">
      {openModal && !_.isEmpty(modalInfo) && (
        <Modal data={modalInfo} opened={openModal} closeModal={setOpenModal} />
      )}
      <div>
        <Input
          search
          roundButton
          round
          placeholder
          onBlur={(e) => onBlurSearch(e)}
          buttonClick={() => changeRoute()}
        />
      </div>
      {eventsData && (
        <FeedChoice
          onCardClick={(data) => cardChoosed(data)}
          changeTab={(data) => receiveNewTab(data)}
          data={eventsData}
        />
      )}
    </div>
  );
}
export default FeedPage;

export const libraries = ["places"];
