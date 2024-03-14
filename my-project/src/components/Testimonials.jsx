import openQuoteIcon from '../images/openQuoteIcon.svg';

export default function Testimonials({ testimonial }) {
  const { quote, name, position, company, photo, logo } = testimonial;
  const divClasses = photo
    ? 'w-96 md:w-11/12 py-16 px-4 bg-blue-500 text-white relative flex max-md:flex-col max-md:mt-32 md:my-10'
    : 'w-96 md:w-11/12 py-16 px-4 bg-white text-black shadow-3xl relative flex flex-col mt-5 md:my-10';

  return (
    <div className={divClasses}>
      {photo ? (
        <img
          src={photo}
          alt=''
          className='w-11/12 md:w-[30%] h-52 md:h-[110%] object-cover object-center rounded-xl absolute max-md:-top-24 md:left-[5%] md:-top-5'
        />
      ) : (
        <img
          src={logo}
          alt=''
          className='w-[180px] self-center max-md:-mb-20'
        />
      )}
      <div
        className={
          photo
            ? 'max-md:mt-24 md:ml-[40%]'
            : 'max-md:mt-24 md:w-[768px] md:self-center'
        }
      >
        {photo ? (
          <img src={openQuoteIcon} alt='' className='h-12 w-12' />
        ) : null}
        <p className='text-xl font-medium py-6'>{quote}</p>
        {photo ? (
          <div>
            <p className='font-bold'>{name}</p>
            <p>{`${company}, ${position}`}</p>
          </div>
        ) : (
          <div className='md:flex md:justify-center md:gap-2'>
            <p className='font-bold'>{name}</p>
            <div className='max-md:hidden'>/</div>
            <p className='md:text-gray-400'>{`${company}, ${position}`}</p>
          </div>
        )}
      </div>
    </div>
  );
}
