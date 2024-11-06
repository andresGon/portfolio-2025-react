import { useTranslation } from 'react-i18next'; 
function Skills() {
    const { t } = useTranslation();
    return(
        <div className='skills-wrap'>
            <div className="title-1">{t('title_skills')}</div>
            <p className="text-1">
                My main skill is web layout, I like to work with styles and structures built from scratch, it is my priority to faithfully transfer the design to web code, for this work I use the adobe suite and I also use css3, html5 and javascript ecma 6 technologies.
            </p>
            <div className="skills-box">
                <div className="skills-name">UI Desing</div>
                <p className='skills-description'>
                I have experience in interface design for cms platforms, content management. I also have experience with adobe suites and other programs such as figma and sketch.
                </p>
            </div>

            <div className="skills-box">
                <div className="skills-name">Html 5</div>
                <p className='skills-description'>
                I have been working on this language for the last 8 years and have seen its evolution until version 5.
                </p>
            </div>

        </div>
    )
}

export default Skills