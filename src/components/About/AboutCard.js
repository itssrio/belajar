import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo semuanya, Saya <span className="purple"> Amin Satrio </span>
            from <span className="purple"> Depok, Jawa Barat.</span>
            <br /> Biasa dipanggil Rio, Saya kelas 12 SMK dari SMK AL-Asiyah dengan jurusan Rekayasa Perangkat Lunak (RPL)
            <br />
            Saya adalah lulusan dari SMPT 3 DEPOK 
            <br />
            <br />
            selain suka coding, saat ini saya juga suka melakukan beberapa hal yaitu :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Valorant
            </li>
            <li className="about-activity">
              <ImPointRight /> Membaca Novel 
            </li>
            <li className="about-activity">
              <ImPointRight /> Dan tentu saja yang terakhir halu in MICHIE wkwk
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " im loving myself "{" "}
          </p>
          <footer className="blockquote-footer"> R i o </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
