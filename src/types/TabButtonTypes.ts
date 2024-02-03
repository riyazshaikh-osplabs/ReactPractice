import { ReactNode } from "react";

export type TabButtonTypes = {
    children: ReactNode;
    onClick: () => void;
    isSelected: boolean;
}