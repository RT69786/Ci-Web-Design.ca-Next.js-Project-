"use client";

import React from "react";
import "./_main06.scss";
import FAQItem from "../FAQItem/FAQItem";

const Main06 = () => {
  return (
    <div className="main06">
      <section className="for-center-main06">
        <div className="div-fourteen">
          <h2>Frequently asked questions</h2>
        </div>

        <FAQItem question="What is your website design and development process?">
          <p>
            Our process includes several key steps that ensure a deep
            understanding of the business and its needs. We then design a user
            experience tailored to meet those requirements effectively.
          </p>

          <p>
            Our skilled designers pour their passion and expertise into creating
            unique and impactful designs, resulting in a more engaging
            experience for potential users.
          </p>

          <p>
            Our website development and coding adhere to the highest standards
            of optimization, responsiveness, and future adaptability, all while
            providing ongoing support to our valued customers.
          </p>
        </FAQItem>

        <FAQItem question="Which platforms and stacks do you use for web design and development?">
          <p>
            We primarily use WordPress for our clients' website needs, as it
            meets the major requirements for most business websites.
            Additionally, we are partners with Shopify, Squarespace, and Wix.
            All of our designs are custom-made, responsive, and customizable.
          </p>

          <p>
            For more information on other stacks and tools, please contact us
            here, and we will be happy to answer your questions.
          </p>
        </FAQItem>

        <FAQItem question="What types of clients and industries do you work with?">
          <p>
            We collaborate with a diverse range of clients, from startups and
            small businesses to large enterprises and nonprofits.
          </p>

          <p>
            Before diving into design, we conduct thorough research on our
            client's business and industry. Understanding the intricacies of
            your business and your target audience is crucial for us to optimize
            the user experience.
          </p>

          <p>
            While we work with clients across various industries, our most
            frequent sectors include industries, healthcare, tech, legal,
            financial, B2B, fitness and more.
          </p>
        </FAQItem>

        <FAQItem question="How large is your team and where is your team located?">
          <p>
            We’re a small and passionate team consisting of several talented
            professionals including web designers, content marketing
            professionals, and website developers in Toronto, Canada. We pride
            ourselves for delivering the best web solutions in the region for
            custom website designs.
          </p>
        </FAQItem>

        <FAQItem question="What strategies will you implement to enhance our SEO visibility?">
          <p>
            1. Keyword Research: We conduct thorough keyword research to ensure
            you target the most relevant keywords based on user intent, search
            volume, and competition.
          </p>

          <p>
            2. Content Optimization: We optimize your content by strategically
            placing your target keywords and related terms, ensuring proper page
            structure and optimal word count.
          </p>

          <p>
            3. Technical Optimization: This includes improving site speed,
            optimizing HTML tags, refining page titles and meta descriptions,
            implementing schema markup, managing redirects, enhancing link
            structure, optimizing ALT text, ensuring effective site
            architecture, optimizing for mobile devices, setting up Google
            Search Console, and more.
          </p>

          <p>
            4. Google Business Profile Optimization: We optimize your Google
            Business Profile for local SEO and visibility on Google Maps.
          </p>

          <p>
            To rank for competitive high-traffic keywords, acquiring backlinks
            to enhance your domain authority is also essential.
          </p>
        </FAQItem>

        <FAQItem question="Do you provide content outlining and editing services?">
          <p>
            Yes, we offer comprehensive content outlining and editing services.
            Our team of experienced content strategists and editors will help
            you create a structured content plan and ensure that your content is
            clear, engaging, and aligned with your business goals.
          </p>
        </FAQItem>
      </section>
    </div>
  );
};

export default Main06;
