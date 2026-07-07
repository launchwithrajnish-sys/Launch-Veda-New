import SEOManager from "../../components/seo/SEOManager";
import ProcessClientPage from "./ProcessClientPage";

const faqs = [
	{
		q: "How does LaunchVeda start the process?",
		a: "We start by understanding the founder’s product idea, category, budget, target audience, launch goals and current stage.",
	},
	{
		q: "How long does a product launch take?",
		a: "A typical launch can take 8 to 12 weeks or more depending on category, formulation, sampling, manufacturing, packaging and compliance requirements.",
	},
	{
		q: "Does LaunchVeda help with manufacturer selection?",
		a: "Yes. LaunchVeda helps founders identify suitable manufacturers based on product category, MOQ, quality expectations and documentation needs.",
	},
	{
		q: "Does LaunchVeda support compliance?",
		a: "Yes. LaunchVeda provides packaging, label, documentation and compliance direction based on the selected category and launch platform.",
	},
	{
		q: "What happens after the product is ready?",
		a: "LaunchVeda supports website, marketplace setup, content planning, social media, performance marketing direction and advanced growth systems.",
	},
];

export default function Page() {
	return (
		<>
			<SEOManager
				title="Our Process | LaunchVeda Product Launch System"
				description="Explore LaunchVeda’s structured product launch process from category strategy, formulation and manufacturing support to packaging, compliance, marketplace launch and advanced growth."
				canonical="https://launchveda.com/process"
				breadcrumb={[
					{ name: "Home", item: "https://launchveda.com" },
					{
						name: "Process",
						item: "https://launchveda.com/process",
					},
				]}
				service={{
					name: "Product Launch System",
					description:
						"Structured product launch process covering category strategy, formulation, manufacturing support, packaging, compliance, marketplace launch, and advanced growth.",
				}}
				faq={faqs}
			/>
			<ProcessClientPage />
			hello
		</>
	);
}
