
const Button = ({ text, variant }) => {

    return (
        variant == 'primary' ? (
            <button className="btn lg:px-[35px] lg:py-[15px] px-[25px] py-2.5 rounded-lg bg-(--primary-color)  xl:text-[20px]">
                {text}
            </button>
        ) :
            (
                <button className="btn lg:px-[35px] lg:py-[15px]  px-[25px] py-2.5 rounded-lg bg-transparent border border-[#FCFCFC]/13   xl:text-[20px]">
                    {text}
                </button>
            )
    )

}

export default Button