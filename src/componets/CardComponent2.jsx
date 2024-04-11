import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import "./CardComponent.css";

const CardWithModal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="card2">
        <Card className="cardHeight" style={{ height: `270px`, width:"100%" , margin:  `15px` }}>
          <Card.Body>
            <table >
              <tr>
                <p style={{ color: "#93BE52" ,fontSize:"medium"}}>Ongoing Projects</p>
              </tr>
              <tr>
                <td>Initail Fund Release</td>
                <td>33</td>
              </tr>
              <tr>
                <td>IA on Boarding</td>
                <td>22</td>
              </tr>
              <tr>
                <td>Monitoring Center Establi..</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Monitoring Center Go</td>
                <td>11</td>
              </tr>
            </table>

            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                display: "flex",
                alignItems: "center",
                position:"absolute",
                bottom: "0",
                backgroundColor:" white",
                opacity:' 0.5'
              }}
              onClick={openModal}
            >
              <i
                class="fa fa-exclamation-triangle"
                aria-hidden="true"
                style={{ marginRight: "5px", color:"#93BE52",bottom: "0",
              }}
              />
              view all
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={closeModal} size="xl">

        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <table id="customers">
            <tr>
              <th>SR.No</th>
              <th>State/UT</th>
              <th>Fund Disbursed Amount(IN CR) </th>
              <th>MOnitoring Center Go-Live</th>
            </tr>
            <tr>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
            </tr>
            <tr>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
            </tr>
            <tr>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
            </tr>
            <tr>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
            </tr>
            <tr>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
            </tr>
            <tr>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
              <td>undefined</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardWithModal;
