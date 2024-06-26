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
                style={{ marginRight: "5px", color:"#4680ff" }}
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
              <thead>
                <tr>
                  <th>SR NO</th>
                  <th>STATE/UT NAME</th>
                  <th>APPLICATION SUBMITION</th>
                  <th>APPLICATION APPROVAL</th>
                  <th>MOU SIGNED BY STATE</th>
                  <th>FUND DISBURSAL TO STATES/UT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Andhra Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Arunachal Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Assam</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Bihar</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Chhattisgarh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Chandigarh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Goa</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Dadra & Nagar Haveli and Daman Diu</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Andaman and Nicobar Islands</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Gujarat</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Haryana</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Himachal Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Jharkhand</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Karnataka</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Kerala</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Madhya Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Maharashtra</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Manipur</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Meghalaya</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Mizoram</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Nagaland</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Odisha</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Punjab</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Rajasthan</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Sikkim</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Tamil Nadu</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Chhattisgarh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Telangana</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Tripura</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Uttar Pradesh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Uttarakhand</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>West Bengal</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Andaman and Nicobar Island</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Delhi</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>35</td>
                  <td>Ladakh</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>Puducherry</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                  <td>YES</td>
                </tr>
              </tbody>
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
