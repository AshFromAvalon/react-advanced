import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './buyFormValidationSchema';

type UserSubmitForm = {
   fullname: string;
   username: string;
   email: string;
   password: string;
   confirmPassword: string;
};

const BuyForm = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isValid },
   } = useForm<UserSubmitForm>({
      resolver: yupResolver(validationSchema),
      mode: 'onBlur',
   });

   const onSubmit = (data: UserSubmitForm) => {
      console.log(JSON.stringify(data, null, 2));
   };

   return (
      <div className="w-1/4 my-8">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
               <label>Full Name</label>
               <input
                  type="text"
                  {...register('fullname')}
                  className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                     errors.fullname ? 'border border-red-500' : ''
                  }`}
               />
               <div className="text-red-500 text-sm">{errors.fullname?.message}</div>
            </div>

            <div className="mb-4">
               <label>Username</label>
               <input
                  type="text"
                  {...register('username')}
                  className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                     errors.username ? 'border border-red-500' : ''
                  }`}
               />
               <div className="text-red-500 text-sm">{errors.username?.message}</div>
            </div>

            <div className="mb-4">
               <label>Email</label>
               <input
                  type="text"
                  {...register('email')}
                  className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                     errors.email ? 'border border-red-500' : ''
                  }`}
               />
               <div className="text-red-500 text-sm">{errors.email?.message}</div>
            </div>

            <div className="mb-4">
               <label>Password</label>
               <input
                  type="password"
                  {...register('password')}
                  className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                     errors.password ? 'border border-red-500' : ''
                  }`}
               />
               <div className="text-red-500 text-sm">{errors.password?.message}</div>
            </div>
            <div className="mb-4">
               <label>Confirm Password</label>
               <input
                  type="password"
                  {...register('confirmPassword')}
                  className={`mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                     errors.confirmPassword ? 'border border-red-500' : ''
                  }`}
               />
               <div className="text-red-500 text-sm">{errors.confirmPassword?.message}</div>
            </div>

            <div className="flex gap-4">
               <button
                  disabled={!isValid}
                  className="disabled:bg-slate-400 rounded-sm px-4 py-2 bg-yellow-400 text-black"
                  type="submit"
               >
                  Register
               </button>
               <button
                  className="rounded-sm px-4 py-2 bg-yellow-400 text-black"
                  type="button"
                  onClick={() => reset()}
               >
                  Reset
               </button>
            </div>
         </form>
      </div>
   );
};

export default BuyForm;
