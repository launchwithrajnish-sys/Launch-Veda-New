import App from "../App";
import SEOManager from "../components/seo/SEOManager";

export default function Home() {
  return (
    <>
      <SEOManager
        title="LaunchVeda | India’s No.1 Product Launch Company"
        description="LaunchVeda is India’s No.1 Product Launch Company helping founders launch Perfume, Cosmetic, Ayurveda, and Nutraceutical brands with formulation, manufacturing, branding, compliance, website, marketplace listing, and advanced growth marketing support."
        canonical="https://launchveda.com"
        organization={{
          name: "LaunchVeda",
          url: "https://launchveda.com",
          logo: "https://launchveda.com/logo-full.png",
          description: "Premium product launch platform for Perfume, Ayurveda, Cosmetic, and Nutraceutical brands.",
          email: "support@launchveda.com",
          telephone: "+918796300199",
          addressCountry: "IN",
          sameAs: [
            "https://www.facebook.com/people/LaunchVeda-Indias-Best-Product-Launch-Solution/61590478586919/",
            "https://www.instagram.com/launchveda.in/",
            "https://in.linkedin.com/launchveda",
            "https://x.com/launchveda",
            "https://www.threads.com/@launchveda",
            "https://in.pinterest.com/launchveda",
            "https://www.behance.net/launchveda",
            "https://www.youtube.com/@LaunchVeda"
          ]
        }}
        article={{
          headline: "LaunchVeda: Turn Your Idea Into a Brand - The Complete Launch Guide",
          image: "https://launchveda.com/background_image.png",
          datePublished: "2026-01-01T08:00:00+05:30",
          dateModified: "2026-06-30T00:18:54+05:30",
          description: "Learn how to launch your perfume, ayurveda, cosmetic, or nutraceutical brand with our complete connected launch ecosystem in India.",
        }}
        customSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://launchveda.com/#website",
            "url": "https://launchveda.com",
            "name": "LaunchVeda",
            "inLanguage": "en-IN",
            "description": "LaunchVeda helps founders launch Perfume, Ayurveda, Cosmetic, Nutraceutical and D2C product brands in India."
          }
        ]}
      />
      <App />
    </>
  );
}
