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
            <table>
              <tr>
              <p style={{ color: 'orange',fontSize:"medium" }}>Total Find Status</p>
              </tr>
              <tr>
                <td>Estimated Project Cost</td>
                <td>463.90</td>
              </tr>
              <tr>
                <td>Center's Shere</td>
                <td>332.24</td>
              </tr>
              <tr>
                <td>Amount From Center</td>
                <td>117.5</td>
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
                style={{ marginRight: "5px", color: "orange" }}
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
