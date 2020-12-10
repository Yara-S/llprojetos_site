import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Projetos from "components/features/DashedBorderSixFeatures.js"

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
  	<Projetos />
    <Testimonial />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
