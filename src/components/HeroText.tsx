interface HeroTextProps {
    copy: string
    fontSize?: string
}

const HeroText: React.FC<HeroTextProps> = ({copy, fontSize = 'text-4xl'}) => {
    return (
    <div className="bg-cinnabar">
        <div className=""> {/* Containter Containter Containter*/}
            <div className={` ${fontSize} text-jet-stream  px-6 py-32  `}>
            <p>{copy}</p>
            </div>
        </div>
    </div>
    )

}

export default HeroText