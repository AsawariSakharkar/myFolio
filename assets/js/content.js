/**
 * ============================================================================
 *  SITE CONTENT  —  Edit everything about your portfolio here.
 * ============================================================================
 *
 *  This is the ONLY file you normally need to touch. No HTML/CSS required.
 *
 *  Image swaps: drop your real file into assets/images/ (keep the same name
 *  to skip editing), or update the path below. See assets/images/README.md.
 * ============================================================================
 */

window.SITE_CONTENT = {
  // ---- Browser tab + SEO --------------------------------------------------
  meta: {
    title: "Asawari Sakharkar — Information Designer & UX Researcher",
    description:
      "Portfolio of Asawari Sakharkar — Information Designer, UX Researcher, problem solver and fashion lover.",
    favicon: "assets/favicononinini.jpeg",
  },

  // ---- Header -------------------------------------------------------------
  header: {
    resumeLabel: "Resume",
    resumeFile: "assets/resume/Asawari's Resume 1.pdf",
    findMeText: "You can find me on",
    // `icon` must match a key in assets/js/icons.js. Leave url "" to hide.
    socials: [
      { icon: "medium", label: "Medium", url: "https://medium.com/@asawarisakharkar2000" },
      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/asawari-sakharkar-0861b3300/" },
      { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/lily_in_august?igsh=ODhkdXgzdnd6YWtw" },
    ],
  },

  // ---- Hero ---------------------------------------------------------------
  hero: {
    greeting: "Hello~",
    name: "I am Asawari Sakharkar",
    tagline:
      "An Information Designer, UX Researcher, A Problem Solver and a Fashion Lover",
    // Tip: in Figma, select the whole locket group ("Group 32") and export it
    // as ONE transparent PNG for the cleanest result, then point to it here.
    image: "assets/images/Group 32.png",
    imageAlt: "An open locket showing two photos of Asawari",
  },

  // ---- My Expertise -------------------------------------------------------
  expertise: {
    heading: "My Expertise",
    // accent:true renders the outlined pill style ("And an outfit planner").
    tags: [
      { label: "Data Driven Design" },
      { label: "User Research" },
      { label: "UX writing" },
      { label: "Psychology" },
      { label: "Accessibility" },
      { label: "UX Design" },
      { label: "Creativity in Design" },
      { label: "And an outfit planner", accent: true },
    ],
  },

  // ---- My Projects --------------------------------------------------------
  projects: {
    heading: "My Projects",
    // Each card: image + optional link. Add/remove freely.
    items: [
      { image: "assets/images/projects/Rectangle 9.png", title: "AROHI — Disaster Management Interface", url: "https://www.behance.net/gallery/245227537/AROHI-Disaster-Management-Interface" },
      { image: "assets/images/projects/Rectangle 10.png", title: "Corporate Learning Platform", url: "https://www.behance.net/gallery/246535769/Corporate-Learning-Platform" },
      { image: "assets/images/projects/Rectangle 11.png", title: "Suchalak", url: "https://www.behance.net/gallery/245164655/Suchalak" },
      { image: "assets/images/projects/Rectangle 12.png", title: "Effect of Ocean Acidification", url: "https://www.behance.net/gallery/246071569/Effect-of-Ocean-Acidification" },
      { image: "assets/images/projects/Rectangle 13.png", title: "Daily UI 004", url: "https://www.behance.net/gallery/224749961/Daily-UI-004" },
    ],
    // The final outlined "See more" card in the design.
    seeMore: { label: "See more on Behance", url: "https://www.behance.net/asawarisakhark" },
  },

  // ---- My Experience (timeline) ------------------------------------------
  experience: {
    heading: "My Experience",
    // `current: true` gives the filled timeline dot (recent roles).
    items: [
      {
        role: "UX Design Consultant",
        org: "Saarogya",
        current: true,
        description:
          "At Saarogya, I support design and product decisions by aligning them with the organization's vision. I contribute to the UX and Human-Centered Design (HCD) of Nitya Karma and 16 Points, while also leading the redesign of the company website to enhance user experience and engagement.",
      },
      {
        role: "UX Designer / Researcher",
        org: "cosmino",
        current: true,
        description:
          "Contributed to early-stage product development through user research, competitive analysis, user testing, go-to-market planning, marketing and outreach strategy, and brand development.",
      },
      {
        role: "UI / UX Designer",
        org: "Diginovators",
        description:
          "I collaborated with the project manager and senior designers to create web pages for a client. I participated in multiple stages of the design thinking process, from initial ideas to the final prototype.",
      },
      {
        role: "UI Developer",
        org: "Red Nucleus",
        description:
          "I contributed to the development and improvement of e-learning modules for pharmaceutical companies. I worked with a team of developers to implement design specifications and write code.",
      },
      {
        role: "Market Researcher",
        org: "Bolstart",
        description:
          "Conducting market research and competitor analysis for Bolstart: a startup magazine for their in-house startup page.",
      },
    ],
  },

  // ---- My Education (timeline) -------------------------------------------
  education: {
    heading: "My Education",
    items: [
      {
        institute: "MIT Institute of Design",
        program: "Information Design and Data Visualization",
        period: "JULY 2024 - JULY 2027",
        location: "PUNE, MAHARASHTRA",
      },
      {
        institute: "Edit Institute",
        program: "Diploma in UI/UX Designing",
        period: "JULY 2023 - DEC 2023",
        location: "PUNE, MAHARASHTRA",
      },
      {
        institute: "Vishwakarma Institute of Technology, Pune",
        program: "BTech Electronics Engineering",
        period: "AUG 2018 - AUG 2022",
        location: "PUNE, MAHARASHTRA",
      },
    ],
  },

  // ---- Fashion gallery (horizontal scroll) -------------------------------
  fashion: {
    heading: "When I am not designing I explore Fashion",
    subheading: "My Outfit Checks!",
    // Portrait images scroll horizontally in an auto-moving carousel.
    // Add/remove freely — file names are URL-encoded automatically in main.js.
    photos: [
      { image: "assets/images/outfits/PXL_20250513_092102550.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20250702_120640103~2.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20250704_091924545.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20250706_072907889.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20250818_110128684.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20250914_093009357.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20250914_093252510.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20251121_060315568.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20251121_100308571.MP.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20251219_114134998.MP~2.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20260414_041024176.MP.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20260507_063136141.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20260510_032905458.MP.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20260525_105654420.jpg", alt: "Outfit check" },
      { image: "assets/images/outfits/PXL_20260601_080635618.jpg", alt: "Outfit check" },
    ],
  },

  // ---- Let's Connect (footer) --------------------------------------------
  connect: {
    heading: "Let's Connect",
    email: "asawarisakharkar2000@gmail.com",
    // Right-hand quick links with a diagonal arrow, as in the design.
    links: [
      { label: "Medium Articles", url: "https://medium.com/@asawarisakharkar2000" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/asawari-sakharkar-0861b3300/" },
    ],
  },
};
