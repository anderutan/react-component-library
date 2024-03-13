import CheckMark from '../images/CheckMark';
import Warning from '../images/Warning';
import ErrorIcon from '../images/ErrorIcon';
import InfoIcon from '../images/InfoIcon';

export default function Banner({ status, children }) {
  const statusObj = {
    success: {
      class: 'bg-green-100 text-green-700',
      quote: 'Congratulation!',
      color: '#34D399',
    },
    warning: {
      class: 'bg-yellow-100 text-yellow-700',
      quote: 'Attention!',
      color: '#FBBF24 ',
    },
    error: {
      class: 'bg-red-100 text-red-700',
      quote: 'There is a problem with your application!',
      color: '#F87171',
    },
    neutral: {
      class: 'bg-blue-100 text-blue-700',
      quote: 'Update available!',
      color: '#60A5FA',
    },
  };
  const base = 'w-2/3 px-4 py-2 rounded-md flex flex-col ';
  const classes = base + ' ' + statusObj[status].class;

  return (
    <div className={classes}>
      <div className='flex gap-3 items-center'>
        {status === 'success' ? (
          <CheckMark fillColor={statusObj[status].color} />
        ) : null}
        {status === 'warning' ? (
          <Warning fillColor={statusObj[status].color} />
        ) : null}
        {status === 'error' ? (
          <ErrorIcon fillColor={statusObj[status].color} />
        ) : null}
        {status === 'neutral' ? (
          <InfoIcon fillColor={statusObj[status].color} />
        ) : null}
        <h3 className='font-medium'>{statusObj[status].quote}</h3>
      </div>
      <p className='text-sm ml-8'>{children}</p>
    </div>
  );
}
