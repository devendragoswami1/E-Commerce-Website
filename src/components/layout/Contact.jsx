import map from '../../assets/map.jpg'

function Contact() {
  return (
    <>
    <div className="text-4xl tracking-widest text-center uppercase my-6">contact</div>
        <h3 className="text-center mb-10">You tell us. We listen!</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-16">
            <div className="text-xl my-4">
                <div>Chicago, US</div>
                <div>Phone: +00151515</div>
                <div>Email: mail@mail.com</div>
            </div>
            <div className="my-4">
                <form action="#">
                    <input className="placeholder:text-gray-600 block px-2 py-2 sm:border-b-2  w-full border-2 rounded-lg  border-gray-400 border-b-0 sm:w-[46%] sm:inline-block" type="text" placeholder="Name" />
                    <input className="placeholder:text-gray-600 block px-2 py-2 w-full border-2 rounded-lg border-gray-400 sm:w-[46%] sm:inline-block sm:float-right" type="emil" placeholder="Email"/>
                    <input className="placeholder:text-gray-600 block px-2 py-2 my-4 w-full border-2 border-gray-400" type="text" placeholder="Message" />
                    <button className="uppercase text-white bg-black px-3 py-1 text-base ml-96 rounded-sm" onclick={ (e) => e.preventDefault()} >send</button>
                </form>
            </div>
        </div>
    <div className="my-20"><img className="w-full" src={map} alt=""/></div>

    </>
  )
}

export default Contact
