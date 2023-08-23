import { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://gradio.s3-us-west-2.amazonaws.com/3.40.0/gradio.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
   return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Ask me anything</h2>
  


    </section>
  )
   }

export default Chatbot
