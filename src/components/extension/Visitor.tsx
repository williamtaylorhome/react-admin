/*
 * Desc: visitor
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card } from 'antd';

const Visitor = () => {
    return (
        <>
            <BreadcrumbCustom breads={['visitor']} />
            <Row gutter={16}>
                <Col md={24}>
                    <Card
                        title="guest mode"
                        bordered={false}
                        bodyStyle={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 500,
                        }}
                    >
                        Guest mode pages, pages you can access without logging in
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Visitor;
