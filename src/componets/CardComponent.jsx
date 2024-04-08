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
        <Card className="cardHeight" style={{ height: `300px` }}>
          <Card.Body>
            <table>
              <tr>
              
              <p  style={{ color: '#4680ff',fontSize:"medium" }}>Aplication Status</p>
              </tr>
              <tr>
                <td>Submission To Morth</td>
                <td>33</td>
              </tr>
              <tr>
                <td>Approved By Morth</td>
                <td>33</td>
              </tr>
              <tr>
                <td>MoU Signed By Morth</td>
                <td>33</td>
              </tr>
              <tr>
                <td>Fund Disbursal</td>
                <td>33</td>
              </tr>
              <tr>
                <td>Fund Pending</td>
                <td>0</td>
              </tr>
            </table>

            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                border: "none",
                display: "flex",
                alignItems: "center",
              }}
              onClick={openModal}
            >
              <i
                class="fa fa-exclamation-triangle"
                aria-hidden="true"
                style={{ marginRight: "5px", color:"#4680ff" }}
              />
              view all
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Modal show={showModal} onHide={closeModal}>
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
