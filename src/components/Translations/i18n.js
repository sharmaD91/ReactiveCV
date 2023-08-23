import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    lng: 'de',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: {
        translation: {
          role: "Full Stack Entwickler",
          description: "Fullstack Entwickler mit mehreren Jahren Berufserfahrung.",
          resume: "Lebenslauf",
          project1Name:"Conversational AI - Masterarbeit",
          project1Description:"Konzeption & Entwicklung einer Referenzarchitektur für eine Conversational AI im Versicherungsumfeld ",
          project2Name:"Webdesign",
          project2Description:"Konzepterstellung und Design einer Webseite für ein Restaurant",
          project3Name:"Personal LLM - Bot",
          project3Description:"Persönlicher Bot auf LLM-Basis mit LLama und LangChain",
          NavProjects:"Projekte",
          NavSkills:"Skills",
          NavContact:"Kontakt"

        },
      },
      en: {
        translation: {
          role: "Full Stack Developer",
          description: "Full Stack Developer with multiple years of experience.",
          resume: "Resume",
          project1Name:"Conversational AI - Master Thesis",
          project1Description:"Conception & development of a Conversational AI in the insurance environment based on the RASA framework.",
          project2Name:"Concept & Design of a Website",
          project2Description:"Concept creation and design of a website for a restaurant" ,
          project3Name:"Personal LLM - Bot",
          project3Description:"LLM-based personal bot with LLama and LangChain",
          NavProjects:"Projects",
          NavSkills:"Skills",
          NavContact:"Contact"
        },
      },
    },
  });

export default i18n;