import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import LoginContext from "../../context/LoginContext";


import { Container, Row, Col } from "react-bootstrap";
import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/opins-icon.css";
import "../../assets/css/animate.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "swiper/swiper-bundle.min.css";

import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";

import Table from 'react-bootstrap/Table';

function ExhibitorList() {
  const [exhiList, setExhiList] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  let { loginData, setLoginData } = useContext(LoginContext);
  console.log(loginData);
  let history = useHistory();
  const dispatch = useDispatch();
  let token = localStorage.getItem("auth-token");
  const FetchUserList = async () => {
    await axios
      .get(
        process.env.REACT_APP_BACKEND_URL + "exhibitors"
        // , {
        //     headers: { "x-auth-token": token },
        // }
      )
      .then((res) => {
        console.log(res.data);
        let tempData = res.data;
        setExhiList(tempData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    FetchUserList();
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    let delID = e.target.id;
    await axios
      .delete(process.env.REACT_APP_BACKEND_URL + `exhibitors/delete`, {
        headers: { "x-auth-token": token },

        params: { user: delID },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    history.push(`/participantProfile/${e.target.id}`);
  };
  return (
    <>
	<Layout>
      <InnerHeader />
      <PageHeader  title="Participant List" crumbtext="Participants"/>
     <section className="blog-details-page">
       <Container>
          <Row>
		   <Col lg={12}>
        <h3>User List</h3>
     <Table striped bordered hover responsive>
<thead>
    <tr>
      <th>User Name</th>
      <th>Action</th>
      <th>View</th>
    </tr>
  </thead>
          {!_.isEmpty(exhiList) ? (
            exhiList.map((user) => {
              return (
              
                <tr><td>  <div id={user._id}>
                    {user.username}</div>
                      </td>
					  <td>
                    <button id={user._id} onClick={handleDelete} className="btn btn-danger btn-block">
                     <i class="fa fa-trash"></i> Delete
                    </button>
                  </td>
				  <td>
                  <div>
                    <button id={user._id} onClick={handleRedirect} className="btn btn-success btn-block">
                       <i class="fa fa-eye"></i> Profile
                    </button>
                  </div>
				  </td>
                </tr>
              );
            })
          ) : (
           <tr><td colspan='3' align="center">
             There is no data yet
            </td>
			</tr>
          )}
		  </Table>
       </Col>
	 
	 </Row>
	
	 </Container>
	  </section>
	    <Footer />
    </Layout>
    </>
  );
}

export default ExhibitorList;
