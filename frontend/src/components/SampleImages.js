import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const SampleImages = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6}>
          <Image
            src="https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px", marginBottom: "20px" }}
          />
        </Col>
        <Col md={6}>
          <Image
            src="https://petapixel.com/assets/uploads/2017/11/notscaredfeat.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image
            src="https://i.ytimg.com/vi/4lhJllc9jNc/maxresdefault.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
        <Col md={6}>
          <Image
            src="https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image
            src="https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
        <Col md={6}>
          <Image
            src="https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image
            src="https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
        <Col md={6}>
          <Image
            src="https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg"
            rounded
            fluid
            style={{ paddingTop: "3px" }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SampleImages;
