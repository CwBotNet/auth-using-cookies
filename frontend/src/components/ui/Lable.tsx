interface label {
    lable: string;
    placeholder?: string;
    type?: string;
}
export const Label = ({ lable, placeholder, type }: label) => {
    return (
        <div className="flex flex-col space-y-2">
            <label className="capitalize font-semibold">{lable}</label>
            <input className="border rounded-md p-2" type={type || "text"} placeholder={placeholder || ""} />
        </div>
    )
}