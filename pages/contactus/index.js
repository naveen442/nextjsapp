import Link from "next/link"
import Head from "next/head"
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image'
import styles from "../../styles/Contactus.module.css";
import { Input, Grid } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const myLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 100}`
}
const Contactus = (props) => {




    return (
        <section>
            <Head>
                <title>NettyFish - Contact us</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
            </Head>
            <div >
                <div className={styles.banner}>
                    {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Row>
                        <Col md={7} className="offset-2">
                            <p className={styles.title}>Contact us</p>
                            <p className={styles.breadcrumb}><a legacyBehavior href="/"><a className={styles.home}>Home</a></a> &gt;&gt; Contact us</p>
                        </Col>
                    </Row>
                </div>
            </div>
            <Container>
                {/* <<<<<<<<<<<<<<<<<<<<< Second Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className={styles.pt_30}>
                    <Row>
                        <Col md={12} className={styles.content} style={{ paddingBottom: "30px" }}>
                            <div className={styles.mt_150}>
                                <Image
                                    loader={myLoader}
                                    src="assets/Untitled-9 1.png"
                                    alt="Picture of the author"
                                    width={380}
                                    height={250}
                                    quality={100}
                                    priority
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            {/* <<<<<<<<<<<<<<<<<<<<< Third Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div >
                <Container>
                    <div className={styles.pb_30}>
                        <Row >
                            <Col md={12} >
                                <div className={styles.center}>
                                    <h1 className={styles.heading} >Call Us or Fill The Form</h1>
                                    <p className={styles.pera}>Leave your information and submit to us. <br /> Subscribe to our newsletters for more updates and reports.</p>
                                </div>

                            </Col>
                        </Row>

                        <div>

                            <div >
                                <div className={styles.border}>
                                    <Row >
                                        <Col>
                                            <div>
                                                <input type="text" placeholder="Name*" className={styles.form}></input>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div>
                                                <input type="text" placeholder="Email*" className={styles.form}></input>
                                            </div>
                                        </Col>

                                    </Row>
                                    <div className={styles.pt_30}>
                                        <Row >

                                            <Col>
                                                <div>
                                                    <input type="text" placeholder="Phone Number*" className={styles.form}></input>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                    <div className={styles.pt_30}>
                                        <Row >
                                            <Col>
                                                <div>
                                                    <textarea type="text" placeholder="Message" className={styles.form}></textarea>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                    <div className={styles.button_center}>
                                        <button shadow color="gradient" className={styles.button}>
                                            Submit
                                        </button>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>
                </Container>
            </div>





        </section>
    );
};

export default Contactus;