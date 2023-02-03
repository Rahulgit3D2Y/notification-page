


function Noti(propes)
{
    return(
        <div>
            <div className="not">
                <img src={propes.img} alt={propes.img_alt}/>
                <div className="text">
                    <p>
                        {propes.name} {propes.text} {propes.imp} <br/>{propes.time}
                    </p>
                    <p className="comment">
                        {propes.comment}
                    </p>
                    
                </div>
                <img src={propes.img_2} alt={propes.img_alt_2}/>
            </div>
        </div>
    );
}

export default Noti;