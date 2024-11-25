import { useTranslation } from 'react-i18next'; 
function About() {
    const { t } = useTranslation();
    return(
        <>
            <div className="title-1">{t('title_About')}</div>
            <p className="text-1">{t('description_About')}</p>
            <div className="timeLine-wrap">
                <div className="timeLine-item">
                    <div className="timeLine-years">2014 - 2016</div>
                    <div className="timeLine-title">Books and books Ltda.</div>
                    <div className="timeLine-charge">{t('about_charge_1')}</div>
                    <div className="timeLine-text">{t('about_description_1')}</div>
                </div>

                <div className="timeLine-item">
                    <div className="timeLine-years">2016 - 2021 </div>
                    <div className="timeLine-title">Dasigno</div>
                    <div className="timeLine-charge">{t('about_charge_2')}</div>
                    <div className="timeLine-text">{t('about_description_2')}</div>
                </div>


                <div className="timeLine-item">
                    <div className="timeLine-years">2021 - 2022 </div>
                    <div className="timeLine-title">Titamedia</div>
                    <div className="timeLine-charge">UI developer</div>
                    <div className="timeLine-text">descripciotion</div>
                </div>


                <div className="timeLine-item">
                    <div className="timeLine-years">2023 - 2024 </div>
                    <div className="timeLine-title">Cluvi</div>
                    <div className="timeLine-charge">UI developer</div>
                    <div className="timeLine-text">descripciotion</div>
                </div>
            </div>
        </>
    )
}

export default About