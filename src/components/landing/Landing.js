import React, {Component} from 'react';
import {Button, Card, Col, Input, Layout, Row, Space} from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/landing.scss'
import Modal from "antd/es/modal";
import {signInUrl} from "../../config";

class Landing extends Component {

    constructor(props) {
        super(props);
        AOS.init({duration: 800});
        this.state = {
            loginModalVisible: false,
            loginModalLoading: false,
            registerModalVisible: false,
            registerModalLoading: false,
            invalidLogin: false
        };
    }

    showLoginModal = () => {
        this.setState({
            loginModalVisible: true,
        });
    };

    showEntryModal = () => {
        this.setState({
            registerModalVisible: true,
        });
    };
    handleLoginOk = e => {
        console.log(e);
        this.setState({
            loginModalLoading: true,
        });
        fetch(signInUrl)
            .then(res => {
                if(res.ok) {
                    localStorage.setItem("accessToken", res.headers.get("accessToken"));
                    return res.json()
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(res => {
                // console.log(res.userDetail);
                localStorage.setItem("user", JSON.stringify(res.userDetail));
                this.setState({loginModalVisible: false, loginModalLoading: false});
                this.props.history.push("/home")
                // return res
            })
            .catch(err => this.setState({invalidLogin : true}))


        // setTimeout(() => {
        //     this.setState({loginModalVisible: false, loginModalLoading: false});
        // }, 3000);
    };
    handleLoginCancel = e => {
        this.setState({
            loginModalVisible: false,
        });
    };

    handleRegisterOk = e => {
        this.setState({
            registerModalLoading: true,
        });
        setTimeout(() => {
            this.setState({registerModalLoading: false, registerModalVisible: false});
        }, 3000);
    };
    handleRegisterCancel = e => {
        this.setState({
            registerModalVisible: false,
        });
    };

    errorText = () => {
        if(this.state.invalidLogin) {
            return <p><br/><br/>Error in Username or Password</p>
        }
    }

    render() {
        const {Header, Footer, Content} = Layout;
        return (
            <div className="main_landing_div">
                <Layout>
                    <Header className="landing_header">
                        <Space className="header_buttons">
                            <Button value="large" className="buttons_top">
                                Courses
                            </Button>
                            <Button value="large" className="buttons_top">
                                Students
                            </Button>
                            <Button className="login_homepage" onClick={this.showLoginModal}>
                                Log In
                            </Button>
                            <Modal
                                title="Login"
                                visible={this.state.loginModalVisible}
                                onOk={this.handleLoginOk}
                                onCancel={this.handleLoginCancel}
                                footer={[
                                    <Button type="link">Forgot Password?</Button>,
                                    <Button key="back" onClick={this.handleLoginCancel}>
                                        Back
                                    </Button>,
                                    <Button key="submit" type="primary"
                                            loading={this.state.loginModalLoading}
                                            onClick={this.handleLoginOk}>
                                        Submit
                                    </Button>,
                                ]}
                            >
                                <Input placeholder="Email Address"/>
                                <br/>
                                <br/>
                                <Input placeholder="Password" type={"password"}/>
                                {this.errorText()}
                            </Modal>
                        </Space>
                    </Header>
                    <Content className="landing_content">
                        <Row>
                            <Col md={{span: 24, offset: 0, pull: 1}} lg={{span: 12, offset: 1}}
                                 xs={{span: 24, offset: 0, pull: 1}}>
                                <div className="main_typo" aos="fade" data-aos="fade-up">
                                    We are helping Students become better Software Engineers.
                                </div>
                                <div className="space"></div>
                                <div className="second_type" aos="fade" data-aos="fade-up">
                                    Connecting Students with top Instructors in Programming And Data Structures, Web
                                    Engineering, Machine Learning, and Android Development.
                                </div>
                                <div className="space"></div>
                                <div className="landing_search" aos="fade" data-aos="fade-up">
                                    <Button value="large" className="email_submit_button" onClick={this.showEntryModal}>I
                                        want In</Button>
                                    <Modal
                                        title="Register for a Free Session"
                                        visible={this.state.registerModalVisible}
                                        onOk={this.handleRegisterOk}
                                        onCancel={this.handleRegisterCancel}
                                        footer={[
                                            <Button key="back" onClick={this.handleRegisterCancel}>
                                                Return
                                            </Button>,
                                            <Button key="submit" type="primary"
                                                    loading={this.state.registerModalLoading}
                                                    onClick={this.handleRegisterOk}>
                                                Submit
                                            </Button>,
                                        ]}
                                    >
                                        <Input placeholder="Email Address"/>
                                        <br/>
                                        <br/>
                                        <Input placeholder="Phone Number"/>
                                        <br/>
                                        <br/>
                                        <Input placeholder="School/University"/>
                                        <br/>
                                        <br/>
                                        <Input placeholder="Country"/>
                                    </Modal>
                                </div>
                            </Col>
                            <Col>
                                {/*<img src={landingImage} className="top-image-landing"/>*/}

                            </Col>
                        </Row>
                    </Content>
                    <Content>
                        <br/>
                        <br/>
                        <p className="tutor-header" aos="fade" data-aos="fade-up">
                            Our Tutors Belong to
                        </p>
                        <Row justify={"center"}>
                            <Col md={{span: 24}} lg={{span: 12}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <div className="company-images">
                                    <img src="https://img.icons8.com/color/96/000000/microsoft.png"/>
                                    <img src="https://img.icons8.com/officel/96/000000/google-logo.png"/>
                                    <img src="https://img.icons8.com/color/96/000000/mac-os.png"/>
                                </div>
                                <br/>
                            </Col>
                            <Col md={{span: 24}} lg={{span: 12}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <div className="company-images">
                                    <img src="https://img.icons8.com/doodle/96/000000/swiggy.png"/>
                                    <img src="https://img.icons8.com/ultraviolet/96/000000/amazon.png"/>
                                    <img src="https://img.icons8.com/doodle/96/000000/facebook-new.png"/>
                                </div>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <p className="tutor-header" aos="fade" data-aos="fade-up">
                            Testimonials
                        </p>
                        <Row justify="center">
                            <Col md={{span: 24}} lg={{span: 8}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <Card className="testimonial-card" hoverable={true}>
                                    <br/>
                                    <br/>
                                    Amazing Tutors to Learn from, The Course is in depth and covers every corner of the
                                    subject.
                                    The Tutors are really invested into teaching and come from pretty amazing
                                    backgrounds.
                                    <br/>
                                    <br/>
                                    <p style={{fontWeight: 'bold'}}>
                                        Anurag Sarkar - INDIA
                                    </p>
                                </Card>
                                <br/>
                            </Col>
                            <Col md={{span: 24}} lg={{span: 8}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <Card className="testimonial-card" hoverable={true}>
                                    <br/>
                                    <br/>
                                    Amazing Tutors to Learn from, The Course is in depth and covers every corner of the
                                    subject.
                                    The Tutors are really invested into teaching and come from pretty amazing
                                    backgrounds.
                                    <br/>
                                    <br/>
                                    <p style={{fontWeight: 'bold'}}>
                                        Anurag Sarkar - INDIA
                                    </p>
                                </Card>
                                <br/>
                            </Col>
                            <Col md={{span: 24}} lg={{span: 8}}
                                 xs={{span: 24}} aos="fade" data-aos="fade-up">
                                <Card className="testimonial-card" hoverable={true}>
                                    <br/>
                                    <br/>
                                    Amazing Tutors to Learn from, The Course is in depth and covers every corner of the
                                    subject.
                                    The Tutors are really invested into teaching and come from pretty amazing
                                    backgrounds.
                                    <br/>
                                    <br/>
                                    <p style={{fontWeight: 'bold'}}>
                                        Anurag Sarkar - INDIA
                                    </p>
                                </Card>
                                <br/>
                            </Col>

                        </Row>
                    </Content>
                    <br/>
                    <br/>
                    <Footer className="landing_footer">

                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default Landing;
