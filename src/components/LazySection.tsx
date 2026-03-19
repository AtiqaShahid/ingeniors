import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SectionSkeleton = () => (
  <div className="py-24 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-4 w-24 mx-auto" />
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-4 w-96 max-w-full mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

export const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<SectionSkeleton />}>{children}</Suspense>
);
