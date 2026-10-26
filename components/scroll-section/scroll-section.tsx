import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';

type RegisteredSection = {
  id: string;
  ref: RefObject<HTMLElement | null>;
};

type ScrollSection = {
  id: string;
  selected: boolean;
  onClick: () => void;
};

type Registry = {
  register: (section: RegisteredSection) => void;
  unregister: (id: string) => void;
};

const HEADER_OFFSET = 96;

const RegistryContext = createContext<Registry | null>(null);
const SectionsContext = createContext<ScrollSection[]>([]);

export function ScrollingProvider({ children }: { children: ReactNode }) {
  const sectionsRef = useRef<RegisteredSection[]>([]);
  const [order, setOrder] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState('');

  const register = useCallback((section: RegisteredSection) => {
    const next = sectionsRef.current.filter((item) => item.id !== section.id);
    next.push(section);
    sectionsRef.current = next;
    setOrder(next.map((item) => item.id));
  }, []);

  const unregister = useCallback((id: string) => {
    const next = sectionsRef.current.filter((item) => item.id !== id);
    sectionsRef.current = next;
    setOrder(next.map((item) => item.id));
  }, []);

  useEffect(() => {
    const updateSelected = () => {
      let current = '';
      for (const section of sectionsRef.current) {
        const element = section.ref.current;
        if (!element) continue;
        if (element.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = section.id;
        }
      }
      setSelectedId((previous) => (previous === current ? previous : current));
    };

    updateSelected();
    window.addEventListener('scroll', updateSelected, { passive: true });
    window.addEventListener('resize', updateSelected);
    return () => {
      window.removeEventListener('scroll', updateSelected);
      window.removeEventListener('resize', updateSelected);
    };
  }, [order]);

  const scrollTo = useCallback((id: string) => {
    const element = sectionsRef.current.find((item) => item.id === id)?.ref
      .current;
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const sections = useMemo(
    () =>
      order.map((id) => ({
        id,
        selected: id === selectedId,
        onClick: () => scrollTo(id),
      })),
    [order, scrollTo, selectedId]
  );

  const registry = useMemo(
    () => ({ register, unregister }),
    [register, unregister]
  );

  return (
    <RegistryContext.Provider value={registry}>
      <SectionsContext.Provider value={sections}>
        {children}
      </SectionsContext.Provider>
    </RegistryContext.Provider>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const registry = useContext(RegistryContext);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!registry) return;
    registry.register({ id, ref });
    return () => registry.unregister(id);
  }, [id, registry]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}

export function useScrollSections() {
  return useContext(SectionsContext);
}
