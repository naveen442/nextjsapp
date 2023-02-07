import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import React, { useEffect, useState } from "react";

import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from "next/link";
import styles from '../styles/Header.module.css'
import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins"; // Defaults to weight 400.


const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 100}`
}

const Header = () => {

  return (
    <>
      <Head>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></Script>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></Script>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></Script>




      <nav className={`${styles['navbar-header']} navbar navbar-expand-xl justify-content-between`} >
        <div className="container">
          <Link  href='/' 
          className="navbar-brand">
            <Image
              loader={myLoader}
              // src="/assets/headerLogo.png"
              // src="../../assets/headerLogo.png"
                src="./assets/headerLogo.png"
              alt="Picture of the author"
              width={200}
              height={80}
            />
          </Link>
          <button className="navbar-toggler "
            type="button" data-toggle="collapse"
            data-target="#navbarNavDropdown01"
            aria-controls="navbarNavDropdown01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outlineColor: "#fff" }}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown01" >

            <ul className="navbar-nav ">

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<    Products Dropdown    >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    PRODUCTS
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Communication Channels     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>Communication Channels</p>

                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1} >
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={11} className={`${styles['dropdown-bottom']}`}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Enterprise SMS</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/airport.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/smart_url_tracking">Smart URL Tracking</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/cloud-network.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/cloud-telephony-ai-autodialer">Cloud-telephony-ai-autodialer</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/phone-call.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/missed_call_service">Missed call Service</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/padlock.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/virtual_mobile_number">Virtual Mobile Number</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/telephone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/obd_calls">OBD Calls</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/microphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/voice_key_input">Voice Key Input</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/ivr_service">IVR Service</Link>
                        </Col>
                      </Row>

                    </Col>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Conversational Platform     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>Conversational Platform</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Rich Communication Service</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Whatsapp ChatBot</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">WACTO - Omnichannel</Link>
                        </Col>
                      </Row>

                    </Col>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>Developers API</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">SMS API</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Voice API</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Whatsapp API</Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </div>
              </li>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<    Solutions dropdown  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    SOLUTIONS
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     By Industry     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>By Industry</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/advertising_agencies">Advertising agencies</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/airport.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/automobiles_solutions">Automobiles</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/cloud-network.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/bfsi_solutions">BFSI</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/phone-call.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/community">Community</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/padlock.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/consultancy">Consultancy</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/telephone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/E-commerce">E-commerce Solutions</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/microphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/education">Education</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/electrical_electronics">Electrical & Electronics</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/food_beverages">Food & Beverages</Link>
                        </Col>
                      </Row>
                    </Col>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Conversational Platform     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>By Industry</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/advertising_agencies">Healthcare</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/airport.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/automobiles_solutions">HR</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/cloud-network.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/bfsi_solutions">Logistics</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/phone-call.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/community">Personal Care</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/padlock.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/consultancy">Press/Media</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/telephone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/E-commerce">Real estate</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/microphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/education">Retail</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/electrical_electronics"> Software</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/food_beverages">Tours & Travels</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/support.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/food_beverages">Trading</Link>
                        </Col>
                      </Row>
                    </Col>
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     By Business Type     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                    <Col style={{ padding: "30px" }} >
                      <p className={styles.dropdown_heading}>By Business Type</p>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Corporate</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Government</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Manufacturers</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Start-ups</Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </div>
              </li>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<    Digital Marketing Dropdown    >>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <Link href={"https://nettyfish.in/"} className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}>
                    DIGITAL MARKETING
                    <span className={styles.arrowz}></span>
                  </Link>
                </div>
              </li>

              {/* <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    DIGITAL MARKETING
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>


              
                    <Col style={{ padding: "30px 20px" }} >
                     
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">SMS Marketing</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Voice Boardcast</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Whatsapp Boardcast</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Email Marketing</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">SEO</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Facebook (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Instagram (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Linked-in (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Youtube (SMM)</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="/assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms"> Google Ads (SEM)</Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </div>
              </li> */}

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Become a Partner     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    BECOME A PARTNER
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row >


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "15px 20px" }} >
                      {/* <p className={styles.dropdown_heading}>Developers API</p> */}
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Partner With Us</Link>
                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </div>
              </li>

              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Resources     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    RESOURCES
                    <span className={styles.arrowz}><RiArrowDropDownLine /></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`}>


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "15px 20px" }} >
                      {/* <p className={styles.dropdown_heading}>Developers API</p> */}
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/blog">Blog</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/e-manual">E-manuals</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/DLT">DLT</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/youtube">Videos</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/faq">FAQ</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/email.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/events">Event</Link>
                        </Col>
                      </Row>

                    </Col>
                  </Row>

                </div>
              </li>
              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <Link href="contactus" className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}>
                    CONTACT US
                    <span className={styles.arrowz}></span>
                  </Link>
                </div>
              </li>
              <div style={{ alignSelf: "center", padding: "16px" }}>
                <button className={styles.freedemo}>Free Demo</button>{' '}
              </div>
              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<      Become a Partner     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

              <li className={`${styles['nav-item']} ${styles['dropdown']} nav-item dropdown`}>
                <div className={styles.borderBottom}>
                  <a className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['text-black']} nav-link dropdown-toggle `}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <Image
                      loader={myLoader}
                      src="./assets/button group.png"
                      alt="Picture of the author"
                      width={40}
                      height={40}
                    />
                    <span className={styles.arrowz}></span>
                  </a>
                </div>

                <div className={`${styles['dropdown-menu-2']} dropdown-menu`} aria-labelledby="navbarDropdown" >
                  <Row className={`${styles['dropdown-menu-mobile']}`} >


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<     Developers API     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <Col style={{ padding: "15px 20px" }}>
                      {/* <p className={styles.dropdown_heading}>Developers API</p> */}
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #e0e0e0" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/login.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Login</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #e0e0e0" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/payment.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Payment</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px", borderBottom: "1px solid #e0e0e0" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/sales.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">Offers</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "20px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/smartphone.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">+91 8608 666 111</Link>
                        </Col>
                      </Row>
                      <Row style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                        <Col md={1}>
                          <Image
                            loader={myLoader}
                            src="./assets/worldwide.gif"
                            alt="Picture of the author"
                            width={30}
                            height={30}
                          />
                        </Col>
                        <Col md={10}>
                          <Link className={`${styles['dropdown-item']} dropdown-item`} href="/enterprise_sms">support@nettyfish.com</Link>
                        </Col>
                      </Row>

                    </Col>
                  </Row>


                </div>
              </li>


            </ul>



          </div>
        </div>
      </nav>



    </>
  );
};

export default Header;