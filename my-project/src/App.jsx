import Badge from './components/Badge';
import Banner from './components/Banner';
import Card from './components/Card';
import FlexContainer from './components/FlexContainer';
import Testimonials from './components/Testimonials';
import CloudDownIcon from './images/CloudDownIcon';
import portraitPhoto from '../src/images/portrait.jpeg';
import companyLogo from '../src/images/companyLogo.svg';

function App() {
  const colorList = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];

  const statusList = ['success', 'warning', 'error', 'neutral'];

  const testimonialsList = {
    may: {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ',
      name: 'May Andersons',
      position: 'CTO',
      company: 'Workcation',
      photo: portraitPhoto,
      logo: companyLogo,
    },
    may2: {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ',
      name: 'May Andersons',
      position: 'CTO',
      company: 'Workcation',
      photo: '',
      logo: companyLogo,
    },
  };
  return (
    <div className='p-5 font-roboto'>
      <h1 className='text-2xl mb-3 font-bold underline'>
        React Component Library
      </h1>
      <h2 className='mb-2 font-bold bg-gray-600 text-white inline-block px-2 py-1'>
        Square Badges Design
      </h2>
      <FlexContainer>
        {colorList.map((color) => (
          <div className='flex flex-col'>
            <p className='capitalize text-xs text-gray-400'>{`${color} - Square`}</p>
            <Badge color={color}>Badge</Badge>
          </div>
        ))}
      </FlexContainer>

      <h2 className='mb-2 mt-10 font-bold bg-gray-600 text-white inline-block px-2 py-1'>
        Pill Badges Design
      </h2>
      <FlexContainer>
        {colorList.map((color) => (
          <div className='flex flex-col'>
            <p className='capitalize text-xs text-gray-400'>{`${color} - Pill`}</p>
            <Badge color={color} borderRadius>
              Badge
            </Badge>
          </div>
        ))}
      </FlexContainer>

      <h2 className='mb-2 mt-10 font-bold bg-gray-600 text-white inline-block px-2 py-1'>
        Banners Design - Single Line
      </h2>
      {statusList.map((status) => (
        <div className='flex flex-col my-5'>
          <p className='capitalize text-sm text-gray-400'>{`${status} - Singleline`}</p>
          <Banner status={status}></Banner>
        </div>
      ))}

      <h2 className='mb-2 mt-10 font-bold bg-gray-600 text-white inline-block px-2 py-1'>
        Banners Design - Multi Line
      </h2>
      {statusList.map((status) => (
        <div className='flex flex-col my-5'>
          <p className='capitalize text-sm text-gray-400'>{`${status} - Multiline`}</p>
          <Banner status={status}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </Banner>
        </div>
      ))}

      <h2 className='mb-2 mt-10 font-bold bg-gray-600 text-white inline-block px-2 py-1'>
        Cards Design
      </h2>
      <FlexContainer>
        <div className='flex flex-col mt-5'>
          <p className='capitalize text-sm text-gray-400'>{`Default Style`}</p>
          <Card>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card>
        </div>

        <div className='flex flex-col mt-5 sm:ml-5'>
          <p className='capitalize text-sm text-gray-400'>{`With icon and color prop`}</p>
          <Card icon={<CloudDownIcon />} color='yellow'>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </Card>
        </div>
      </FlexContainer>

      <h2 className='mb-2 mt-10 font-bold bg-gray-600 text-white inline-block px-2 py-1'>
        Testimonials
      </h2>
      <FlexContainer>
        {Object.values(testimonialsList).map((testimonial) => (
          <Testimonials key={testimonial.name} testimonial={testimonial} />
        ))}
      </FlexContainer>
    </div>
  );
}

export default App;
