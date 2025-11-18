import React from "react";

const Services = () => {
    return (
        <div id="services" className="w-full session h-full bg-[#010101]">
            <div className="max-w-[1200px] mx-auto">
                <div className="upper flex flex-col lg:flex-row items-center justify-between ">
                    <div>
                        <div className="heading text-xl lg:text-2xl">
                            Our Services &{" "}
                            <span className="text-(--primary-color)"> Expertise</span>.
                        </div>
                        <div className="text text-(--text-color) text-xs lg:text-sm mt-4 ">
                            Unlock the full potential of your creativity with
                            our AI-powered design assistant. Explore new
                            dimensions of design
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/services-cube.svg"
                            className="size-[155px]"
                            alt=""
                        />
                    </div>
                </div>
                <div class="grid grid-cols-1  lg:grid-cols-3  grid-rows-2 gap-4">
                    {/* 1st Item */}
                    <div class="lg:col-span-1 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[linear-gradient(to_top_left,var(--primary-color),rgba(39,40,41,0.7)_40%)] p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[70%]">
                                Boost your customer outreach with automated calling solutions, appointment reminders, and follow-up services powered by smart voice technology.


                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">AI Calling Agent</div>
                    </div>

                    {/* 2nd Item */}
                    <div class="lg:col-span-2 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[#272829]/70 p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[60%]">
                                Get a responsive, fast, and modern website designed to showcase your brand, generate leads, and convert visitors effortlessly.


                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">Website Development</div>
                    </div>
                    <div class="lg:col-span-2 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[#272829]/70 p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[60%]">
                                Streamline your customer interactions across WhatsApp, Facebook, and Instagram with advanced chat automation and instant responses.
                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">AI Chatbot</div>
                    </div>
                    <div class="lg:col-span-1 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[linear-gradient(to_top_left,var(--primary-color),rgba(39,40,41,0.7)_40%)] p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[70%]">
                                Launch high-quality Android and iOS apps with user-friendly design, scalable architecture, and seamless functionality for your business.
                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">App Development</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
