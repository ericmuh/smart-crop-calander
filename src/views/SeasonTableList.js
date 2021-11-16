import { Seasonal } from "seasonal";
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
                <Card.Title as="h4">Seasonal Rainfall Precipitaion</Card.Title>
                <p className="card-category">
                  Precipitaion per each season
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">District</th>
                      <th className="border-0">SEASON ONE</th>
                      <th className="border-0">SEASON TWO</th>
                      <th className="border-0">SEASON THREE</th>
                      <th className="border-0">SEASON FOUR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Seasonal.map((data, key) => (
                      <tr key={key}>
                        <td>{data.district}</td>
                        <td>{data.dec_jan_feb}</td>
                        <td>{data.mar_apr_may}</td>
                        <td>{data.jun_jul_aug}</td>
                        <td>{data.sep_oct_nov}</td>
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
