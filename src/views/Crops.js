import { crops } from "data/crops";
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
                <Card.Title as="h4">Crop Calender</Card.Title>
                <p className="card-category">Crop Calender</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th> Crop Name</th>
                      <th>Agro Ecological zone</th>
                      <th>Season</th>
                      <th>Early sowing month</th>
                      <th>Late sowing month</th>
                      <th>Sowing value</th>
                      <th>Sowing unit</th>
                      <th> growing period</th>
                      <th>Water needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {crops.map((data, key) => (
                      <tr key={key}>
                        <td>{data.name}</td>
                        <td>{data.agro_ecological_zone}</td>
                        <td>{data.season}</td>
                        <td>{data.early_sowing_month}</td>
                        <td>{data.late_sowing_month}</td>
                        <td>{data.sowing_value}</td>
                        <td>{data.sowing_unit}</td>
                        <td> {data.growing_period}</td>
                        <td>{data.water_needed}</td>
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
