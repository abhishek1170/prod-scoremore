import "./headings.scss";

const Heading = ({circle = "",children}) => {
    return (
        <div className="circle-heading">
            <div className={`circle ${circle}`}/>
            {children}
        </div>
    )
}

export default Heading;