import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: JSX.Element;
  selector: string;
}

export default function ClientOnlyPortal({ children, selector }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
