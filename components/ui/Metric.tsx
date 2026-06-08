import { cn } from "@/lib/utils";

import { Eyebrow } from "./Eyebrow";

export interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export function Metric({ value, label, className }: MetricProps) {
  return (
    <div className={cn(className)}>
      <div className="font-display text-display">{value}</div>
      <Eyebrow className="text-ink-light">{label}</Eyebrow>
    </div>
  );
}
