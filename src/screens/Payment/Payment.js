import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import logo from "assets/logo.png";
import tarjetas from "assets/tarjetas.png";
import tarjetas2 from "assets/tarjetas2.png";

export default function Payment() {
  const [ownerName, setOwnerName] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [expirationMonth, setExpirationMonth] = useState();
  const [expirationYear, setExpirationYear] = useState();
  const [securityCode, setSecurityCode] = useState();
  return (
    <>
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <div className="Payment">
        <div className="total-container">
          <div className="payment-total">
            <p>Total a pagar</p>
            <h1>$300</h1>
          </div>
          <div className="payment-buttons">
            <button className="gr-btn">Ver Detalle</button>
            <button className="rd-btn">Cancelar Orden</button>
          </div>
        </div>
        <div className="payment-info-container">
          <div className="payment-ways-container">
            <p>Formas de Pago</p>
          </div>
          <div className="cards-img-container">
            <img src={tarjetas} alt="" className="tarjetas" />
            <img src={tarjetas2} alt="" className="tarjetas2" />
          </div>
          <div className="forms-container">
            <div className="form">
              <p>
                Nombre del titular<span>*</span>
              </p>
              <input
                name="ownerName"
                className="input"
                type="text"
                value={ownerName}
                placeholder=""
                required
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </div>
            <div className="form">
              <p>
                Número de tarjeta<span>*</span>
              </p>
              <input
                name="cardNumber"
                className="input"
                type="number"
                value={cardNumber}
                placeholder=""
                required
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="form">
              <p>
                Fecha de expiración<span>*</span>
              </p>
              <input
                name="cardNumber"
                type="number"
                className="short-input"
                value={expirationMonth}
                placeholder=""
                required
                onChange={(e) => setExpirationMonth(e.target.value)}
              />
              <input
                name="cardNumber"
                type="number"
                className="short-input"
                value={expirationYear}
                placeholder=""
                required
                onChange={(e) => setExpirationYear(e.target.value)}
              />
            </div>
            <div className="form">
              <p>
                Código de seguridad<span>*</span>
              </p>
              <input
                name="securityCode"
                className="tiny-input"
                type="number"
                value={securityCode}
                placeholder=""
                required
                onChange={(e) => setSecurityCode(e.target.value)}
              />
            </div>
          </div>
          <button className="gr-btn">Pagar</button>
        </div>
      </div>
    </>
  );
}
