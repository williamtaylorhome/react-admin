import React from 'react';
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

type ExampleAnimationsProps = {};
type ExampleAnimationsState = {
    dataSource: any;
    count: number;
    deleteIndex: number;
};

class ExampleAnimations extends React.Component<ExampleAnimationsProps, ExampleAnimationsState> {
    constructor(props: any) {
        super(props);
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '30%',
            },
            {
                title: 'age',
                dataIndex: 'age',
            },
            {
                title: 'address',
                dataIndex: 'address',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text: any, record: any, index: number) => {
                    return this.state.dataSource.length > 1 ? (
                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => this.onDelete(record, index)}
                        >
                            <span>Delete</span>
                        </Popconfirm>
                    ) : null;
                },
            },
        ];
        this.state = {
            dataSource: [
                {
                    key: '0',
                    name: 'Edward King 0',
                    age: '32',
                    address: 'London, Park Lane no. 0',
                },
                {
                    key: '1',
                    name: 'Edward King 1',
                    age: '32',
                    address: 'London, Park Lane no. 1',
                },
            ],
            count: 2,
            deleteIndex: -1,
        };
    }
    columns: any;
    onDelete = (record: any, index: number) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ deleteIndex: record.key });
        setTimeout(() => {
            this.setState({ dataSource });
        }, 500);
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [newData, ...dataSource],
            count: count + 1,
        });
    };
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom breads={['animation', 'Animation case']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button className="editable-add-btn mb-s" onClick={this.handleAdd}>
                                    Add
                                </Button>
                                <Table
                                    bordered
                                    dataSource={dataSource}
                                    columns={columns}
                                    rowClassName={(record: any, index: number) => {
                                        if (this.state.deleteIndex === record.key)
                                            return 'animated zoomOutLeft min-black';
                                        return 'animated fadeInRight';
                                    }}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ExampleAnimations;
