import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Table } from "semantic-ui-react";

export default function Doctors() {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    getDocs();
  }, []);

  const getDocs = async () => {
    try {
      let res = await axios.get("/api/doctors");
      console.log(res.data);
      setDocs(res.data);

    } catch (error) {}
  };

//TO DO Sort the Doctors by last_name.


  const renderDoctors = () => {
    return docs.map ((d) => {
      return (
        <Table.Body>
          <Table.Row>
              <Table.Cell>Dr. {d.last_name}</Table.Cell>
              {/* <Patients /> */}
          </Table.Row>
        </Table.Body>
      );
    });
  };

  return (
    <div>
      <h1>Doctors</h1>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Doctors</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* {sortApps()} */}
        {renderDoctors() }
      </Table>
    </div>
  );
}
