import Image from "next/image";
import { Image as LucideImage } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type PosterProps = {
  url?: string;
  alt: string;
} & ComponentProps<"div">;

export const Poster = ({ url, alt, className, ...props }: PosterProps) => {
  return (
    <div
      className={cn(
        "relative flex aspect-poster h-[45vh] w-[32vh] items-center justify-center overflow-hidden rounded-lg border bg-muted text-muted shadow",
        className
      )}
      {...props}
    >
      {url ? (
        <Image
          fill
          priority
          sizes="100%"
          alt={alt}
          src={`https://image.tmdb.org/t/p/original${url}`}
        />
      ) : (
        <LucideImage size={24} />
      )}
    </div>
  );
};
