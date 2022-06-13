import s from './Example.module.css';

import clsxm from '@/lib/clsxm';

interface ExampleProps {
  className?: string;
  title: string;
}

export default function Example({ className, title }: ExampleProps) {
  const rootClassName = clsxm(s.root, className);

  return (
    <div className={rootClassName}>
      <h2>{title}</h2>
    </div>
  );
}
