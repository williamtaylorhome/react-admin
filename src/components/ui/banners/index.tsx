import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../../widget/BreadcrumbCustom';
import Basic from './Basic';
import AutoPlay from './AutoPlay';
// import Custom from './Custom';

class Banners extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom breads={['UI', 'carousel']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Basic usage" bordered={false}>
                                <Basic />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Automatic carousel -default 5 seconds" bordered={false}>
                                <AutoPlay />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Customize left and right arrows and thumbnails" bordered={false}>
                                {/*Introducing customization will cause component conflicts not to be displayed*/}
                                {/*<Custom />*/}
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Banners;
