/*
 * Desc: Multi-level menu component
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card } from 'antd';

const MultipleMenu = () => {
    return (
        <div>
            <BreadcrumbCustom breads={['multi-level menu']} />
            <Row gutter={16}>
                <Col md={24}>
                    <Card title="multi-level menu" bordered={false}>
                        <div>Multi-level menu function expansion</div>
                        <div>The menu style may need you to adjust</div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default MultipleMenu;
