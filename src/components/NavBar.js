import React, {Component} from 'react';
import {withRouter} from "react-router";
import {Avatar, Menu} from "antd";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import DoubleLeftOutlined from "@ant-design/icons/lib/icons/DoubleLeftOutlined";


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: null
        };

    }

    redirectProfile = () => {
        this.props.history.push("profile");
    }

    redirectHome = () => {
        this.props.history.push("home");
    }

    render() {
        return (
            <div>
                <Menu selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="a" onClick={this.redirectHome}
                               style={{justifyContent: 'space-between', float: 'left', marginLeft: '5%'}}>
                        <DoubleLeftOutlined/>
                        {/*<StepBackwardOutlined />*/}
                        Code
                        {/*Code*/}

                    </Menu.Item>
                    <Menu.Item key="c" onClick={this.redirectProfile}
                               style={{justifyContent: 'space-between', float: 'right', marginRight: '5%'}}>
                        <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default withRouter(NavBar);