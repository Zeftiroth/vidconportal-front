import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";

function JoinEvent() {
  const [list, setList] = useState([]);
  let token = localStorage.getItem("auth-token");
  const fetchEventList = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitions`, {
        headers: { "x-auth-token": token },
      })
      .then(async (response) => {
        console.log(response.data);
        let tmpl = response.data;
        await setList(tmpl);
      });
  };
  useEffect(() => {
    fetchEventList();
  }, []);
  const sendToPayment = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`paymentEvent/${e.target.id}`);
  };

  let history = useHistory();
  return (
   <Layout>
      <InnerHeader />
      <PageHeader title="Registrations" crumbtext="Register Events" />
      <section className="blog-details-page">
        <Container>
          <Row>
		  <Col lg={3}>
		  <div class="table-responsive">
		  <table class="table table-striped">
		  <tr><td style={{backgroundColor:'#F58220',color: 'white', padding:'5px'}}>Event Title</td></tr>
		  <tr>
		  <td>Lorem Ipsum is simply dummy text of the printing</td>
		  </tr>
		   <tr><td style={{backgroundColor:'#F58220',color: 'white', padding:'5px'}}>Event Date & Time</td></tr>
		  <tr>
		  <td>15-01-2021 10.30AM</td>
		  </tr>
		   <tr><td style={{backgroundColor:'#F58220',color: 'white', padding:'5px'}}>Event Location</td></tr>
		  <tr>
		  <td>Malasiya</td>
		  </tr>
		  </table>
		  </div>
		  </Col>
            <Col lg={6}>
               <form >
                 <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" />
                </div>

                <div className="form-group">
                    <label>Mobile No</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile Number" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-control" placeholder="Enter Location" />
                </div>
				   <div className="form-group">
                    <label>No of Seats</label>
                   <select className="form-control">
				   <option>1</option> <option>2</option> <option>3</option> <option>4</option>
				   </select>
                </div>

                <button type="submit" className="btn btn-white btn-block">Proceed to Make Payment</button>
                
            </form>
            </Col>
			 <Col lg={3}>
			 
			  <div class="table-responsive">
		  <table class="table table-dark">
		  <tr><td style={{backgroundColor:'#F58220',color: 'white', padding:'5px'}}>Event Entry Fees</td></tr>
		  <tr>
		  <td>1,500 USD - Per Seat</td>
		  </tr>
		  
		  </table>
		  </div>
			 
			 </Col>
           
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
	);
}

export default JoinEvent;
