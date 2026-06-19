import { cx } from "@/lib/utils";

export function Media({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const isVideo = src.endsWith(".mp4");
  return (
    <div className={cx("media-mask", className)}>
      {isVideo ? (
        <video src={src} autoPlay muted loop playsInline preload="metadata" />
      ) : (
        <img src={src} alt={alt} loading="lazy" />
      )}
    </div>
  );
}
