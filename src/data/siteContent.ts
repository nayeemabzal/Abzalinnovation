export type SiteLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: SiteLink[];
};

export type InquiryCategory = {
  label: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  detail: string;
  href: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  detail: string;
  href: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQGroup = {
  title: string;
  description: string;
  items: FAQItem[];
};

export type LegalSection = {
  title: string;
  body: string[];
};

export const siteNavigation: SiteLink[] = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const productLinks: SiteLink[] = [
  { label: "Abzal Volt", href: "/volt" },
  { label: "Abzal Build", href: "/build" },
  { label: "Land Use Atlas", href: "/atlas" },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Products",
    links: [
      { label: "Products Overview", href: "/products" },
      { label: "Abzal Volt", href: "/volt" },
      { label: "Abzal Build", href: "/build" },
      { label: "Land Use Atlas", href: "/atlas" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
    ],
  },
];

export const inquiryCategories: InquiryCategory[] = [
  {
    label: "Product Inquiry",
    description: "Ask about product fit and which Abzal solution is right for your team.",
  },
  {
    label: "Request a Demo",
    description: "Schedule a walkthrough of any product in the ecosystem.",
  },
  {
    label: "Municipal / Land Use Inquiry",
    description: "Ask about Land Use Atlas, zoning workflows, or municipal use cases.",
  },
  {
    label: "Partnerships",
    description: "Discuss implementation, reseller, or strategic partnership opportunities.",
  },
  {
    label: "General Question",
    description: "Reach the Abzal Innovation team about anything else.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "General Inquiries",
    value: "hello@abzalinnovation.com",
    detail: "Questions about the company or products.",
    href: "mailto:hello@abzalinnovation.com?subject=General%20Inquiry%20for%20Abzal%20Innovation",
  },
  {
    label: "Product Demos",
    value: "sales@abzalinnovation.com",
    detail: "Product walkthroughs and pilot discussions.",
    href: "mailto:sales@abzalinnovation.com?subject=Demo%20Request%20for%20Abzal%20Innovation",
  },
  {
    label: "Partnerships",
    value: "hello@abzalinnovation.com",
    detail: "Implementation and strategic conversations.",
    href: "mailto:hello@abzalinnovation.com?subject=Partnership%20Inquiry%20for%20Abzal%20Innovation",
  },
  {
    label: "Support",
    value: "support@abzalinnovation.com",
    detail: "Help with existing accounts and services.",
    href: "mailto:support@abzalinnovation.com?subject=Support%20Request%20for%20Abzal%20Innovation",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    handle: "Abzal Innovation",
    detail: "Follow product updates, launches, and company news.",
    href: "https://www.facebook.com/share/1aj9xuCuDi/",
  },
];

export const faqGroups: FAQGroup[] = [
  {
    title: "About Abzal Innovation",
    description: "The company, the ecosystem model, and what we build.",
    items: [
      {
        question: "What is Abzal Innovation?",
        answer:
          "Abzal Innovation is a software company building purpose-built tools for electrical contractors, construction teams, and municipal land-use professionals. Our products include Abzal Volt, Abzal Build, and Land Use Atlas.",
      },
      {
        question: "Who are these products for?",
        answer:
          "Our tools are built for electrical contractors, builders, renovators, flippers, project teams, municipalities, planners, and land-use professionals. Each product focuses on a specific operational context.",
      },
    ],
  },
  {
    title: "Products & Ecosystem",
    description: "How the products fit together and who they serve.",
    items: [
      {
        question: "What products are available?",
        answer:
          "Abzal Volt and Land Use Atlas are live now. Abzal Build is in development, and additional products are planned as the ecosystem grows.",
      },
      {
        question: "Are the products separate apps or one platform?",
        answer:
          "They are separate products built on shared architecture. Each product addresses a specific workflow while fitting into the broader Abzal Innovation ecosystem.",
      },
      {
        question: "How do I know which product is right for me?",
        answer:
          "Start with the Products page to see the full lineup, or contact our team and we'll help identify the best fit based on your trade, role, and workflow needs.",
      },
    ],
  },
  {
    title: "Municipal / Land Use",
    description: "Questions about Land Use Atlas and municipal workflows.",
    items: [
      {
        question: "What is Land Use Atlas?",
        answer:
          "Land Use Atlas is a zoning and land-use intelligence platform for planners, municipalities, and land professionals. It supports parcel research, zoning analysis, use comparisons, and code-linked workflows.",
      },
      {
        question: "Can municipalities use Abzal Innovation products?",
        answer:
          "Yes. Municipal and public-sector teams are a core audience, especially for Land Use Atlas. The platform is designed around how planning, zoning, and review teams actually work.",
      },
    ],
  },
  {
    title: "Demos & Getting Started",
    description: "How to request a walkthrough or start a conversation.",
    items: [
      {
        question: "How do I request a demo?",
        answer:
          "Use the Contact page and select the demo request option. We'll follow up to schedule a walkthrough of the product that fits your needs.",
      },
      {
        question: "What should I do first if I'm new to Abzal Innovation?",
        answer:
          "Start with the Products page to understand the ecosystem, then explore Volt or Land Use Atlas if they match your work. If you're interested in Build or you're not sure where to start, contact us and we'll point you in the right direction.",
      },
    ],
  },
];

export const legalReviewNotice =
  "These website terms describe the current Abzal Innovation site and may be updated as products, jurisdictions, and services evolve. Formal legal review is still recommended as the business expands.";

export const privacySections: LegalSection[] = [
  {
    title: "Information We Collect",
    body: [
      "We may collect information you provide directly to us, including your name, work email, company name, job title, phone number, message content, demo request details, and other information submitted through contact forms or scheduling requests.",
      "We may also collect account and login-related information if you create an account, request access to a product, or interact with password-protected areas of our site or services.",
      "In addition, we may collect technical usage information such as device type, browser type, IP address, pages visited, referral source, approximate location, and analytics events related to site activity.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We may use collected information to respond to inquiries, route demo requests, provide product information, operate and improve our website, manage prospective customer relationships, support security monitoring, and communicate with you about Abzal Innovation and its products.",
      "We may also use information to understand which products, industries, and workflows visitors are most interested in so we can improve the relevance of our site and related outreach.",
    ],
  },
  {
    title: "Cookies, Analytics, and Tracking",
    body: [
      "We may use cookies, similar technologies, analytics tools, and session identifiers to understand site traffic, improve performance, remember preferences, and measure marketing or referral effectiveness.",
      "Cookie disclosures, consent language, and analytics configuration may be updated over time to reflect the jurisdictions where the site is available and the services Abzal Innovation provides.",
    ],
  },
  {
    title: "How We Share Information",
    body: [
      "We may share information with service providers that help us host the website, process form submissions, manage analytics, support communications, or operate business systems on our behalf.",
      "We may also disclose information when necessary to comply with legal obligations, protect rights and security, investigate misuse, or support a corporate transaction such as a merger, financing, or acquisition.",
    ],
  },
  {
    title: "Data Retention and Security",
    body: [
      "We may retain personal information for as long as reasonably necessary to fulfill the purposes described in this policy, comply with legal requirements, resolve disputes, and enforce agreements.",
      "We use reasonable administrative, technical, and organizational measures to protect information, but no method of storage or transmission can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Your Choices and Rights",
    body: [
      "Depending on your location, you may have rights to request access, correction, deletion, or limitation of certain personal information. You may also be able to manage cookies through your browser settings and opt out of certain communications.",
    ],
  },
  {
    title: "Third-Party Services and Links",
    body: [
      "Our website may contain links to third-party websites, embedded tools, calendars, or services. We are not responsible for the privacy practices of those third parties, and their own terms and policies may apply.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. If we make material changes, we may revise the effective date and provide additional notice where appropriate.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy-related questions, requests, or concerns, contact Abzal Innovation through the contact information listed on our Contact page.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using the Abzal Innovation website, you agree to these Terms of Use and any additional policies or notices referenced here. If you do not agree, do not use the site.",
    ],
  },
  {
    title: "Scope of the Website and Future Services",
    body: [
      "These Terms apply to the public-facing Abzal Innovation website and related digital services made available by Abzal Innovation.",
      "Additional product-specific terms, service agreements, or order forms may apply when you access or purchase a specific product.",
    ],
  },
  {
    title: "Permitted Use",
    body: [
      "You may use the site for lawful business, informational, and evaluation purposes. You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or use the site in a way that could harm Abzal Innovation, its users, or its systems.",
    ],
  },
  {
    title: "Accounts and Credentials",
    body: [
      "If parts of the site or future services require an account, you are responsible for maintaining the confidentiality of account credentials and for activities that occur under your account, subject to applicable law.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The website, designs, trademarks, branding, content, software, and related materials are owned by or licensed to Abzal Innovation and are protected by intellectual property laws. Except as expressly allowed, you may not copy, modify, distribute, reverse engineer, or create derivative works from site materials.",
    ],
  },
  {
    title: "Product and Website Information",
    body: [
      "We may update, change, suspend, or discontinue parts of the website, its content, or future services at any time. Product descriptions, roadmap statements, and availability notes are informational and may change.",
    ],
  },
  {
    title: "Third-Party Services and Links",
    body: [
      "The site may reference or link to third-party tools, websites, integrations, or services. Abzal Innovation is not responsible for third-party content, availability, or business practices.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      'The website is provided on an "as is" and "as available" basis to the extent permitted by law. We do not guarantee uninterrupted availability, error-free operation, or that informational content is complete for every use case.',
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Abzal Innovation and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the website or reliance on website content.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      "You agree to indemnify and hold harmless Abzal Innovation, its affiliates, and its personnel from claims, liabilities, damages, and expenses arising out of your misuse of the website, your violation of these Terms, or your infringement of rights belonging to another party, subject to applicable law.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms of Use from time to time. Continued use of the website after revised Terms become effective constitutes acceptance of the updated Terms, unless applicable law requires a different process.",
    ],
  },
  {
    title: "Governing Law and Contact",
    body: [
      "Additional legal notices, jurisdiction-specific terms, or product-specific agreements may supplement these Terms where appropriate. Questions about these Terms may be directed through the Contact page.",
    ],
  },
];
