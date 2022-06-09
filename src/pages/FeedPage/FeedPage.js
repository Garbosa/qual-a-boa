import React, {
  useContext,
  //  useContext,
  useEffect,
  useState,
} from "react";
import "./FeedPage.css";
import Input from "../../components/Input/Input";
import FeedChoice from "../../components/FeedChoice/FeedChoice";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { getAllPartners } from "../../actions/FeedAction";
import _ from "lodash";
import { UserContext } from "../../hooks/UserContext";
import { getUserData } from "../../actions/UserAction";

function FeedPage() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  const [currentTab, setCurrentTab] = useState("cultural");
  const [eventsData, setEventsData] = useState([]);
  const [querySearch, setQuerySearch] = useState();
  const [preferences, setPreferences] = useState();
  const [userData, setUserData] = useState();
  const changeRoute = () => {
    navigate(`/options`);
  };
  const { value } = useContext(UserContext);

  useEffect(() => {
    if (!_.isEmpty(value.token)) {
      async function apiCall() {
        const response = await getAllPartners(value.token);
        const getUser = await getUserData(value.userId, value.token);
        if (!!getUser) {
          setPreferences(getUser.user.preferences);
          setUserData(getUser.user);
        }
        if (!!response) {
          setEventsData(response.results);
        }
      }

      if (currentTab === "cultural") {
        apiCall();
      } else {
        setModalInfo(``);
      }
    } else navigate("/login");
  }, [currentTab, navigate, value.token, value]); //eslint-disable-line

  const cardChoosed = (data) => {
    setModalInfo(data);
    setOpenModal(true);
  };

  const receiveNewTab = (data) => {
    setCurrentTab(data);
  };

  const onBlurSearch = (e) => {
    const value = e.target.value;
    setQuerySearch(value);
  };

  const renderEvents = (events) => {
    let arrayfiltered = [];
    _.map(events, (item) =>
      _.map(item.user_preferences, (x) =>
        _.map(preferences, (y) => {
          if (_.lowerCase(x) === _.lowerCase(y)) {
            arrayfiltered.push(item);
          }
        })
      )
    );

    let mapped = _.isEmpty(arrayfiltered) ? events : arrayfiltered;

    if (_.isEmpty(value)) return;

    mapped = mapped.filter(function (a) {
      return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null));

    if (_.isEmpty(querySearch)) {
      mapped = _.filter(
        mapped,
        (e) =>
          _.lowerCase(e.city) === _.lowerCase(userData?.city) &&
          _.lowerCase(e.type) === _.lowerCase(currentTab)
      );
      console.log(mapped);
    } else {
      mapped = _.filter(
        events,
        (e) =>
          _.lowerCase(e.city) === _.lowerCase(querySearch) &&
          _.lowerCase(e.type) === _.lowerCase(currentTab)
      );
    }

    return mapped;
  };

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
          data={renderEvents(eventsData)}
        />
      )}
    </div>
  );
}
export default FeedPage;

export const libraries = ["places"];
