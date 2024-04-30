import React, { ReactNode } from "react";
import { EvervaultCard, Icon } from "./EvervaultCard"

export function EvervaultCardDemo( { icon, title, text } : { icon?: ReactNode; title?: string; text?: string } ) {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative h-[26rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard icon={icon} />
      <h1 className="text-black dark:text-white text-lg font-bold mt-4">{title}</h1>
      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        {text}
      </h2>

    </div>
  );
}
