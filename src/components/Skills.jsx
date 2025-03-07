import { useTranslation, Trans } from 'react-i18next'; 
function Skills() {
    const { t } = useTranslation();
    return(
        <div className='skills-wrap'>
            <div className='skills-box'>
            <div className="title-1">{t('title_skills')}</div>
            <p className="text-1">
                <Trans i18nKey="text_intro_skills" components={{ b: <b /> }} />
            </p>
            </div>
            <div className='skills-grid'>
                <div className="skills-box">
                    <div className="skills-name">{t('ui_title_skills')}</div>
                    <p className='skills-description'>
                    {t('ui_text_skills')}
                    </p>
                </div>

                <div className="skills-box">
                    <div className="skills-name">{t('html_title_skills')}</div>
                    <p className='skills-description'>
                    {t('html_text_skills')}
                    </p>
                </div>

                <div className="skills-box">
                    <div className="skills-name">{t('css_title_skills')}</div>
                    <p className='skills-description'>
                    {t('css_text_skills')}
                    </p>
                </div>

                <div className="skills-box">
                    <div className="skills-name">{t('js_title_skills')}</div>
                    <p className='skills-description'>
                    {t('js_text_skills')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills