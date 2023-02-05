function Head(){
    function markRead()
    {
        let p=document.querySelectorAll('#not')
        for(let i=0;i<p.length;i++)
        p[i].style.backgroundColor='white';
    }
    return(
        <div className="header">
             <h2>Notifications <span id="count">3</span></h2>
             <p onClick={markRead} >Mark all as read</p>
        </div>
    );
}
export default Head;