import SEOContentPage from "@/components/SEOContentPage";

export const metadata = {
    title: "AI Chatbots for Sales & Support | Syenxa Tech",
    description:
        "Syenxa Tech provides intelligent AI Chatbots to enhance customer support, lead generation, and sales automation 24/7.",
    keywords: [
        "AI Chatbots for Businesses",
        "AI Customer Support Agents",
        "Lead Generation",
        "Syenxa Tech AI Chatbots",
    ],
};

export default function AIChatbots() {
    return (
        <SEOContentPage
            title="AI Chatbots for Sales & Support"
            subtitle="Intelligent Automation for Your Business"
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white">
                            Enhance Customer Experience with AI Chatbots
                        </h2>
                        <p>
                            Syenxa Tech builds custom AI Chatbots that act as
                            your first line of customer support and lead
                            generation. Our solutions are designed to engage
                            visitors instantly, answering questions and
                            qualifying leads in real-time.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            AI Chatbots for Customer Support & Lead Generation
                        </h3>
                        <p>
                            Our chatbots are more than just automated
                            responders. They are intelligent agents capable of
                            understanding context, sentiment, and user intent,
                            providing a personalized experience that drives
                            conversions.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            24/7 Intelligent Support
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Instant Response:</strong> Reduce bounce
                                rates by engaging visitors the moment they land
                                on your site.
                            </li>
                            <li>
                                <strong>Lead Qualification:</strong>{" "}
                                Automatically filter high-quality leads for your
                                sales team.
                            </li>
                            <li>
                                <strong>Multi-Platform Integration:</strong>{" "}
                                Deploy your chatbot on your website, WhatsApp,
                                and social media.
                            </li>
                            <li>
                                <strong>Data Insights:</strong> Gain valuable
                                insights into customer behavior and common
                                queries.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            Syenxa Tech AI Solutions for Small Businesses
                        </h3>
                        <p>
                            We specialize in helping small businesses
                            leverage the power of AI to compete with larger
                            corporations by automating their customer service
                            and sales processes affordably.
                        </p>
                    </section>
                </div>
            }
            keywords={[
                "AI Chatbots",
                "AI Customer Support Agents",
                "Lead Generation AI",
            ]}
        />
    );
}
