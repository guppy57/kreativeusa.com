import DreamflowBadge from "@/components/DreamflowBadge";
import { NextSeo } from "next-seo";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PropertyRequestForm() {
  return (
    <div className="relative">
      <NextSeo
        title="Property Request Form"
        description="Submit a property request."
      />
      <Navbar activeLink="property-request-form" />
      <Container className="pb-[16rem] sm:pb-[20rem] lg:pb-[36rem]">
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/appZlP7f2lZThUpUP/pagMgzZv3aQju7eYE/form"
          frameBorder={0}
          width="100%"
          height="1300"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        />
      </Container>
      <Footer />
      <DreamflowBadge />
    </div>
  );
}
