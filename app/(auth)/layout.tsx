import {ReactNode} from "react";
import {Col, ConfigProvider, Row} from "antd";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import style from './style.module.scss'
import {GoogleOAuthProvider} from "@react-oauth/google";

export default function AuthLayout({children}: { children: ReactNode }) {
    return (<GoogleOAuthProvider clientId="782zed3kzeoyy5">
            <ConfigProvider theme={{
                token: {
                    colorBorder: style.colorPrimary,
                    colorPrimary: style.colorPrimary
                },
                components: {
                    Input: {
                        borderRadius: 2
                    }
                }
            }}>
                <div className={style.container}>

                    <Row
                        style={{
                            height: "100vh",
                            // background:"red"
                        }}>
                        <Col
                            xs={24}
                            sm={24}
                            md={24}
                            lg={6}
                            xl={12}
                            xxl={12}
                            className={style.column}>
                            <div className={style['logo-wrapper']}>
                                <Image draggable={false} width={350} src={logo} alt={"logo"}/>
                            </div>
                        </Col>
                        <Col xs={24}
                             sm={24}
                             md={24}
                             lg={16}
                             xl={12}
                             xxl={12}
                             className={style.column}>
                            {children}
                        </Col>

                    </Row>

                </div>

            </ConfigProvider>
        </GoogleOAuthProvider>
    )
}