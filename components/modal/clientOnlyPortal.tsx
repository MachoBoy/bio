import { useSyncExternalStore, type ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactElement;
  selector: string;
}

const emptySubscribe = () => () => {};

export default function ClientOnlyPortal({ children, selector }: Props) {
  const mountNode = useSyncExternalStore(
    emptySubscribe,
    () => document.querySelector(selector),
    () => null
  );

  return mountNode ? createPortal(children, mountNode) : null;
}
