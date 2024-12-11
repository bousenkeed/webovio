import './feature-image.css';

function FeatureImage({mainImage, avatar, text, name, profession, reverse}) {
    let className = '';
    if (reverse) {
        className = 'feature__img-text-container-reverse'
    }
    return (
        <div className='feature__left'>
                <div className='feature__img'>
                    <img src={mainImage} alt="feater project image" />
                </div>
                <div className={`feature__img-text-container ${className}`}>
                    <p className='feature__text'>{text}</p>
                    <div className='feature__person'>
                        <div className='feature__avatar'>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className='feature__info'>
                            <span className='feature__name'>{name}</span>
                            <span className='feature__profession'>{profession}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FeatureImage;