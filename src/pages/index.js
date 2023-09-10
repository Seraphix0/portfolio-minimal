import React from "react";
import {
  AboutSection,
  // ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Melvin Kusters - Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="Part Engineer, but Mostly Human" />
        <InterestsSection sectionId="details" heading="Specializations" />
        <ProjectsSection sectionId="highlights" heading="Highlights" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
