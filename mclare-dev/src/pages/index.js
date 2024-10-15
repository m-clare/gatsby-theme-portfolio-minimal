import React from 'react';
import {
    AboutSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Maryanne Wachter - Software | Structural Engineer" />
            <Page>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="About Me" />
                <InterestsSection sectionId="services" heading="Skills and Services" />
                <ProjectsSection sectionId="portfolio" heading="Portfolio" />
                <ContactSection sectionId="contact" heading="Contact" />
            </Page>
        </>
    );
}
