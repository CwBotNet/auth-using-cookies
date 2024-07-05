import { ChangeEvent } from "react";

interface label {
    lable: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}
export const Label = ({ lable, placeholder, type, onChange }: label) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="capitalize font-semibold">{lable}</label>
            <input onChange={onChange} className="border rounded-md p-2" type={type || "text"} placeholder={placeholder || ""} />
        </div>
    )
}