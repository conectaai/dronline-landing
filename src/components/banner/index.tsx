import DefaultBtn from '../default-btn';
import './style.scss';

import banner from '../../images/banner.png';

interface BannerProps {
    title: string
};

export default function Banner(props: BannerProps) {
    const { title } = props;
    return (
        <div className="banner d-flex align-items-center">
            <div className="label-container d-flex flex-column justify-content-center">
                <p className='title-42-medium mb-xlg'>{title}</p>
                <DefaultBtn
                    title="Teste gratuitamente"
                    link='https://www.google.com'
                />
            </div>
            <div className='banner-image-container d-flex align-items-center'>
                <img src={banner} alt="" className='img-fluid'/>
            </div>
        </div>
    );
}