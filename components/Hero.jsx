import profile from '../assets/Gokul.jpeg';


function Hero() {
  return (
    <section className="hero">
       <div className='head'>
      <h1 >𝙷𝚒 𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 𝙼𝚢 𝙿𝚘𝚛𝚝𝚏𝚘𝚕𝚒𝚘</h1>
      </div>
    
     <img src={profile} alt="Gokul Raj" className='profileimg'/> 

      <h1>Hi, I'm <span>Gokul Raj</span></h1>
      <p>Java | JavaScript | React Developer</p>
      <a href="Resume.pdf"download> 
        <button className="btn">Download Resume</button> 
    </a>
    </section>
  );
}
  
    

export default Hero;
