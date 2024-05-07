import React from 'react';
import { Row, Col, Card } from 'antd';
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import EchartsEffectScatter from './EchartsEffectScatter';
import EchartsForce from './EchartsForce';

class Echarts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="area map" bordered={false}>
                                <EchartsArea />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="relation chart" bordered={false}>
                                {/*<EchartsGraphnpm />*/}
                                <EchartsForce />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="pie chart" bordered={false}>
                                <EchartsPie />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Scatter plot" bordered={false}>
                                <EchartsEffectScatter />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Echarts;