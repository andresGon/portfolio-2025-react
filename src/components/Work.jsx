import { useTranslation } from 'react-i18next'; // Importa el hook de traducción
import FuegoMaiz from '../assets/fuego-y-maiz-cover.jpg'

function Work() {
    const { t } = useTranslation();

    const handleWorkItemClick = () => {
        window.open('https://fuego-y-maiz.netlify.app', '_blank');
    };

    return(
        <>
            <div className="title-1">{t('title_work')}</div>
            <p className="text-1">{t('text_work')}</p>
            <div className='work-wrap'>
                <div className='work-item' onClick={handleWorkItemClick} style={{ cursor: 'pointer' }}>
                    <img src={FuegoMaiz} alt="Fuego y Maíz Menú digital"/>
                    <div>
                        <h3>Fuego y maiz</h3>
                        <p>{t('work_item_description_1')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work