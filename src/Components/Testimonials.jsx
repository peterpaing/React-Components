import quoteIcon from '../assets/quote.png'
import defaultImage from '../assets/defaultImage.png'

export default function Testimonials({ image, children, name, job, ...rest }) {
    return (
        <div className={image ? "image-testimonial" : "no-image-testimonial"} {...rest}>
            
            <div className={image ? "image-container" : "no-image-container"}>
                
                <img src={image || defaultImage} alt={`${name || 'User'} profile`} className={image ? "user-image" : ""}/>
                
               
                <img src={quoteIcon} alt="quote icon" className="quote-mark" />
            </div>

            
            {children && <p className="testimonial-text">{children}</p>}

            
            <div className="testimonial-author">
                {name && <span className="author-name">{name}</span>}
                {job && <span className="author-title">{job}</span>}
            </div>
        </div>
    )
}
