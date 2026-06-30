import {
  forwardRef,
  type ImgHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  rootMargin?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      fallbackSrc,
      rootMargin = "200px",
      decoding = "async",
      ...props
    },
    ref,
  ) => {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [imageSrc, setImageSrc] = useState<string>();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const element = imageRef.current;

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin },
      );

      observer.observe(element);

      return () => observer.disconnect();
    }, [rootMargin]);

    useEffect(() => {
      if (isVisible) {
        setImageSrc(src as string);
      }
    }, [isVisible, src]);

    const handleError = () => {
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
    };

    return (
      <img
        ref={(node) => {
          imageRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        src={imageSrc}
        alt={alt}
        decoding={decoding}
        loading="lazy"
        onError={handleError}
        {...props}
      />
    );
  },
);

Image.displayName = "Image";
