import React, { Component } from 'react';
import { Row, Col, Card, Button, notification, Select } from 'antd';
import BreadcrumbCustom from '../widget/BreadcrumbCustom';
import { IconType, ConfigProps } from 'antd/lib/notification';
import { SmileOutlined } from '@ant-design/icons';
const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
class Notifications extends Component {
    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    openNotification2 = () => {
        const args = {
            message: 'Notification Title',
            description:
                'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 0,
        };
        notification.open(args);
    };
    openNotificationWithIcon = (type: IconType) => {
        notification[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    openNotification3 = () => {
        const key = `open${Date.now()}`;
        const btnClick = function () {
            // to hide notification box
            notification.close(key);
        };
        const btn = (
            <Button type="primary" size="small" onClick={btnClick}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description:
                'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key,
            onClose: this.close,
        });
    };
    close = () => {
        console.log(
            'Notification was closed. Either the close button was clicked or duration time elapsed.'
        );
    };
    openNotification4 = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom breads={['UI', 'Notification reminder box']} />
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification}>
                                    Basic usage -4.5 seconds to shut down
                                </Button>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification2}>
                                    Cancel automatic shutdown
                                </Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button
                                    type="primary"
                                    onClick={() => this.openNotificationWithIcon('success')}
                                >
                                    success
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => this.openNotificationWithIcon('info')}
                                >
                                    remind
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => this.openNotificationWithIcon('warning')}
                                >
                                    warn
                                </Button>
                                <Button
                                    type="primary"
                                    onClick={() => this.openNotificationWithIcon('error')}
                                >
                                    fail
                                </Button>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification3}>
                                    Custom button
                                </Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button type="primary" onClick={this.openNotification4}>
                                    Custom notification icon
                                </Button>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Select
                                    defaultValue="topRight"
                                    style={{ width: 120, marginRight: 10 }}
                                    onChange={(val: ConfigProps['placement']) => {
                                        notification.config({
                                            placement: val,
                                        });
                                    }}
                                >
                                    {options.map((val) => (
                                        <Option key={val} value={val}>
                                            {val}
                                        </Option>
                                    ))}
                                </Select>
                                <Button type="primary" onClick={this.openNotification}>
                                    Turn on message notifications
                                </Button>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Notifications;
