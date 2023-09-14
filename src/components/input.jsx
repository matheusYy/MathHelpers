import { Field, ErrorMessage} from "formik";

export const Input = (props) => {
const { holder, alt } = props;

 return (
  <>
    <Field 
      className='max-sm:text-sm md:p-4 md:pl-16 ease-in duration-75 block pl-8 border-0 ring-inset outline-none ring-2 rounded-md p-2 ring-zinc-400 focus:ring-cyan-600'
      name="data"
      type='text' 
      placeholder={holder} 
      alt={alt} />
     <ErrorMessage name="data" component={<>error</>} />
  </>
 );
}