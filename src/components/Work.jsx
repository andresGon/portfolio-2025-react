import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import FuegoMaiz from '../assets/fuego-y-maiz-cover.jpg'

function Work() {
    const { t } = useTranslation();
    return(
        <>
            <div className="title-1">{t('title_work')}</div>
            <p className="text-1">{t('text_work')}</p>
            <div className='work-wrap'>
                <div className='work-item'>
                    <img src={FuegoMaiz} alt="Fuego y Maíz Menú digital"/>
                </div>
            </div>
            
        </>
    )
}

export default Work