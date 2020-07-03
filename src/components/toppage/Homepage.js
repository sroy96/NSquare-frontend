import React, {Component} from 'react';
import NavBar from "../NavBar";
import {Card, Col, Row} from "antd";

class Homepage extends Component {

    render() {
        const {Meta} = Card;
        return (
            <div>
                <NavBar/>

                <Row>
                    <Col span={8} style={{float:'center'}}>
                        <Card
                            hoverable
                            style={{width: 300, marginTop:'10%',justifyContent:'center', marginLeft:'15%'}}
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com"/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{width: 300, marginTop:'10%',justifyContent:'center', marginLeft:'15%'}}
                            cover={<img alt="example"
                                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com"/>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Homepage;