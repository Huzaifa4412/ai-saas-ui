import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
    const faqs = [
        {
            qus: "What services does SynexaTech offer?",
            ans: "We provide AI chatbots, AI-powered calling agents, and modern website development to help businesses automate customer communication, enhance engagement, and grow faster.",
        },
        {
            qus: "How much does your AI chatbot cost?",
            ans: "Our AI chatbot costs a one-time setup fee of $150 USD upto $350 USD. There are no monthly charges, and you also get a free 7-day trial to test it before committing.",
        },
        {
            qus: "Can your chatbot work on WhatsApp and Instagram?",
            ans: "Yes! Our chatbots integrate seamlessly with WhatsApp, Facebook Messenger, Instagram Direct Messages, and even your website live chat — all managed by one smart bot.",
        },
        {
            qus: "Do you offer a free chatbot trial?",
            ans: "Absolutely! We offer a 7-day free trial where you can test the chatbot live on your platform, experience its features, and share feedback before final delivery.",
        },
        {
            qus: "How long does it take to deliver my chatbot?",
            ans: "Once we finalize your requirements, we deliver your custom-built chatbot in just 3 working days.",
        },
        {
            qus: "Do you build websites too?",
            ans: "Yes, we build fast, mobile-friendly, and SEO-ready websites customized to your brand. Pricing starts at $200 USD, delivered within 5–7 working days.",
        },
        {
            qus: "Is hosting and domain included in the website price?",
            ans: "No, hosting and domain charges are separate. However, we guide you in selecting and setting them up if needed.",
        },
        {
            qus: "What are AI calling agents, and how do they work?",
            ans: " AI calling agents are automated voice systems that talk like humans, qualify leads, send reminders, and handle follow-up calls using conversational AI — available 24/7 in multiple languages.",
        },
        {
            qus: "What is the pricing for AI calling agents?",
            ans: " Pricing is custom and depends on call volume, duration, language, and region. We offer a free consultation to create a package tailored to your needs.",
        },
    ];
    return (
        <div id="faqs" className="session  relative">
            <div>
                <div className="heading text-[clamp(2.5rem,2.8vw,5rem)] font-bold text-center">
                    Frequently Asked Questions
                </div>
                <div className="text text-[clamp(0.9rem,2vw,1rem)] text-center text-(--text-color) max-w-[800px] mx-auto">
                    Whether you're a safety professional, a fresh learner, or a corporate client seeking certified training, we understand you may have questions. That’s why we’ve compiled answers to the most commonly asked queries — from course selection and certification to delivery methods and international recognition. Still unsure? Our team is always ready to help.
                </div>
                <div className="max-w-220 mt-20 mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        {faqs.map((item, idx) => {
                            return (
                                <AccordionItem value={`item-${idx + 1}`} key={idx}>
                                    <AccordionTrigger>
                                        {item.qus}
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>{item.ans}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faqs;
