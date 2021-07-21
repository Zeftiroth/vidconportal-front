import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetAdminList } from "../actions/adminActions";
import { Link } from "react-router-dom";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/opins-icon.css";
import "../assets/css/animate.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "swiper/swiper-bundle.min.css";

import Layout from "../components/layout";
import InnerHeader from "../components/inner-header";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";

import Table from 'react-bootstrap/Table';

function AdminList() {
  const dispatch = useDispatch();
  const adminList = useSelector((state) => state.adminL);
  console.log(adminList.data);
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(GetAdminList());
  };

  const handleAdminDelete = (e) => {
    e.preventDefault();
    let id = e.target.id;

    let answer = prompt("Are you sure you want to delete this Admin? y/n");
    answer.toLowerCase();
    if (answer === "y") {
      axios
        .delete(`http://vidconportal.herokuapp.com/admins/delete/${id}`)
        .then((response) => {
          console.log(response);
          alert(`Successfully deleted admin`);
          FetchData();
        })
        .catch((error) => {
          console.log(error);
        });
    } else alert(`Delete Action canceled`);
  };

  const showAdminList = () => {
    if (!_.isEmpty(adminList.data)) {
      return (
        <div>
          {adminList.data.map((admin) => {
            return (
              <div>
                <div>
				<tr><td>
                  {admin.adminName.firstName} {admin.adminName.lastName}{" "}
				  </td>
				  <td>
                  <Link to={`/editAdmin/${admin._id}`}>Edit</Link>{" "}
				  </td>
				  <td>
                  <Link id={admin._id} onClick={handleAdminDelete}>
                    Delete
                  </Link>
				  </td>
				  </tr>
                </div>
              </div>
            );
          })}
        </div>
        // <p>
        // have data
        // </p>
      );
    }

    if (adminList.loading) {
      return  <tr colspan="3"> <td><p>Loading...</p></td> </tr>;
    }

    if (adminList.error !== "") {
      return <tr colspan="3"> <td><p>{adminList.error}</p></td> </tr>;
    } else return <tr colspan="3"><td><p>no admin found</p></td> </tr>;
  };
  return (
    
	<Layout>
      <InnerHeader />
      <PageHeader  title="Participant List" crumbtext="Participants"/>
     <section className="blog-details-page">
       <Container>
          <Row>
		   <Col lg={12}>
        <h3>Admin List</h3>
     <Table striped bordered hover responsive>
<thead>
    <tr>
      <th>Admin Name</th>
      <th>Action</th>
      <th>View</th>
    </tr>
  </thead>

      <div>{showAdminList()}</div>
	 
	    </Table>
       </Col>
	 
	 </Row>
	
	 </Container>
	  </section>
	    <Footer />
    </Layout>
   
  );
}

export default AdminList;
