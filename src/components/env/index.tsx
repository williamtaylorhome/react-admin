/*
 * Desc: Environment configuration
 */
import React from 'react';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { Row, Col, Card, Descriptions } from 'antd';

const getEnvs = () => Object.keys(process.env).filter((key) => /^REACT_ADMIN_/i.test(key));
const Env = () => {
    const envs = getEnvs();
    console.log(process.env);
    return (
        <div>
            <BreadcrumbCustom breads={['Environment variable configuration']} />
            <Row gutter={16}>
                <Col md={24}>
                    <Card title="Environment variable configuration" bordered={false}>
                        <Descriptions>
                            {envs.map((env) => (
                                <Descriptions.Item key={env} label={env}>
                                    {process.env[env]}
                                </Descriptions.Item>
                            ))}
                        </Descriptions>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Env;
