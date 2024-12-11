import './link.css';

function Link({ text }) {
    return (
        <div className="link">
            <span>&#9658;</span>
            <a href="#"> &nbsp; {text} </a>
        </div>
    )
}

export default Link;