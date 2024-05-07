import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import beauty from '@/style/imgs/beauty.jpg';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { AuthWidget } from '../widget';

class Basic extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom breads={['authority management', 'Basic demo']} />
                <AuthWidget
                    children={(auth: any) => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{ minHeight: 600 }}>
                                    {!auth.uid && (
                                        <h2 style={{ height: 500 }} className="center">
                                            After logging in you will see a picture of a beautiful woman
                                        </h2>
                                    )}
                                    {auth.permissions &&
                                        auth.permissions.includes('auth/authPage/visit') && (
                                            <div style={{ textAlign: 'center' }}>
                                                <img src={beauty} alt="" style={{ height: 400 }} />
                                                {(auth.permissions.includes(
                                                    'auth/authPage/edit'
                                                ) && (
                                                    <div>
                                                        <p>
                                                            What kind of beauty are you looking at? Just look at some beautiful scenery~
                                                            <span
                                                                role="img"
                                                                aria-label=""
                                                                aria-labelledby=""
                                                            >
                                                                😄😄
                                                            </span>
                                                        </p>
                                                        <p>You must log in as an administrator to see these two paragraphs.</p>
                                                    </div>
                                                )) || (
                                                    <div>
                                                        <p>Administrator login will see different effects</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        );
    }
}

export default Basic;
