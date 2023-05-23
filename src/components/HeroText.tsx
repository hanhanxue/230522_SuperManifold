interface HeroTextProps {
    copy: string
}

const HeroText: React.FC<HeroTextProps> = ({copy}) => {
    return (
    <div className="bg-cinnabar">
        <div className=""> {/* Containter Containter Containter*/}
            <div className="text-7xl text-jet-stream  px-6 py-32  ">
            <p>{copy}</p>
            </div>
        </div>
    </div>
    )

}

export default HeroText