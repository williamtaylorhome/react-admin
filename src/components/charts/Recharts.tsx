import React from 'react';
import { Row, Col, Card } from 'antd';
import RechartsSimpleLineChart from './RechartsSimpleLineChart';
import RechartsBarChart from './RechartsBarChart';
import RechartsRadialBarChart from './RechartsRadialBarChart';
import RechartsRadarChart from './RechartsRadarChart';

class Recharts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Basic Line Chart" bordered={false}>
                                <RechartsSimpleLineChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Basic Line Chart" bordered={false}>
                                <RechartsBarChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="Basic Line Chart" bordered={false}>
                                <RechartsRadialBarChart />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="Basic Line Chart" bordered={false}>
                                <RechartsRadarChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Recharts;