/*
 * Desc: Asynchronous submenu
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card } from 'antd';

const SmenuSub1 = () => {
    return (
        <div>
            <BreadcrumbCustom breads={['异步菜单']} />
            <Row gutter={16}>
                <Col md={24}>
                    <Card title="Asynchronous submenu" bordered={false}>
                        <div>Asynchronous submenu1</div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SmenuSub1;
