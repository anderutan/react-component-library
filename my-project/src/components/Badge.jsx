import classnames from 'classnames';

export default function Badge({
  children,
  color,
  borderRadius = false,
  ...rest
}) {
  const base = 'text-base font-medium px-4 py-1 inline-block';
  const colorClass = color ? `bg-${color}-100 text-${color}-600` : '';
  const brClass = borderRadius ? 'rounded-full' : 'rounded-md';
  const allClasses = classnames(base, colorClass, brClass);

  return (
    <div className={allClasses} {...rest}>
      {children}
    </div>
  );
}
