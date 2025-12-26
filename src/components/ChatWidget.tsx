import * as Popover from '@radix-ui/react-popover';
import {Bot, X, Send } from 'lucide-react';
import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      
      <Popover.Trigger asChild>
        <button
          className={`
            fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl 
            flex items-center justify-center transition-all duration-300 z-50
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            ${isOpen ? 'bg-red-500 rotate-90' : 'bg-indigo-600 rotate-0 hover:bg-indigo-700'}
          `}
          aria-label="Chat de soporte"
        >
          {isOpen ? <X color="white" size={24} /> : <Bot color="white" size={28} />}
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content 
          className="
            w-[90vw] sm:w-[380px] h-[500px] 
            bg-white rounded-2xl shadow-2xl border border-gray-100 
            mr-6 mb-24 flex flex-col overflow-hidden
            data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-bottom-2
            data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95
            z-50
          "
          side="top"
          align="end"
          sideOffset={5}
        >
          <div className="bg-indigo-600 p-4 shrink-0">
            <h3 className="text-white font-semibold text-lg">Asistente Virtual</h3>
            <p className="text-indigo-100 text-xs">En línea</p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                <p className="text-sm text-gray-800">¡Hola! Soy el asistente de la web. ¿En qué te ayudo?</p>
              </div>
            </div>
            
             <div className="flex justify-end">
              <div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                <p className="text-sm text-white">Hola, busco información sobre...</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Escribe un mensaje..." 
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <button type="submit" className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition">
                <Send size={18} />
              </button>
            </form>
          </div>
          
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}