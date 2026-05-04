import { FC, PropsWithChildren } from "react";

const TagBadge: FC<PropsWithChildren> = ({ children }) => {
  return (
    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
      {children}
    </span>
  );
}

export default TagBadge;