import './App.css';
import Head from './component/Header';
import Noti from './component/Notification_area';

const my_notification=[
  {
      img:'./assets/images/avatar-mark-webber.webp',
      img_alt:'mark-webber',
      name:'Mark Webber',
      text:'reacted to your recent post ',
      imp:'My first tournament today!',
      time:' 1m ago',
      comment:"",
      img_2:'',
      img_alt_2:'',
  },
  {
      img:'./assets/images/avatar-angela-gray.webp',
      img_alt:'angela-gray',
      name:'Angela Gray',
      text:'followed you',
      imp:'',
      time:'5m ago',
      comment:"",
      img_2:'',
      img_alt_2:'',
  },
  {
    img:"./assets/images/avatar-jacob-thompson.webp",
    img_alt:'jacob-thompson',
    name:'Jacob Thompson',
    text:'has joined your group',
    imp:'Chess Club',
    time:'1 day ago',
    comment:'',
    img_2:'',
    img_alt_2:'',
  },
  {
    img:'./assets/images/avatar-rizky-hasanuddin.webp',
    img_alt:'rizky-hasanuddinw',
    name:'Rizky Hasanuddin ',
    text:'sent you a private message',
    imp:'',
    time:'5 days ago',
    comment:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    img_2:'',
    img_alt_2:'',
  },
  {
    img:'./assets/images/avatar-kimberly-smith.webp',
    img_alt:'kimberly-smith',
    name:'Kimberly Smith',
    text:'commented',
    imp:'on your picture',
    img_2:'./assets/images/image-chess.webp',
    img_alt_2:'chess',
    time:'1 week ago',
    comment:'',
  },
  {
    img:'./assets/images/avatar-nathan-peterson.webp',
    name:'Nathan Peterson',
    text:'reacted to your recent post',
    imp:'5 end-game strategies to increase your win rate',
    time:'2 weeks ago',
    comment:"",
    img_2:'',
    img_alt_2:'',
  },
  {
    img:'./assets/images/avatar-anna-kim.webp',
    name:'Anna Kim',
    text:'left the group',
    imp:'Chess Club',
    time:'2 weeks ago',
    comment:"",
    img_2:'',
    img_alt_2:'',
  },
 
]

function App() {
  
  function comment()
  {
      let a=document.querySelectorAll('#comment')
      for(let i=0;i<a.length;i++)
      if(!a[i].innerHTML)
      a[i].style.padding=0;
  }
  function read()
  {
    let p=document.querySelectorAll('#not')
        for(let i=3;i<p.length;i++)
        p[i].style.backgroundColor='white';
  }
  return (
    <div className="App"onLoad={comment}>
      <Head/>
      <div className="container" onLoad={read}>
      {
      my_notification.map((item)=>{
        return <Noti name={item.name} img={item.img} img_2={item.img_2} text={item.text} imp={item.imp} time={item.time} comment={item.comment} img_alt={item.img_alt} img_alt_2={item.img_alt_2}/>
        })
      }
      </div>
      
    </div>
  );
}

export default App;
