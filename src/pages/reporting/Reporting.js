import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { ExportReactCSV } from "../../components/exportdata/export";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function Reporting() {
  let token = localStorage.getItem("auth-token");
  const [exhibitorList, setExhibitorList] = useState([]);
  const [toDate, setToDate] = useState("");
  const [exhibitionList, setExhibitionList] = useState([]);
  const [ticket, setTicket] = useState([]);
  const fetchParticipantsData = async () => {
    try {
      let exList = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `exhibitors`,
        {
          headers: { "x-auth-token": token },
        }
      );
      let tlist = exList.data;
      setExhibitorList(tlist);
      console.log(exList.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchExhibitionData = async () => {
    try {
      let bitionList = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `exhibitions`,
        {
          headers: { "x-auth-token": token },
        }
      );
      let tblist = bitionList.data;
      setExhibitionList(tblist);
      console.log(tblist);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchTicketData = async () => {
    try {
      let tixList = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `tickets`,
        {
          headers: { "x-auth-token": token },
        }
      );
      let ttlist = tixList.data;
      setTicket(ttlist);
      console.log({ tix: ttlist });
    } catch (error) {
      console.log(error.message);
    }
  };
  const getDate = () => {
    let today = new Date();
    console.log(today);
    setToDate(today);
  };

  // const checkState = () => {
  //   console.log(exhibitorList);
  // };
  // if (exhibitorList.length > 0) {
  //   checkState();
  // }
  useEffect(() => {
    // fetchTicketData();
    // fetchExhibitionData();
    getDate();
  }, []);
  const showEventsTable = () => {
    if (exhibitionList.length > 0) {
      return (
        <>
          <table id="emp" className="table table-bordered">
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Price</th>
              <th>Link</th>
              <th>Description</th>
            </tr>
            {exhibitionList.map((res) => {
              return (
                <>
                  <tr>
                    <td>{res.name}</td>
                    <td>{res.date}</td>
                    <td>{res.venue}</td>
                    <td>{res.price}</td>
                    <td>{res.link}</td>
                    <td>{res.description}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </>
      );
    }
  };
  const showParticipantsTable = () => {
    if (exhibitorList.length > 0) {
      return (
        <>
          <table id="emp" className="table table-bordered">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Category</th>
              <th>Diet</th>
              <th>Type</th>
              <th>Access</th>
            </tr>
            {exhibitorList.map((res) => {
              return (
                <>
                  <tr>
                    <td>{res.username}</td>
                    <td>{res.email}</td>
                    <td>{res.category}</td>
                    <td>{res.diet}</td>
                    <td>{res.type}</td>
                    <td>{res.access}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </>
      );
    }
  };
  const convertDate = (e) => {
    let d = new Date(e);
    let date = d.toString();
    return date;
  };
  const showTixTable = () => {
    if (ticket.length > 0) {
      return (
        <>
          <table id="emp" className="table table-bordered">
            <tr>
              <th>Ticket No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Price</th>
              <th>Owner</th>
              {/* <th>Description</th> */}
            </tr>
            {ticket.map((res) => {
              return (
                <>
                  <tr>
                    <td>{res._id}</td>
                    <td>{res.exhibition.name}</td>
                    <td>{convertDate(res.exhibition.date)}</td>
                    <td>{res.exhibition.venue}</td>
                    <td>{res.exhibition.price}</td>
                    <td>{res.owner}</td>
                    {/* <td>{res.description}</td> */}
                  </tr>
                </>
              );
            })}
          </table>
        </>
      );
    }
  };
  return (
    <div>
      <div>
        <div>This is the reporting page</div>
        <div>
          All Participants{" "}
          <button onClick={fetchParticipantsData}>Generate Report</button>
        </div>
        <div>
          All Events{" "}
          <button onClick={fetchExhibitionData}>Generate Report</button>
        </div>
        <div>
          All Tickets <button onClick={fetchTicketData}>Generate Report</button>
        </div>
        <div>
          {showParticipantsTable()}
          {showEventsTable()}
          {showTixTable()}
          {/* {exhibitorList.length > 0 ? (
            <div>{showParticipantsTable()}</div>
          ) : (
            <div></div>
          )} */}
        </div>
        {/* <ExportReactCSV csvData={exhibitorList} fileName={toDate} /> */}
        <div>
          <ReactHTMLTableToExcel
            className="btn btn-info"
            table="emp"
            filename={toDate}
            sheet="Sheet"
            buttonText="Export Excel"
          />
        </div>
      </div>
    </div>
  );
}

export default Reporting;
