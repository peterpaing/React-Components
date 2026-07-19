import successIcon from '../assets/success.png'
import errorIcon from '../assets/error.png'
import neutralIcon from '../assets/neutral.png'
import warningIcon from '../assets/warning.png'

const statusIcons = {
    success: successIcon,
    error: errorIcon,
    neutral: neutralIcon,
    warning: warningIcon
}


export default function Banner({children , status='neutral' , text , ...rest}){

    const statusColor = `banner-${status}`

    
    return (
        <div className={`banner-Container ${statusColor}`} {...rest} >
        <div>
            <img src={statusIcons[status]} alt={`${status} icon`} />
            <p>{text}</p>
        </div>
        {children && <p>{children}</p>}
        </div>
    )
}