import React from 'react';
import { Row, Col, Card, Timeline } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from '../../style/imgs/b1.jpg';
import {
    CameraOutlined,
    CloudOutlined,
    HeartOutlined,
    MailOutlined,
    SyncOutlined,
} from '@ant-design/icons';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <HeartOutlined className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">collect</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <CloudOutlined type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">cloud data</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <CameraOutlined className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">photo</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <MailOutlined className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">mail</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>任务</h3>
                                    <small>10 completed, 2 to be completed, 1 in progress</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <Timeline>
                                    <Timeline.Item color="green">New version iteration meeting</Timeline.Item>
                                    <Timeline.Item color="green">Complete the first version of website design</Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>Joint debugging interface</p>
                                        <p>Functional acceptance</p>
                                    </Timeline.Item>

                                    <Timeline.Item color="#108ee9">
                                        <p>Login function design</p>
                                        <p>ASD</p>
                                        <p>Page layout</p>
                                    </Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>message bar</h3>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined />
                                </span>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">Naruto</span>
                                            <span className="text-muted">Finally became Hokage!</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">Sasuke</span>
                                            <span className="text-muted">Crane tail~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">Sakura</span>
                                            <span className="text-muted">Sasuke, you are so handsome!</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="pull-left w-40 mr-m">
                                            <img
                                                src={b1}
                                                className="img-responsive img-circle"
                                                alt="test"
                                            />
                                        </span>
                                        <div className="clear">
                                            <span className="block">Hinata</span>
                                            <span className="text-muted">
                                                Naruto-kun. . . that. . . I. . like you..
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>Visit statistics</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <span className="card-tool">
                                    <SyncOutlined type="sync" />
                                </span>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
