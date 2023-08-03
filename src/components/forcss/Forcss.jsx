import React from 'react'
import './forcss.css'
import pershiba from '../../constants/cutepanda.png';
import { useNavigate } from 'react-router-dom';
export const Forcss = () => {
    const navigate = useNavigate()
    return (
        <div className='mainWrapper'>
            <button className='nextButton' onClick={() => navigate('/')}> Go to css</button>

            <div >
                <div className='subWrapper'>
                    <h1>Welcome to CSS styling</h1>
                </div >

                <h1> Gradient</h1>
                <div className='wrapper'>

                    <div className='wrapper1'>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>

                    </div>
                    <div className='wrapper2'>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                    </div>
                    <div className='wrapper3'>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                        <h1>test</h1>
                    </div>

                </div>

                <h1> 2D</h1>
                <div className='maind2'>
                    <div className='d21'>
                        <h6>test</h6>
                        <h6>test</h6>

                    </div>
                    <div className='d22'>
                        <h6>test</h6>
                        <h6>test</h6>

                    </div>
                    <div className='d23'>
                        <h6>test</h6>
                        <h6>test</h6>

                    </div>



                </div>





                <h1> 3D</h1>
                <div className='maind3'>

                    <div className='d24'>
                        <h6>test</h6>
                        <h6>test</h6>

                    </div>
                    <div className='d31'>
                        <h6>test</h6>
                        <h6>test</h6>

                    </div>
                    <div className='d32'>
                        <h6>test</h6>
                        <h6>test</h6>

                    </div>


                </div>


<h1>Transistion</h1>
<div className='maind4'  >

    <div className='widthT'>
        <h4>Transistion width</h4>
    </div>
    <div className='widthTH'>
        <h4>Transistion width and height</h4>
    </div>
    <div className='widthH'>
        <h4>Transistion height with delay 1s</h4>
    </div>

</div>

<h4>reflection</h4>

<div className='maind4'  >

    <div className='panda'>
      <img src={pershiba} alt="panda"  height="100" width="100"/>
    </div>
    <div className='panda1'>
      <img src={pershiba} alt="panda1"  height="100" width="100"/>
    </div>
    <div className='panda2'>
      <img src={pershiba} alt="panda2"  height="100" width="100"/>
    </div>

</div>

<div className='maind6'>
<div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
</div>


<div className='maind5'>


<div class="newspaper">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
</div>

<br/>
</div>
<br/>



<div class="flex-container">
    <input type="text" />

  <button>1</button>
  <button>2</button>
  <button>3</button>  
  <button>4</button>
  <button>5</button>
  <button>6</button>  
  <button>7</button>
  <button>8</button>
  <button>9</button>  
  <button>*</button>
  <button>0</button>
  <button>#</button>  


</div>


            </div>
            <button className='nextButton nextsuport' onClick={() => navigate('/grid')}> Go to Grid</button>
        </div>

    )
}
