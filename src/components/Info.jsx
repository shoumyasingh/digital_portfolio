import React from "react"
import SSPhoto from "../images/Shoumya_Singh.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={SSPhoto} alt="Shoumya Singh" />
      <h1 className="info--fullname">Shoumya Singh</h1>
      <h5 className="info--role">Software Engineer - FullStack</h5>
      
      <div className="info--buttons">
        <address>
          <a href="mailto:shoumya.singh@icloud.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/shoumyasingh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  )
}