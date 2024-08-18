import { experience } from "../data/experience";
import { projects } from "../data/projects";

interface Duration {
    start_month: number;
    end_month: number;
    start_year: number;
    end_year: number;
}

const calculateElapsedMonths = (duration: Duration): number => {
    // Calculate the number of months in the start year
    const startYearMonths = (12 - duration.start_month + 1); // from start_month to end of the year
    // Calculate the number of months in the end year
    const endYearMonths = duration.end_month === -1 ? new Date().getMonth() + 1 : duration.end_month; // from start of the year to end_month
    // Calculate the number of months in between full years
    const endYear = duration.end_month === -1 ? new Date().getFullYear() : duration.end_year
    const fullYearMonths = (endYear - duration.start_year - 1) * 12;

    return startYearMonths + endYearMonths + fullYearMonths;
};

const roundNumber = (totalMonths: number): string => {
    const years = Math.floor(totalMonths / 12) || 1;
    return `${years}+`
};

export const getExpCount = () => {
    let total = 0
    experience.map((exp) => {
        total += calculateElapsedMonths(exp.duration)
    })
    return roundNumber(total)
}

export const getProjectCount = () => {
    const len = projects.length || 1
    return `${len}+`
}

export const getTimeline = (duration: Duration): string => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let timeline = `${months[duration.start_month - 1]} ${duration.start_year} - `
    if (duration.end_month === -1) {
        timeline += `Ongoing`
    } else {
        timeline += `${months[duration.end_month - 1]} ${duration.end_year}`
    }

    return timeline
}

export const getDescription = (description: string[]) => {
    if (description.length === 1) {
        return (
            <p className="text-base">
                {description[0]}
            </p>
        )
    } else {
        return (
            <ul className="list-disc ml-5 text-base space-y-2">
                {description.map((desc, index) => (
                    <li key={index}>
                        {desc}
                    </li>
                ))}
            </ul>
        )
    }
}

export const getTechStack = (techStack: string[]) => {
    return (
        <>
            {techStack.map((tech) => (
                <span
                    key={tech}
                    className="mr-2 mt-4 rounded-lg bg-neutral-800 px-2 py-1 text-sm font-medium text-purple"
                >
                    {tech}
                </span>
            ))}
        </>
    )
}
