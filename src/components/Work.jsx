import { useTranslation } from 'react-i18next'; // Importa el hook de traducción

function Work() {
    const { t } = useTranslation();
    return(
        <>
            <div className="title-1">{t('title_work')}</div>
            <p className="text-1">{t('text_work')}</p>
        </>
    )
}

export default Work