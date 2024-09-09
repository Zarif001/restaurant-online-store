import React from "react";
import Nav from "../../components/Nav/Nav";
import Mail from "../../components/Mail/Mail";
import Footer from "../../components/Footer/Footer";
import Galleries from "../../components/Galleries/Galleries";

function GalleryPage() {
  return (
    <>
      <Nav />
      <Galleries />
      <Mail />
      <Footer />
    </>
  );
}
export default GalleryPage;
