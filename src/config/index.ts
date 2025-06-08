import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ever Cano — Computer Engineer, Data Analyst and Software Developer",
  author: "Ever Alexander Cano",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/ever-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ever Cano",
    specialty: "Computer Engineer, Data Analyst and Software Developer",
    summary:
      "I am passionate about the tech industry and software engineering.",
    email: "everalexander126@gmail.com",
  },
  experience: [
    {
      company: "Dole Fresh Fruit International, Ltd",
      position: "Senior Electromechanical Analyst",
      startDate: "Agust 2021",
      endDate: "Current",
      summary: [
        "I integrated and improved the governance of data belonging to the security department by 60% with the goal of supporting decision-making based on Business Intelligence (BI).",
        "I coordinate the implementation of technology that directly impacts a 30% cost reduction.",
        "Implementé protocolos de mantenimiento del equipo electrónico que permitieron agilizar los procesos en un 80% en el centro de seguridad remota (CSR).",
      ],
    },
    {
      company: "CICESCT (Comisión Interinstitucional Contra la Explotación Sexual Comercial y Trata de Personas de Honduras)",
      position: "Full Stack Developer",
      startDate: "Feb 2021",
      endDate: "Dec 2021",
      summary: [
        " structured the databases and three modules of the computer system that store the data used to recover and provide comprehensive protection services to more than 500 victims of human trafficking and sexual exploitation.",
      ],
    },
    {
      company: "Organización Agua Viva Internacional ",
      position: "Web Programmer",
      startDate: "April 2021",
      endDate: "April 2021",
      summary:
        "I developed the official website for the religious organization Agua Viva International, which has allowed the organization to position itself online and obtain significant donations to impact the lives of more than 7% of the estimated 2 million Hondurans who still lack access to drinking water (https://oravihonduras.org/).Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
    {
      company: "Centro Educativo Evangélico Bethel",
      position: "DBA | Full Stacl Developer",
      startDate: "Januany 2017",
      endDate: "Agust 2021",
      summary: [
        "I managed the databases of the computer system used by the institution to process enrollment, accounts receivable, and service payments until 2020. These databases were hosted on SQL Server.",
        "I developed the new administrative management software system (Billing, Educational, Student, and Personnel Administration, Web Platform) and maintained its database. The previous implementation streamlined the process flow by 90% and provided the institution with databases that allow for better control of accounts receivable."
      ]
    },
  ],
  projects: [
    {
      name: "ERP - Edusoft",
      summary: "Desktop computer system for administrative management with modules for billing, educational administration, and internal and external clients, as well as personnel management, point of sale, inventory, and an educational web module.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/edusoft.png",
    },
    {
      name: "Oravihn Web Site",
      summary: "Official website for the religious organization Agua Viva International, which has allowed the organization to position itself online and obtain significant donations to impact the lives of more than 7% of an estimated 2 million Hondurans who still lack access to clean water.",
      linkPreview: "/",
      linkSource: "https://oravihonduras.org/",
      image: "/oravi.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
     I am passionate about the tech industry and software engineering. I have collaborated in high-impact projects, such as the development of software that allows the management of cases against human exploitation and trafficking, as well as the development of web applications that allow non-profit organizations to cross borders and thus receive aid. for the construction and maintenance of drinking water wells that benefit people who do not have this vital liquid. I have experience with multiple backend and frontend development technologies and languages. More than three years leading the integration of technology in security processes that include production areas and the logistics chain of Dole Food Company
    `,
    image: "/ever-big.jpg",
  },
};

// #5755ff
