import React, { Fragment, useContext, useState } from "react";
import "../assets/signup.css";
import GoogleMapReact from "google-map-react";
import { FaMapMarker } from "react-icons/fa";
import { AddressContext } from "../context/AddressContextProvider";
import { useNavigate } from "react-router-dom";
const Marker = () => (
  <div>
    <FaMapMarker />
  </div>
);
function CityMap() {
  const [city, setCity] = useState("");
  const [drop, setDrop] = useState(false);
  const [location, setLocation] = useState({});
  const { setAddress, address } = useContext(AddressContext);
  const navigate = useNavigate();
  let placeArr = [];
  const [allCity] = useState([
    "Bangalore",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
    "Delhi",
  ]);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  const handleChange = (e) => {
    setCity(e.target.value);
    setDrop(true);
  };
  const handleCity = () => {
    setDrop((p) => !p);
  };
  const handleGetLatLng = (el) => {
    setCity(el);
    if (el === "Mumbai") {
      setLocation({ lat: 10.99835602, lng: 77.01502627 });
    }
    console.log(el);
    setDrop(false);
  };
  const cc = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setLocation({ lat, lng });
    });
  };
  const handleMarker = (lat, lng) => {
    cc();
    var latlng = new window.google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status !== window.google.maps.GeocoderStatus.OK) {
        // alert(status);
        console.log(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      if (status === window.google.maps.GeocoderStatus.OK) {
        var address = results[0].formatted_address;
        placeArr.push(address);
        setAddress([...address, placeArr]);
      }
    });
  };
  const handleGetAdr = (e) => {
    e.preventDefault();
    console.log(address);
    navigate("/qr");
  };
  return (
    <>
      <div className="mapContainer">
        <form className="mapblock" onSubmit={handleGetAdr}>
          <input
            type="search"
            name="city"
            value={city}
            onChange={handleChange}
            className="cityinput"
            placeholder="search location"
            onClick={handleCity}
            autoComplete="off"
          />
          &nbsp;
          {drop ? (
            <div className="dropdown">
              {allCity
                .filter((elem) => {
                  if (city === "") {
                    return elem;
                  } else if (elem.toLowerCase().includes(city.toLowerCase())) {
                    return elem;
                  } else {
                    return false;
                  }
                })
                .map((el, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div key={idx} onClick={() => handleGetLatLng(el)}>
                        {el}
                      </div>
                      <hr />
                    </Fragment>
                  );
                })}
            </div>
          ) : null}
          <div className="mapbtnblock">
            <div className="mapBlock">
              <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyB5qMnlJNIRrxU6qQBe9lEK36UcqW691fM",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  onClick={handleMarker}
                >
                  <Marker
                    lat={location.lat}
                    lng={location.lng}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
            </div>
            <button type="submit" className="locationbtn">
              Confirm your location
            </button>
          </div>
        </form>
        <div className="space"></div>
      </div>
    </>
  );
}

export default CityMap;
// callback=initMap
