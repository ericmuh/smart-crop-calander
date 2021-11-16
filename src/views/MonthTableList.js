import { monthly_data } from "data/monthlypec";
import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Monthly Precipitaion</Card.Title>
                <p className="card-category">
                 Precipitaion per each Month
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">District</th>
                      <th className="border-0">JAN</th>
                      <th className="border-0">FEB</th>
                      <th className="border-0">MAR</th>
                      <th className="border-0">APR</th>
                      <th className="border-0">MAY</th>
                      <th className="border-0">JUN</th>
                      <th className="border-0">JUL</th>
                      <th className="border-0">AUG</th>
                      <th className="border-0">SEP</th>
                      <th className="border-0">OCT</th>
                      <th className="border-0">NOV</th>
                      <th className="border-0">DEC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthly_data.map((data, key) => (
                      <tr key={key}>
                        <td>{data.district}</td>
                        <td>{data.jan}</td>
                        <td>{data.feb}</td>
                        <td>{data.mar}</td>
                        <td>{data.apr}</td>
                        <td>{data.may}</td>
                        <td>{data.jun}</td>
                        <td>{data.jul}</td>
                        <td>{data.aug}</td>
                        <td>{data.sept}</td>
                        <td>{data.oct}</td>
                        <td>{data.nov}</td>
                        <td>{data.dec}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
