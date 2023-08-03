import React from 'react'
import './grid.css'
import { useNavigate } from 'react-router-dom';
export const Grid = () => {
    const navigate = useNavigate()
    return (
        <div className='main'>
            <button onClick={() => navigate('/responsive')}>Go to Responsive</button>
            <h1> TIC-TAC-TOE</h1>
            <div className='container'>
                <div className='grid-container'>
                    <div class="grid-item1"></div>
                    <div class="grid-item1"></div>
                    <div class="grid-item4"></div>
                    <div class="grid-item2"></div>
                    <div class="grid-item2"></div>
                    <div class="grid-item4"></div>
                    <div class="grid-item3"></div>
                    <div class="grid-item3"></div>
                    <div class="grid-item5"></div>

                </div>
                <div className='intro'>
                    <h2>
                        Its Tic-Tac-Toe
                    </h2>

                    <h3>
                        X :
                        <span>0 </span>
                    </h3>

                    <h3>
                        O :
                        <span> 0</span>
                    </h3>

                </div>
            </div>

            <hr></hr>

            <div class="grid-container1">
  <div class="grid-item item1">1</div>
  <div class="grid-item item2">2</div>
  <div class="grid-item item3">3</div>  
  <div class="grid-item item4">4</div>
  <div class="grid-item item5">5</div>
</div>


        </div>
    )
}
