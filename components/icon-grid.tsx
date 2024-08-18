import React from "react";

type IconGridProps = {
    icons: (string | undefined)[];
    iconsPerRow?: number; // Optional prop to specify the number of icons per row
    className?: string;
};

const IconGrid: React.FC<IconGridProps> = ({ icons, iconsPerRow = 4, className }) => {
    // Filter out undefined icons
    const validIcons = icons.filter((icon): icon is string => typeof icon === 'string');

    // Calculate grid template columns based on iconsPerRow
    const gridTemplateColumns = `repeat(${iconsPerRow}, minmax(0, 1fr))`;

    return (
        <div
            className={`grid gap-7 ${className}`}
            style={{ gridTemplateColumns }}
        >
            {validIcons.map((icon, index) => (
                <img
                    key={index}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
                    alt={`${icon} icon`}
                    title={icon.toUpperCase()}
                    className="h-12 w-12 z-10 hover:cursor-pointer"
                />
            ))}
        </div>
    );
};

export default IconGrid;
