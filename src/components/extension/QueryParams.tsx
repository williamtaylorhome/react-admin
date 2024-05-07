/*
 * Desc: query parameter demo
 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

type QueryParamsProps = {
    query: any;
};

class QueryParams extends Component<QueryParamsProps> {
    render() {
        const { query } = this.props;
        return (
            <div>
                <BreadcrumbCustom breads={['queryParams']} />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="query parameter demo" bordered={false}>
                            <div>Parameter 1: {query.param1}</div>
                            <div>Parameter 2: {query.param2}</div>
                            <div>
                                Other parameters:{' '}
                                {query.others || (
                                    <a href="#/app/extension/queryParams?others=nothing">
                                        Click to view
                                    </a>
                                )}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default QueryParams;
