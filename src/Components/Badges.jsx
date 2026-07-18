export default function Badges({style,color, children='Badge',...rest}) {
    
    return (
        <button className={`${style} ${color}`} {...rest}>
      {children}
    </button>

    )
}