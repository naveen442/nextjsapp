import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Head from 'next/head'
import styles from "../../styles/Faq.module.css";
import Link from "next/link"
import { Container,Row,Col} from "react-bootstrap";


export default function Events() {


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <Head>
    <title>Nettyfish - FAQ</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
  </Head>

  <div >
    <div className={styles.banner}>
      {/* <<<<<<<<<<<<<<<<<<<<< First Row >>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <Row>
        <Col md={7} className="offset-2">
          <p className={styles.title}>FAQ</p>
          <p className={styles.breadcrumb}><a legacyBehavior href="/"><a className={styles.home}>Home</a></a> &gt;&gt; FAQ</p>
        </Col>
      </Row>
    </div>
  </div>
 

    <div className={styles.backdrop_color}>
    <div className={styles.backdrop} >
    <Container>
  
    <div className={styles.pt_pb_30}>
    <p className={styles.faq}>FAQ</p>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <div style={{ alignSelf:"center"}}>
          <Typography sx={{ width: '100%',height:"40px",flexShrink: 0,fontFamily:'Josefin Sans',fontSize:"20px" }}>
          How to Send SMS via Compose SMS option?
          </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily:'Josefin Sans'}}>
          Compose SMS, Select route, Select Sender id, Type destination numbers, Type content, Click Send SMS button
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%',height:"40px",flexShrink: 0,fontFamily:'Josefin Sans',fontSize:"20px" }}> What is the package validity?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily:'Josefin Sans'}}>
          There is 1 year validity of Bulk SMS purchased from Nettyfish. The renewal of the SMS package should be done once in a year with us.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%',height:"40px",flexShrink: 0,fontFamily:'Josefin Sans',fontSize:"20px" }}>
          What are details to be provided while signing up?
          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily:'Josefin Sans'}}>
          While sigh in to Nettyfish portal it will ask for your Name, Contact no, Valid Email ID and Location details to create an account
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%',height:"40px",flexShrink: 0,fontFamily:'Josefin Sans',fontSize:"20px" }}>Can I get a customized Sender ID?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily:'Josefin Sans'}}>
          Yes. Once you completed DLT entity registration from any of the operator, you can give the Sender ID that you want you SMS to be sent. Once it gets approved from the DLT portal you can upload the same into our Nettyfish portal and then start sending SMS.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Container>
    </div>
    </div>
  
    </>
  );
}
