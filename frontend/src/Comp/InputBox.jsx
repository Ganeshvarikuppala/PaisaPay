 export function Inputbox({label,placeholder,onchange}){
    return(
        <div className="text-sm font-medium text-left py-2">
            <div>
            {label}
        </div>
        <div>
            <input onChange={onchange} placeholder={placeholder} className="border-solid border-2 border-black-600 "/>
        </div>
        </div>
        
    )
}