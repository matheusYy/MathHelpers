import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import { Calculadora } from '../../components/calculadora'
import { Menos } from '../../components/menos'
import { Input } from '../../components/input'
import View from '../../components/view'

const navigation = [
  { name: 'Home', to: '/' },
]

export default function Media() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [media, setMedia] = useState();
  const [variancia, setVariancia] = useState();
  const [desvio, setDesvio] = useState();


  function calc(values, bool) {
   let { data } = values;
   let it = data[Symbol.iterator]();
   let result = it.next();
   let accumulator = "";
   let array = [];
   
   while(!result.done) {
    let { value } = result;
    
    if(value == "" || value == ",") {
      array.push(accumulator);     
      accumulator = "";
    } else {
     accumulator += value;

    }
    
    result = it.next();
   }
   
   // final ->
   if(result.done) {
    let sum, media;
    let variancia, rest, exponecial;
    let raiz;
    let initial = 0
    
    array.push(accumulator);

    sum = array.reduce((accumulator, currentValue) =>  accumulator + parseInt(currentValue), initial);


    media = sum / array.length;

    rest = array.map((data) => {
     return data - media;
    });

    exponecial = rest.map((data) => {
     return data ** 2;
    })
 

    variancia = exponecial.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue, initial));

  
    variancia = variancia / exponecial.length 
    raiz = Math.round(Math.sqrt(variancia));
   

    

     setMedia(media);
     setVariancia(variancia);
     setDesvio(raiz);
   }


  
  
  }

  function addAll(arr = []) {
   let result;
   let initial = 0;
   result = arr.reduce((acc, data) => {
    return acc + parseInt(data), initial;
   });

   return result;
  }



  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">MathResolve</span>
              <Calculadora fill="bg-stone-500" styles="h-8 w-auto bg-white-400" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link to={item.to} key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Meu repositorio no {' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                GitHub <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
             Calculando a media, variância e desvio padrão
            </h1>
      
            <div className="mt-10 flex items-center justify-center gap-x-6">
             <div className='relative shadow-sm rounded-md flex justify-start items-center'>
              <span className='block absolute p-2'>
               <Menos />
              </span>
              <Formik
               initialValues={{ data: [""] }}
              
               onSubmit={(values, { setSubmitting }) => {
                calc(values, setSubmitting);
               }}
              >            
                  {() => ( 
                   <Form>
                    <Input holder="insira os valores" alt="input media" htmlFor="data" />
                     
                     <Field className="ease-linear duration-75 hover:text-cyan-600 text-zinc-500 absolute top-0 m-0.5 sm:m-3 p-1 right-4" type="submit" name="run" />
                   </Form>      
                  )}
              </Formik>
             </div>
             
            </div>
            <div className='mx-auto p-2 h-max w-max mt-5'>
             <View media={media} variante={variancia} desvio={desvio} />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
