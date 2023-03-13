import React,{useState} from 'react'

import card from '../../assets/card.png'
import download from '../../assets/download.png'
import { cardMap } from '../../cardmap/CardMap.js'

import {RxCrossCircled} from 'react-icons/rx'
import search from '../../assets/search.png'
import grid2 from '../../assets/grid.png'
import Group1 from '../../assets/Group1.png'
import Group4 from '../../assets/Group4.png'
import Group5 from '../../assets/Group5.png'
import Group6 from '../../assets/Group6.png'
import Group7 from '../../assets/Group7.png'
import list from '../../assets/list.png'
import sortDescending from '../../assets/sort-descending.png'
import './Navbar.css'
import FilterLine from './FilterLine'
import './HeroSection.css'

const Navbar = () => {
  const [style1, setStyle1] = useState('listItem')
  const [gridStyleState, setgridStyleState] = useState('GridList')
  const [listStyleState, setlistStyleState] = useState('hide-class')
  const setGrid =()=>{
    setgridStyleState('GridList')
    setlistStyleState('hide-class')
  }
  const setList=()=>{
    setgridStyleState('hide-class')
    setlistStyleState('ListList')
  }
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
    const makeActiveCard=event=>{
      event.currentTarget.classList.toggle('active-card')
      console.log(event.currentTarget.children)
    }
  return (
    <>
      <div className='Navbar'>
        <div className='logo'>
          <img src={search} alt="search" />
        </div>
        <div className='appName'>
          Media Library
        </div>
        <div>
          <RxCrossCircled className='RxCrossCircled'/>
        </div>
      </div>
      <div className='Sub-Navbar'>
        <div>
          <img src={Group1} alt="Upload" />
        </div>
        <div>
          <img src={Group4} alt="Add File" />
        </div>
        <div>
          <img src={Group5} alt="Edit File" />
        </div>
        <div>
          <img src={Group6} alt="Copy File" />
        </div>
        <div>
          <img src={Group7} alt="Delete File" />
        </div>
        <div className='searchBox'>
        <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">
          <img src={search} alt="search" />
        </button>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
        </div>
        <div className='dropdown-element'>
          <div className='dropdown-logo'>
            <img src={sortDescending} alt="sortDescending" />
          </div>
        <div className="dropdown">
  <button className="btn dropdown-toggle w-38px" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Creation Date
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
        <div className='align-type'>
          <div id='grid-type' className='grid-type' >
            <img src={grid2} alt="grid" onClick={setGrid} />
          </div>
          <div id='list-type' className='list-type' >
            <img src={list} alt="list" onClick={setList} />
          </div>
        </div>
      </div>
      <FilterLine/>
      <div className='HeroSection'>
        <div className={gridStyleState}>
        {cardMap.map((user) => (
                <div className='card' onClick={makeActiveCard}>
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
        <div className={listStyleState}>

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
    </>
  )
}

export default Navbar