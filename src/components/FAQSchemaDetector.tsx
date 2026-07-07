"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSchemaDetector() {
  const pathname = usePathname();
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    // Run the extraction after a short delay to ensure both server-rendered content
    // and dynamic client-rendered content (such as accordions) have mounted and rendered.
    const extract = () => {
      const extractedFaqs: FAQItem[] = [];

      // 1. Extract explicit metadata tags (our custom robust injection)
      const metaElements = document.querySelectorAll(".faq-seo-metadata");
      metaElements.forEach((el) => {
        const q = el.getAttribute("data-question");
        const a = el.getAttribute("data-answer");
        if (q && a) {
          const trimmedQ = q.trim();
          const trimmedA = a.trim();
          if (trimmedQ && trimmedA && !extractedFaqs.some((f) => f.question === trimmedQ)) {
            extractedFaqs.push({ question: trimmedQ, answer: trimmedA });
          }
        }
      });

      // 2. Extract static FAQ sections (looking for "Frequently Asked Questions" headers)
      const headings = Array.from(document.querySelectorAll("h1, h2, h3"));
      headings.forEach((heading) => {
        const text = (heading.textContent || "").trim().toLowerCase();
        if (text === "frequently asked questions" || text === "faqs" || text.includes("about launchveda — faqs")) {
          // Find the closest parent section or container to scan for Q&A pairs
          const section = heading.closest("section") || heading.parentElement;
          if (section) {
            // Find all blocks with an h3 (question) and a p (answer) inside this section
            const faqBlocks = section.querySelectorAll(".border, .p-5, .p-6, div");
            faqBlocks.forEach((block) => {
              const h3 = block.querySelector("h3");
              const p = block.querySelector("p");
              if (h3 && p) {
                const qText = (h3.textContent || "").trim();
                const aText = (p.textContent || "").trim();
                // Ensure it's a valid question and not duplicate
                if (qText && aText && qText.endsWith("?") && qText.length < 250 && aText.length > 5) {
                  if (!extractedFaqs.some((f) => f.question === qText)) {
                    extractedFaqs.push({ question: qText, answer: aText });
                  }
                }
              }
            });

            // Sibling fallback (if blocks are not nested, e.g. h3 followed by p)
            const siblings = Array.from(section.querySelectorAll("h3, p"));
            for (let i = 0; i < siblings.length - 1; i++) {
              const current = siblings[i];
              const next = siblings[i + 1];
              if (current.tagName.toLowerCase() === "h3" && next.tagName.toLowerCase() === "p") {
                const qText = (current.textContent || "").trim();
                const aText = (next.textContent || "").trim();
                if (qText && aText && qText.endsWith("?") && qText.length < 250 && aText.length > 5) {
                  if (!extractedFaqs.some((f) => f.question === qText)) {
                    extractedFaqs.push({ question: qText, answer: aText });
                  }
                }
              }
            }
          }
        }
      });

      // 3. Fallback: Search the entire DOM for any bold/header elements ending with "?" and matching sibling paragraph
      if (extractedFaqs.length === 0) {
        const headers = Array.from(document.querySelectorAll("h3, h4, [class*='font-bold'], [class*='font-black']"));
        headers.forEach((header) => {
          const qText = (header.textContent || "").trim();
          if (qText && qText.endsWith("?") && qText.length > 10 && qText.length < 200) {
            // Check if there is an answer paragraph as a next sibling
            let sibling = header.nextElementSibling;
            while (sibling) {
              const tag = sibling.tagName.toLowerCase();
              if (tag === "p" || tag === "div") {
                const aText = (sibling.textContent || "").trim();
                if (aText && aText.length > 15 && !aText.endsWith("?") && aText.length < 800) {
                  if (!extractedFaqs.some((f) => f.question === qText)) {
                    extractedFaqs.push({ question: qText, answer: aText });
                  }
                  break;
                }
              }
              sibling = sibling.nextElementSibling;
            }
          }
        });
      }

      setFaqs(extractedFaqs);
    };

    // Delay extraction slightly to let React finish rendering client state (like open accordions or lists)
    const timeoutId = setTimeout(extract, 800);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  if (faqs.length === 0) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      id="dynamic-faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
