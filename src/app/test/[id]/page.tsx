import Image from 'next/image'
import Navbar from '@/components/Navbar'
import axios from 'axios';

const getUserData = (userId:number) => axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(function(response) {
    const data = response.data    
    return data;
}).catch(function(error) {
  console.log(error.response.data.result);
  return error.response.data.result;
});


export default async function User({params}:any) {


  const userData = await getUserData(params?.id);
  console.log(userData);
  
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
      <Navbar/>

      <div className="mb-32 sm:mt-20 w-full px-10 grid text-left lg:mb-0 lg:grid-cols-1 relative z-[1]">
        <div
          className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 border-neutral-700 hover:dark:bg-neutral-800/30"
        >
        {/*             
          <p className={`m-0 text-sm opacity-50`}>
            User data for ID : {params.id}
          </p> */}


          {/* If there is an error from API show it here */}
          { userData?.error && (
            <p className={`my-5 text-sm opacity-100`}>
              {userData?.error}
            </p>
          )}

          {/* If there was data, show it here instead */}
          { userData && (
            <h2 className={`mb-3 relative text-2xl font-semibold`}>
                {userData?.name}
            </h2>
            )}


            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.email}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.phone}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.website}
            </p>

            <h4 className={`mb-3 mt-6 relative text-lg font-semibold`}>
                Address Details
            </h4>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.address?.street}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.address?.suite}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.address?.city}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.address?.zipcode}
            </p>



            <h4 className={`mb-3 mt-6 relative text-lg font-semibold`}>
                Company details
            </h4>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.company?.name}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.company?.catchPhrase}
            </p>
            <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {userData?.company?.bs}
            </p>


        </div>
      </div>
      
    </main>
  )
}

