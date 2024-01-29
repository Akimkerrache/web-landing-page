import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const contactData = {
    phoneNumbers: ["123-456-7890", "987-654-3210"],
    emails: ["info@example.com", "support@example.com"],
    addresses: ["123 Rue de test, Paris", "456 Side Rue, Marseille"],
    mapLocation: { lat: 48.813095, lon: 2.339968 },
  };
  const offices = [
    { name: "Paris", coordinates: [48.8566, 2.3522], color: "red" },
    { name: "Marseille", coordinates: [43.2965, 5.3698], color: "blue" },
    { name: "Lyon", coordinates: [45.764, 4.8357], color: "green" },
  ];
  const handleGoButtonClick = () => {
    // Create a Google Maps URL with the coordinates
    const googleMapsUrl = `https://maps.app.goo.gl/C7KHdwaZUhGbiGb39`;

    // Open the URL in a new tab
    window.open(googleMapsUrl, "_blank");
  };
  const customIcon = (color) => {
    return new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-sec1">
        <div className="contact-data">
          <h2>Coordonnées</h2>
          <div>
            <h3>Numéros de Téléphone:</h3>
            <ul>
              {contactData.phoneNumbers.map((number, index) => (
                <li key={index}>{number}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>E-mails :</h3>
            <ul>
              {contactData.emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Adresses :</h3>
            <ul>
              {contactData.addresses.map((address, index) => (
                <li key={index}>{address}</li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="map-section">
        <h2>Nos Emplacements</h2>
        <MapContainer
          center={offices[0].coordinates}
          zoom={6}
          style={{ height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {offices.map((office, index) => (
            <Marker
              key={index}
              position={office.coordinates}
              icon={customIcon(office.color)}
            >
              {/* You can add a popup with the office name or any additional information */}
              {/* <Popup>{office.name}</Popup> */}
            </Marker>
          ))}
        </MapContainer>
        <button className="secondary-button" onClick={handleGoButtonClick}>
          Aller
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
