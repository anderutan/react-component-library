import CloudIcon from '../images/CloudIcon';

export default function Card({ icon, color = 'blue', children }) {
  return (
    <div className='px-6 py-8 max-w-96 shadow-lg  hover:shadow-3xl flex flex-col items-center rounded-lg relative mt-10'>
      <div
        className={`w-12 h-12 bg-${color}-500 shadow-lg hover:shadow-3xl rounded-lg absolute -top-5 flex justify-center items-center`}
      >
        {icon ? icon : <CloudIcon />}
      </div>
      <p className='font-bold text-xl mb-5 mt-7'>Easy Deployment</p>
      <p className='text-sm text-center'>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </p>
    </div>
  );
}
