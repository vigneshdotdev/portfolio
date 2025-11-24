
export const config = {
  meta: {
    title: "Vignesh Kumar A - Portfolio",
    description: "Portfolio of Vignesh Kumar A, a Backend Engineer."
  },
  header: {
    logo: {
      first: "vignesh",
      second: "hq",
      third: ".dev"
    },
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ]
  },
  hero: {
    name: "Vignesh Kumar A",
    typedText: ["distributed systems"],
    title: {
      prefix: "Building scalable",
      highlight: "distributed systems" // This is used in the typed text logic usually, but here it was separate
    },
    subtitle: "Backend engineer deeply interested in the challenges of large-scale distributed systems. My focus is on designing fault-tolerant architectures and optimizing data synchronization for high-volume environments. I enjoy solving problems related to database locking, cache consistency, and event-driven workflows using Java, Redis, and Kafka.",
    cta: {
      primary: "Get in Touch",
      secondary: "View Work"
    }
  },
  story: [
    {
      year: "The Beginning",
      text: "Born in Devikapuram near Arni, amidst the rhythmic sounds of 'Nesavu' (Saree weaving). My family moved to Chennai due to debt, seeking a fresh start.",
      icon: "🧶"
    },
    {
      year: "The Spark",
      text: "Eighth grade changed everything. My brother's government laptop became my portal. Gaming, hardware swapping, OS tinkering—I became the local tech hero. The dopamine rush of solving tech problems was addictive.",
      icon: "💻"
    },
    {
      year: "The Hustle",
      text: "Summer holidays weren't for rest. Armed with computer knowledge, I impressed a photo studio owner. From 10th to 12th grade, I mastered photography and business, turning my passion into a profession.",
      icon: "📸"
    },
    {
      year: "The Detour",
      text: "Math was my nemesis. Fear led me away from Computer Science to Aviation Management. I ended up working in a hotel, serving food to airline passengers. It felt like a dead end.",
      icon: "✈️"
    },
    {
      year: "The Persistence",
      text: "I refused to give up. I decided to pursue B.Sc. CS, funding my own education by working at the studio from 1:45 PM to 9:45 PM daily after college. I pushed myself to reclaim my passion.",
      icon: "🔥"
    },
    {
      year: "The Triumph",
      text: "My persistence paid off. I got an opportunity at Zoho, entering the world of IT. Now, I solve complex distributed system challenges—loving every moment of the hard path I chose.",
      icon: "🚀"
    }
  ],
  contact: {
    social: {
      linkedin: "https://www.linkedin.com/in/vigneshhq",
      github: "https://github.com/vigneshdotdev",
      leetcode: "https://leetcode.com/u/vigneshdotdev/"
    },
    resume: "https://drive.google.com/file/d/18dt3Pda8_0ZO4ArmM--HvCOS-GMWcy5b/view?usp=sharing",
    emailjs: {
      serviceId: "service_kbpwnfk",
      templateId: "template_hwmph8w",
      publicKey: "XnCM8NpUX3KSZ9pKn"
    }
  },
  footer: {
    copyright: "Vignesh Kumar A"
  }
};
