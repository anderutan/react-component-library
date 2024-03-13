import Badge from './components/Badge';
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
  return (
    <div className='p-5 font-roboto'>
      <h1 className='text-2xl mb-3 font-bold underline'>
        React Component Library
      </h1>
      <h2 className='mb-1 font-bold'>Square Badges Design</h2>
      <FlexContainer>
        {colorList.map((color) => (
          <div className='flex flex-col'>
            <p className='capitalize text-xxs text-gray-400'>{`${color} - Square`}</p>
            <Badge color={color}>Badge</Badge>
          </div>
        ))}
      </FlexContainer>

      <h2 className='mb-1 mt-7 font-bold'>Pill Badges Design</h2>
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

      <h2 className='mb-1 font-bold'>Banners Design</h2>
    </div>
  );
}

export default App;
