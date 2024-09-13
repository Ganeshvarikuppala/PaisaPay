export function  Button({buttocontent,onclick}){
    return (
        <div className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-1 mb-1 mt-3">
            <button onClick={onclick}>{buttocontent}</button>
        </div>
    )
}