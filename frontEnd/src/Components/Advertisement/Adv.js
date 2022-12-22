import React from 'react';
import { Card, Col, Row, Avatar  } from 'antd';
import { EnvironmentOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons';
import moment from 'moment';

const Adv = (props) => (
    <>
        <Card title={<>


                    <div> {props.adv.profile} </div>
                    <div style={{ color: 'gray', fontSize: '12px' }}> <CalendarOutlined /> {moment(props.adv.publicationDate).format("MM-DD-YYYY")} </div>


                    </>}
            bordered={false}
            style={{ margin: '5px' }}>
            <Row>
                <Col>
                    <Avatar shape="square" size={100}
                    src={props.adv.src}
                    icon={<UserOutlined />} />
                </Col>
                <Col style={{marginLeft:'5px'}}>
                    <div> Campany : {props.adv.companyName} </div>
                    <div> <EnvironmentOutlined /> {props.adv.StateCode}, {props.adv.CityName} </div>
                    <div> {props.adv.description} </div>

                </Col>
            </Row>

        </Card>
    </>
);
export default Adv;

