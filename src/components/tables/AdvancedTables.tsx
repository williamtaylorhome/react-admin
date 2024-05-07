import React from 'react';
import { Row, Col, Card } from 'antd';
import FixedTable from './FixedTable';
import ExpandedTable from './ExpandedTable';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

class AdvancedTables extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom breads={['sheet'Advanced forms级表格']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="fixed column" bordered={false}>
                                <FixedTable />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="Expandable" bordered={false}>
                                <ExpandedTable />
                            </Card>
                        </div>
                    </Col>
                    {/* <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="editable" bordered={false}>
                                <EditableTable />
                            </Card>
                        </div>
                    </Col> */}
                </Row>
            </div>
        );
    }
}

export default AdvancedTables;
