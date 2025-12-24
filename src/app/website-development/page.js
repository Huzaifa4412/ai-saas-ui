import SEOContentPage from "@/components/SEOContentPage";

export const metadata = {
    title: "SEO Optimized Website & App Development | Syenxa Tech",
    description:
        "Syenxa Tech is a leading website development company, specializing in responsive website design, mobile app development, and SEO-friendly web solutions.",
    keywords: [
        "Website Development Company",
        "Responsive Website Design",
        "SEO-Friendly Website Development",
        "Mobile App Development Company",
    ],
};

export default function WebsiteDevelopment() {
    return (
        <SEOContentPage
            title="Website & App Development"
            subtitle="SEO Optimized & Performance Driven Solutions"
            content={
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white">
                            Custom Web & App Solutions for Global Reach
                        </h2>
                        <p>
                            At Syenxa Tech, we don't just build websites; we
                            create digital experiences that drive growth. As a
                            premier website development company, we
                            focus on building high-performance, SEO-friendly,
                            and mobile-responsive websites tailored to your
                            brand.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            Responsive Website Design
                        </h3>
                        <p>
                            With the majority of traffic coming from mobile
                            devices, having a responsive website design is
                            crucial. Our development team ensures that your site
                            looks and performs flawlessly on every device, from
                            smartphones to desktops.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            Mobile App Development
                        </h3>
                        <p>
                            We specialize in custom iOS and Android app
                            development, helping businesses reach their
                            customers on the go. Our apps are built with
                            scalability and security in mind, ensuring a
                            seamless user experience.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-(--primary-color)">
                            Why Syenxa Tech for Development?
                        </h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>SEO-Friendly:</strong> Every line of
                                code is optimized for search engines to help you
                                rank on the first page.
                            </li>
                            <li>
                                <strong>Speed & Performance:</strong>{" "}
                                Fast-loading pages that improve user retention
                                and conversion rates.
                            </li>
                            <li>
                                <strong>Modern Tech Stack:</strong> Leveraging
                                the latest technologies like Next.js, React, and
                                Tailwind CSS.
                            </li>
                            <li>
                                <strong>Scalable Architecture:</strong>{" "}
                                Solutions that grow with your business.
                            </li>
                        </ul>
                    </section>
                </div>
            }
            keywords={[
                "Website Development",
                "App Development Company",
                "Custom Web Solutions",
            ]}
        />
    );
}
