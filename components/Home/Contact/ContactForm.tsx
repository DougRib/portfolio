import React from 'react'

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
        <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
            vamos trabalhar
        </h1>
        <p className="text-gray-300 mt-3 lg:text-base text-xs md:text-sm">
            envie-me um email com suas informações e eu irei responder o mais breve possível
        </p>
        <form className="mt-8 block w-full overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <input 
                    type="text"
                    placeholder="Primeiro Nome"
                    className="flex-1 bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full" 
                />
                <input 
                    type="text"
                    placeholder="Ultimo Nome"
                    className="flex-1 bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full" 
                />
            </div>
            <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
                <input 
                    type="email"
                    placeholder="E-mail q"
                    className="flex-1 bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full" 
                />
                <input 
                    type="text"
                    placeholder="Telefone"
                    className="flex-1 bg-black text-white placeholder:text-gray-500 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full" 
                />
            </div>
            <div>
                <select className="w-full mt-5 bg-black text-white placeholder:text-gray-400 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
                    <option value="" disabled selected>
                        Selecione uma opção
                    </option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="mobile">Mobile Development</option>
                </select>
            </div>
            <textarea 
                className="w-full mt-5 bg-black text-white placeholder:text-gray-400 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
                rows={10}
                placeholder="Mensagem"
            >
            </textarea>
            <div className="mt-4">
                <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
                    Enviar Mensagem
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm