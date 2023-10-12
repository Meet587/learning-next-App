import Banner from "@/sections/banner";
import style from "./page.module.css";
import { banner } from "/public/images/banner.png";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <main>
      <Container>
        home
        {/* <Banner /> */}
        <Row>
          <Col lg="6" md="6" sm="12">
            <h2 className={`${style.heading2}`}></h2>
          </Col>
          <Col lg="6" md="6" sm="12">
            <Image src={banner} alt="banner" />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
