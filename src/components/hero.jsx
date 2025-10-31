import Button from "./button"
import "./hero.css"
const Hero = () => {

    return (
        <>
            <main className="relative flex flex-col items-center justify-between pt-[200px] text-center gap-6 px-10">
                <div className="upper-section flex flex-col items-center justify-center text-center gap-6">
                    <div className="reviews border flex items-center justify-center border-white/15 max-w-[340px] h-[75px] w-full bg-linear-to-r px-[23px] py-[15px] from-[rgba(255,84,31,0.13)] to-[rgba(255,84,31,0.04)]  rounded-full">
                        <div className="images relative  w-full h-full flex items-center -space-x-4">
                            {
                                Array.from({ length: 5 }, (_, i) => i + 1).map((item, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={`/hero-r-${index + 1}.png`}
                                            className={`sm:size-12 size-9 rounded-full border border-white/70 object-cover z-[${index}]`}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="text -translate-x-4 flex flex-col items-center justify-between gap-1">
                            <div className="stars flex">
                                {

                                    Array.from({ length: 5 }, (_, i) => i + 1).map((item, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src="/star.svg"
                                                className="inline-block sm:size-3 size-2.5 ml-1"
                                            />
                                        )
                                    })
                                }
                            </div>
                            <span className="text-white/75 min-[400px]:text-xs text-[10px] ml-4 ">150+ Happy clients</span>
                        </div>
                    </div>
                    {/* Main heading */}
                    <div className="heading text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] max-w-4xl text-white/75 text-center">
                        Automate <span className="text-(--primary-color)">Intelligence</span>.
                        <br /> Accelerate Growth.
                    </div>
                    <p className="max-w-[650px] text-(--text-color) text-[clamp(0.9rem,2vw,1.1rem)]">Our AI-powered SaaS platform empowers businesses to streamline operations, automate repetitive tasks, and make smarter, data-driven decisions—all from one intuitive dashboard.</p>
                    <div className="btns flex gap-6">
                        <Button text={"Get Started"} variant={"primary"} />
                        <Button text={"See Details"} />
                    </div>
                    {/* Achievements Section */}
                </div>
                <div className="achievements glass-card w-full mb-5 mx-auto min-h-[210px] flex items-center rounded-xl border border-white/10">
                    <div className="w-full h-full flex justify-center items-center divide-x divide-white/20 gap-6 flex-wrap">

                        <Achievement title={"Client"} value={"120k+"} />
                        <Achievement title={"Projects"} value={"150+"} />
                        <Achievement title={"5-Star Review"} value={"32k+"} />

                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero

const Achievement = ({ title, value }) => {
    return (
        <div className="flex-1 min-w-[150px] min-h-[100px] p-5">
            <div className="title text-(--primary-color) text-xl mb-2 text-[clamp(0.9rem,1vw,1.5rem)]">

                {title}
            </div>
            <div className="value text-5xl font-semibold text-[clamp(2.5rem,4vw,4rem)]">
                {value}
            </div>
        </div>
    )
}

