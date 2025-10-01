import React, { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";

type MotionProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T] & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  transition?: unknown;
  variants?: unknown;
  viewport?: unknown;
  exit?: unknown;
};

function createMotionComponent<T extends keyof JSX.IntrinsicElements>(tag: T) {
  const Component = React.forwardRef<unknown, MotionProps<T>>((props, ref) => {
    const { children, ...rest } = props as MotionProps<T> & { children?: React.ReactNode };
    return React.createElement(tag, { ref, ...rest }, children);
  });

  Component.displayName = `Motion(${String(tag)})`;
  return Component;
}

type MotionProxy = {
  [K in keyof JSX.IntrinsicElements]: ForwardRefExoticComponent<
    PropsWithoutRef<MotionProps<K>> & RefAttributes<unknown>
  >;
} & Record<string, ForwardRefExoticComponent<any>>;

export const motion: MotionProxy = new Proxy({} as MotionProxy, {
  get(target, prop: string) {
    if (!target[prop as keyof MotionProxy]) {
      target[prop as keyof MotionProxy] = createMotionComponent(prop as keyof JSX.IntrinsicElements);
    }

    return target[prop as keyof MotionProxy];
  },
});

export const AnimatePresence: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;
export const useInView = () => [React.useRef(null), true] as const;

export default {
  motion,
  AnimatePresence,
  useInView,
};
