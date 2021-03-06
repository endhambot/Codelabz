import React from "react";
import BrandName from "../brandName";
import { Card, Col, Row } from "antd";

const MyFeed = () => {
  return (
    <Card bordered={false}>
      <Row justify="center">
        <Col span={8} />
        <Col span={8}>
          <h2 style={{ textAlign: "center" }}>
            <BrandName /> My Feed
          </h2>
        </Col>
        <Col span={8} />
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              porro tempore blanditiis excepturi amet quo doloremque eaque
              distinctio, numquam ullam accusantium consequuntur veritatis ut
              temporibus obcaecati quia! Quaerat, dolorum ducimus?
            </p>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default MyFeed;
