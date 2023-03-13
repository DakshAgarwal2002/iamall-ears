import React from 'react'
import './FilterLine.css'
import search from '../../assets/search.png'
import grid2 from '../../assets/grid.png'
import Group1 from '../../assets/Group1.png'
import Group4 from '../../assets/Group4.png'
import Group5 from '../../assets/Group5.png'
import Group6 from '../../assets/Group6.png'
import Group7 from '../../assets/Group7.png'
import list from '../../assets/list.png'
import sortDescending from '../../assets/sort-descending.png'
const FilterLine = () => {
  return (
    <div className='FilterLine'>
        <div className='sorting-by-date'>
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
        </div>
        <div className='filters'>
          <button className='filterClass'>Flower</button>
          <button className='filterClass'>Fruit</button>
          <button className='filterClass'>Flower</button>
          <button className='filterClass'>Fruit</button>
          <div className='dropdown-element filter-dropdown'>
          <div className='dropdown-logo'>
            <img src={sortDescending} alt="sortDescending" />
          </div>
        <div className="dropdown">
  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Filters
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
        </div>
    </div>
  )
}

export default FilterLine