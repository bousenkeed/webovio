import './feature-project.css';


function FeatureProject({children, reverse}) {
    let className = 'feature';
    if (reverse) {
        className = 'feature-reverse';
    }
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default FeatureProject;