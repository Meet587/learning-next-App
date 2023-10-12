"use client"
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Link,
} from "theme-ui";
import banner from "../../public/images/banner.png";
import BSE from "../../public/images/BSestarMF.png";
import ICICI from "../../public/images/icici logo.png";
import Image from "next/image";

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Navigate your financial journey to create wealth
            </Heading>
            <Text as="p" sx={styles.text} style={{ marginTop: "10px" }}>
              Investifyd is a leading investment platform and your trusted
              investment partner toward a stress-free financial future. No
              matter what your goal is, we have got you covered with our
              guidance at every step of your investment journey in SIPs and
              mutual funds.
            </Text>
            <Link
              className="btn btn-primary mt-5 mb-4"
              href={"https://stage.app.investifyd.com/register"}
              target="_blank"
              style={{
                cursor: "pointer",
                fontWeight: "600",
                color: "background",
                textDecoration: "none",
              }}
            >
              Get started
            </Link>

      
            <Text as="p" sx={styles.brandText} style={{ lineHeight: "60px" }}>
              Powered by
            </Text>
            <Box sx={styles.clients} style={{ lineHeight: "10px" }}>
              <Image src={BSE} alt="BSE" />
              <Image src={ICICI} alt="ICICI" />
              {/* <Image src={dropbox} alt="dropbox" /> */}
            </Box>
     
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  brandText: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: " 80px",
    /* identical to box height, or 400% */

    letterSpacing: "-1px",

    color: "rgba(0, 0, 0, 0.25)",
  },
  investInput: {
    marginTop: "10px",
    border: "1px solid #28DDB2",
    boxShadow: "0 0 0 1px #28DDB2",
    // textAlign: "center",
    fontSize: "15px",
    fontWeight: "400",
    paddingLeft: "50px",
    // width: ["100%", null, null, null, "300px", "400px", "100%"],
  },
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["30px", null, null, null, "35px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
    margin: "35px 0",
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 1.85],
    color: "textSecondary",
    mt: ["14px", "19px"],
    textAlign: "justify",
  },
  button: {
    display: ["none", "flex"],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    // mt: ["20px", "20px", "20px", "20px", "20px"],
    img: {
      maxWidth: ["80px", "100%", "100%", "100%"],
      "+ img": {
        ml: ["14px", "28px", "28px", "20px"],
      },
    },
  },
  illustration: {
    display: ["block", "block"],
    mt: ["30px", "30px", 0],
    mb: ["60px", "60px", 0],
    img: {
      maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"],
    },
  },
};
