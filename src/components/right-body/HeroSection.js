import React,{useState} from 'react'
import './HeroSection.css'
import card from '../../assets/card.png'
import download from '../../assets/download.png'
import { cardMap } from '../../cardmap/CardMap.js'
const HeroSection = () => {
    const [style1, setStyle1] = useState('listItem')
    let num=0;
    const changeStyleList = event => {
        if(num==0)
        {
            setStyle1('listItem-active')
            num=1
        }
        else
        {
            setStyle1('listItem')
            num=0
        }

        event.currentTarget.classList.toggle('active-check')
        
    };
  return (
    <div className='HeroSection'>
        <div className='GridList'>
        {cardMap.map((user) => (
                <div className='card'>
                <div className='user-image'>
                    <img src={user.imagelink} alt="card" />
                </div>
                <div className='card-info'>
                    <div>
                        <h6>{user.name}</h6>
                        <p>3.4MB</p>
                    </div>
                    <div className='card-format'>
                        <button className='format'>
                            <span>jpg</span>
                        </button>
                        <div>
                            <img src={download} alt="download" />
                        </div>
                    </div>
                </div>
            </div>
                
            ))}
        </div>
        <div className='ListList'>

            <div className='listItem List-Heading'>

                <div className='Item1'>
                <div className='List-Heading1'></div>
                <div className='list-download-image'>
                    <img src={download} alt="download" />
                </div>
                <div className='list-image'>
                    <img src={card} alt="card" />
                </div>
                </div>
                

                <p>File Name</p>
                <p className='size-ratio'>Size | ratio</p>
                <p className='date'>Date</p>
                <p className='Author'>Author</p>
            </div>

            {cardMap.map((user) => (
                <div className={style1}>

                <div className='Item1'>
                <div className='List-Heading1' onClick={changeStyleList}></div>
                <div className='list-download-image'>
                    <img src={download} alt="download" />
                </div>
                <div className='list-image'>
                    <img src={user.imagelink} alt="card" />
                </div>
                </div>
                

                <p className='file-name'>{user.filename}</p>
                <p className='size-ratio'>{user.size}|{user.ratio}</p>
                <p className='date'>5 Jan 2021, 6:05 PM</p>
                <p className='Author'>{user.Author}</p>
            </div>
            ))}

            
        </div>
        
    </div>
  )
}

export default HeroSection