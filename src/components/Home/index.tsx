import * as React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <h1>Full Body Strength</h1>
    <ul>
      <li>
        <Link to="/strength">Everyday Strength</Link>
      </li>
      <li>
        <Link to="/isometric">Isometric Strength</Link>
      </li>
      <li>
        <Link to="/fullmass">Mass Gain</Link>
      </li>
      <li>
        <Link to="/uppermass">Upper Mass Gain</Link>
      </li>
      <li>
        <Link to="/lowermass">Lower Mass Gain</Link>
      </li>
    </ul>
    <h1>Flexibility</h1>
    <ul>
      <li>
        <Link to="/dynamic">Dynamic</Link>
      </li>
      <li>
        <Link to="/pnf">PNF</Link>
      </li>
      <li>
        <Link to="/relaxed">Relaxed</Link>
      </li>
    </ul>
  </div>
)
