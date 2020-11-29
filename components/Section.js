export default function Section({children, bgcolor, customClass}){
    return(
        <div className={`section-default ${customClass}`} style={{backgroundColor: bgcolor}}>
            <div className="inner-section">
                {children}
            </div>
        </div>
    )
}

Section.defaultProps = {
    bgcolor: '#fff'
}