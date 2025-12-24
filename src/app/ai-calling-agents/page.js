import SEOContentPage from "@/components/SEOContentPage";

export const metadata = {
    title: "AI Calling Agents | Lead Qualification & Appointment Booking | Syenxa Tech",
    description:
        "Boost your sales with Syenxa Tech's AI Calling Agents. Automate lead qualification, appointment booking, and customer support with intelligent voice agents.",
    keywords: [
        "AI Calling Agents",
        "AI Voice Agents for Sales",
        "AI Appointment Booking Agents",
        "Syenxa Tech AI Calling Agents",
    ],
};

export default function AICallingAgents() {
    return (
        <SEOContentPage
            title="AI Calling Agents"
            subtitle="Lead Qualification & Appointment Booking"
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white">
                            Transform Your Sales with AI Calling Agents
                        </h2>
                        <p>
                            In today's fast-paced market, speed to lead is
                            everything. Syenxa Tech's AI Calling Agents are
                            designed to provide your business with global
                            reach, ensuring that every lead is
                            followed up within seconds, not hours.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            Why Choose Our AI Voice Agents for Sales?
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>24/7 Availability:</strong> Never miss a
                                lead again. Our agents work around the clock.
                            </li>
                            <li>
                                <strong>Natural Language Processing:</strong>{" "}
                                Conversations that feel human, professional, and
                                engaging.
                            </li>
                            <li>
                                <strong>Automated Appointment Booking:</strong>{" "}
                                Seamlessly integrate with your calendar to book
                                meetings directly.
                            </li>
                            <li>
                                <strong>Scalability:</strong> Handle hundreds of
                                simultaneous calls without increasing overhead.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            AI Appointment Booking Agents
                        </h3>
                        <p>
                            Our AI Appointment Booking Agents are specifically
                            trained to handle objections and guide prospects
                            through the booking process, significantly
                            increasing your conversion rates for sales meetings
                            and consultations.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            Intelligent AI Sales Agents for Your Business
                        </h3>
                        <p>
                            Whether you are a small business or a large
                            enterprise, our AI automation solutions are tailored
                            to help you scale your outreach and boost revenue
                            efficiently.
                        </p>
                    </section>
                </div>
            }
            keywords={[
                "AI Calling Agents",
                "Voice AI agent for sales",
                "Syenxa Tech AI solutions",
            ]}
        />
    );
}
