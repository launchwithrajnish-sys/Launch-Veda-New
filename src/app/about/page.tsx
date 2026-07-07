import SEOManager from "../../components/seo/SEOManager";
import AboutClientPage from "./AboutClientPage";

export default function Page() {
  return (
    <>
      <SEOManager
        title="About LaunchVeda | End-to-End Product Launch Partner in India"
        description="LaunchVeda helps founders launch Perfume, Ayurveda, Cosmetic, Nutraceutical and D2C brands with formulation, manufacturing support, compliance, packaging, marketplace and advanced growth."
        canonical="https://launchveda.com/about"
        breadcrumb={[
          { name: "Home", item: "https://launchveda.com" },
          { name: "About", item: "https://launchveda.com/about" }
        ]}
        organization={{
          name: "LaunchVeda",
          url: "https://launchveda.com",
          description: "End-to-End Product Launch Partner in India"
        }}
      />
      <AboutClientPage />
    </>
  );
}

