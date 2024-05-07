import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { AuthWidget } from '../widget';

class RouterEnter extends Component {
    componentDidMount() {
        console.log('RouterEnter');
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom breads={['authority management', 'Route interception']} />
                <AuthWidget
                    children={(auth: any) => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{ minHeight: 600 }}>
                                    <h2 style={{ height: 500 }} className="center">
                                        Only the administrator can log in to see this page, otherwise it will jump to the 404 page.
                                    </h2>
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        );
    }
}

export default RouterEnter;
