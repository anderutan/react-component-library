import Badge from './components/Badge';
import Banner from './components/Banner';
import FlexContainer from './components/FlexContainer';

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
  return (
    <div className='p-5 font-roboto'>
      <h1 className='text-2xl mb-3 font-bold underline'>
        React Component Library
      </h1>
      <h2 className='mb-2 font-bold'>Square Badges Design</h2>
      <FlexContainer>
        {colorList.map((color) => (
          <div className='flex flex-col'>
            <p className='capitalize text-xxs text-gray-400'>{`${color} - Square`}</p>
            <Badge color={color}>Badge</Badge>
          </div>
        ))}
      </FlexContainer>

      <h2 className='mb-2 mt-7 font-bold'>Pill Badges Design</h2>
      <FlexContainer>
        {colorList.map((color) => (
          <div className='flex flex-col'>
            <p className='capitalize text-xxs text-gray-400'>{`${color} - Pill`}</p>
            <Badge color={color} borderRadius>
              Badge
            </Badge>
          </div>
        ))}
      </FlexContainer>

      <h2 className='mb-2 mt-7 font-bold'>Banners Design - Single Line</h2>
      {statusList.map((status) => (
        <div className='flex flex-col mt-5'>
          <p className='capitalize text-xxs text-gray-400'>{`${status} - Singleline`}</p>
          <Banner status={status}></Banner>
        </div>
      ))}

      <h2 className='mb-2 mt-7 font-bold'>Banners Design - Multi Line</h2>
      {statusList.map((status) => (
        <div className='flex flex-col mt-5'>
          <p className='capitalize text-xxs text-gray-400'>{`${status} - Multiline`}</p>
          <Banner status={status}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
          </Banner>
        </div>
      ))}
    </div>
  );
}

export default App;
