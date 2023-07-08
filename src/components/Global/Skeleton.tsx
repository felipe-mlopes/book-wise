export function Skeleton({ className }: { className: string }) {
  return <div className={`bg-gray700 motion-safe:animate-pulse rounded ${className}`} />;
}