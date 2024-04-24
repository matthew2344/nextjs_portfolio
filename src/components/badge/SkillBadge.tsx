
interface SkillBadgeProp {
    title: string
}

const SkillBadge: React.FC<SkillBadgeProp> = ({
    title
}) => {

    return (
        <span className="font-serif inline-flex items-center px-2 py-1 border border-black dark:border-white  rounded-md italic">
            {title}
        </span>
    )

}

export default SkillBadge;