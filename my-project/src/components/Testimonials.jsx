export default function Testimonials({ testimonial }) {
  const { photo, quote, name, position } = testimonial;
  const divClasses = photo ? 'w-96 bg-blue-500 text-white relative' : null;

  return (
    <div className={divClasses}>
      <img
        src={photo}
        alt=''
        className='w-80 h-52 object-cover object-center rounded-lg'
      />
      <p>{quote}</p>
      <p>{name}</p>
      <p>{position}</p>
    </div>
  );
}
