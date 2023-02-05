function Noti(propes)
{
    return(
        <div>
            <div className="not" id="not">
                <img src={propes.img} alt={propes.img_alt}/>
                <div className="text">
                    <p>
                        <span className='name'>{propes.name}</span> {propes.text} <span>{propes.imp}</span> <br/>{propes.time}
                    </p>
                    <p className="comment" id="comment">
                        {propes.comment}
                    </p>
                    
                </div>
                <img src={propes.img_2} alt={propes.img_alt_2}/>
            </div>
        </div>
    );
}

export default Noti;