import './line.css';

function Line({ color = 'line'}) {
    return (
        <div className={`${color}`}></div>
    )
}

export default Line;