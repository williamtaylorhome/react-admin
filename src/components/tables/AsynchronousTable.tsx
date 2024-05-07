import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getBbcNews } from '../../service';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';

const columns = [
    {
        title: 'Headlines',
        dataIndex: 'title',
        width: 100,
        render: (text: any, record: any) => (
            <a href={record.url} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        ),
    },
    {
        title: 'author',
        dataIndex: 'author',
        width: 80,
    },
    {
        title: 'release time',
        dataIndex: 'publishedAt',
        width: 80,
    },
    {
        title: 'describe',
        dataIndex: 'description',
        width: 200,
    },
];

class AsynchronousTable extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data: [],
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
        getBbcNews().then(({ articles }: { articles: any }) => {
            this.setState({
                data: articles,
                loading: false,
            });
        });
    };
    onSelectChange = (selectedRowKeys: string[]) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom breads={['sheet', 'asynchronous form']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="Asynchronous tables--BBC News Today's Hot Topics" bordered={false}>
                                <div style={{ marginBottom: 16 }}>
                                    <Button
                                        type="primary"
                                        onClick={this.start}
                                        disabled={loading}
                                        loading={loading}
                                    >
                                        Reload
                                    </Button>
                                    <span style={{ marginLeft: 8 }}>
                                        {hasSelected
                                            ? `Selected ${selectedRowKeys.length} items`
                                            : ''}
                                    </span>
                                </div>
                                <Table
                                    rowSelection={rowSelection as any}
                                    columns={columns}
                                    dataSource={this.state.data}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AsynchronousTable;
