import './feature-text.css'
import Link from '../../../elements/link/link';

function FeatureText({ title, paragraph1, paragraph2 }) {
    return (
        <div className='feature-text'>
            <h2 className='feature-text__title'>{title}</h2>
            <p className='feature-text__subtitle'>
                {paragraph1}
                <br />
                <br />
                {paragraph2}
            </p>
            <Link text='See Case Study' />
        </div>
    )
}

export default FeatureText;