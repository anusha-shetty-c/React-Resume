import React from 'react'
import './Resume.css'
import anusha from '../../images/anusha.jpg'
function Resume() {
  return (

    <div>
      <center><h3 >RESUME</h3></center>
      <hr></hr>
      <form>
        <center><img src={anusha} /></center>
        <div class="smallText">
          <h3 className="a" >
            web-developer
          </h3>
        </div>
        <hr></hr>
        <ul className='s'>
          <b> <li>SHETTY ANUSHA CHANDRASHEKAR</li></b>
          <b><li>Email:anusha.21ai049@sode-edu.in</li></b>
          <b><li>Ph-no:6360482019</li></b>
        </ul>
        <div className='c'>
          <b><span > githbub profile:</span></b>


          <a href="https:github.com/anusha-shetty-c" target="_blank"> click here</a>
        </div>
        <h2 className="b"> PROFILE:</h2>
        <h3><p > B.E student.
          I consider my self a
          responsible and orderly
          person.
          I am looking foward for
          my first work
          experience.
        </p></h3>
        <h1 className='e'>EDUCATION</h1>
        <ul className='d'>
          <b><li>High School:
            St.Lawrence English Medium High School</li></b>
          <b><li>Pre-University:
            Jnana Ganga PU College</li></b>
          <b><li>Engineering:
            Shri Madhwa Vadiraja InstituteOf Technology And Management</li></b>
        </ul>

        <h2 className='f' > SKILLS:</h2>
        <ul className='g'>
          <b><li>Web Developer
          </li></b>
          <b><li>Design Thinking</li></b>
          <b><li>Effective Communicater</li></b>

        </ul>

        <h2 className='h'  > CERTIFICATION:</h2>
        <ul className='i'>
          <b><li>Niveous Hackathon</li></b>
          <b><li>CANOAI(mini projec)</li></b>
          <b><li>Ethical Hacking</li></b>
        </ul>

        <h2 className='j'> PROGRAMMING-LANGUAGES</h2>
        <ul className='k'>
          <b><li>c</li></b>
          <b><li> c++</li></b>
          <b><li> python</li></b>
          <b><li> java</li></b>
        </ul>




      </form>
    </div>

  )
}

export default Resume