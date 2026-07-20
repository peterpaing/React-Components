import quoteIcon from '../assets/quote.png'
import defaultImage from '../assets/defaultImage.png'

export default function Testimonials({ image, children, name, job, ...rest }) {
    return (
        <div className="testimonial-with-img" {...rest}>
            
            <div className={image ? "image-container" : "no-image-container"}>
                
                <img src={image || defaultImage} alt={`${name || 'User'} profile`} />
                
               
                <img src={quoteIcon} alt="quote icon" className="quote-mark" />
            </div>

            
            {children && <p className="testimonial-text">{children}</p>}

            
            <div className="testimonial-author">
                {name && <span className="author-name">{name}</span>}
                {job && <span className="author-job">{job}</span>}
            </div>
        </div>
    )
}
