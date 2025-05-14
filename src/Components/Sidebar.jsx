import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div>
        <aside>
            <nav>
                <h3>Top anime</h3>
                <a className='Top-animeLInk' 
                    href="#" 
                    target="_blank" 
                    rel="norefferrer">Mashle Magic and Muscle
                </a>
                <a className='Top-animeLInk' 
                    href="#" 
                    target="_blank" 
                    rel="norefferrer">One punch man
                </a>
                <a className='Top-animeLInk' 
                    href="#" 
                    target="_blank" 
                    rel="norefferrer">Bleach
                </a>
                <a className='Top-animeLInk' 
                    href="#" 
                    target="_blank" 
                    rel="norefferrer">FairyTail
                </a>
            </nav>
        </aside>
    </div>
  )
}

export default Sidebar
