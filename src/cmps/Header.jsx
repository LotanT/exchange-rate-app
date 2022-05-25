import { Link } from 'react-router-dom';

export function Header() {
    return (
        <section className="header container">
            <div className='header-title'>Exchange Rate!</div>
            <div className='links'>
                <Link to="/eur">
                    USD-EUR
                </Link>
                <Link to="/gbp">
                    USD-GBP
                </Link>
            </div>
        </section>
    )
}