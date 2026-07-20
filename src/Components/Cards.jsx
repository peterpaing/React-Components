import logoIcon from '../assets/card-icon.png'


export default function Cards({icon,heading,children,...rest}){
    return (
        <div className="card-container" {...rest}>
            <div className='icon'>
            <img src={icon || logoIcon} alt="card icon" />
            </div>
            {heading && <h3>{heading}</h3>}
            {children && <p>{children}</p>}
        </div>
    )
}