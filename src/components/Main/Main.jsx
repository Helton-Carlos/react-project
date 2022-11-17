import Illustration from '../../assets/Illustration.svg'
import MyButton from '../MyButton/MyButton.jsx'

function Main() {
  function addFuncion() {
    alert('Try it for free')
  }

  return (
    <div className="lg:flex lg:justify-between items-center mt-4">
      <div className='lg:w-[400px]'>
        <h2 className='font-bold text-4xl lg:text-6xl'>Designed and built to keep you selling</h2>
        <p className='text-base pt-4'>When you need to stay focused and alert on the right deals, our CRM is here to support you.</p>
       
        <MyButton text="Try it for free" onClick={addFuncion} />
      </div>
      
      <img src={ Illustration } alt="Illustration" className='h-[450px]'/>
    </div>
  )
}

export default Main
