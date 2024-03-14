import openQuoteIcon from '../images/openQuoteIcon.svg';

export default function Testimonials({ testimonial }) {
  const { photo, quote, name, position, company } = testimonial;
  const divClasses = photo
    ? 'w-96 md:w-11/12 py-16 px-4 bg-blue-500 text-white relative flex max-md:flex-col max-md:mt-32 md:my-10'
    : null;

  return (
    <div className={divClasses}>
      <img
        src={photo}
        alt=''
        className='w-11/12 md:w-[30%] h-52 md:h-[110%] object-cover object-center rounded-xl absolute max-md:-top-24 md:left-[5%] md:-top-5'
      />
      <div className='max-md:mt-24 md:ml-[40%]'>
        <img src={openQuoteIcon} alt='' className='h-12 w-12' />
        <p className='text-xl font-medium py-6'>{quote}</p>
        <p className='font-bold'>{name}</p>
        <p>{`${company}, ${position}`}</p>
      </div>
    </div>
  );
}
