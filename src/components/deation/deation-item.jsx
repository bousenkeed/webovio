import './deation-item.css';
import Link from '../elements/link/link';

function DeationItem({ title1, title2, subtitle }) {
    return (
        <li className="deation__item">
            <div className='deation__title'>
                <h3 className=''>
                    {title1}
                </h3>
                <h3 className='deation__title'>
                    {title2}
                </h3>
            </div>
            
            <p className="deation__subtitle">
                {subtitle}
            </p>

            <Link text='Read More' />
        </li>
    )
}

export default DeationItem;