import classNames from "@/components/utils/classNames";

export default function PrimaryButton({ children, className }) {
    return (
        <button
            className={classNames(className, "bg-primary-red text-white rounded-md")}
        >
            {children}
        </button>
    );
}