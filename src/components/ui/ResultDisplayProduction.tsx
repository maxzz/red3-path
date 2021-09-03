import React from 'react';
import Flip from './Flip';


export function IconSteps(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeWidth="4" {...props}>
            <path d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41c-50.65 7.49-71.52-26.44-80.33-85.06c-11.85-78.88 16-127.94 55.71-131.1c36.14-2.87 68.71 60.14 77.53 118.75z" />
            <path d="M223.65 409.53c3.13 33.28-14.86 64.34-42 69.66c-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21s55.99-20.4 59.77 19.74z" />
            <path d="M312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41c50.66 7.49 71.52-26.44 80.33-85.06c11.86-78.89-16-128.22-55.7-131.1c-36.4-2.64-68.71 60.13-77.53 118.75z" />
            <path d="M288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66c27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22s-55.99-20.4-59.77 19.75z" />
        </svg>
    );
}

export function IconBike(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 21.1 12" fill="none" stroke="currentColor" stroke-width=".2">
            <path d="M4.6.2h3.6" />
            <path d="M7.2 6.3l4.6 7.7a.1.1 0 00.2 0l2.7-5.4v-.1H8.4l-3 5.6h8.2a1.3 1.3 0 01-1.6 1.5" transform="translate(-1.5 -6)" />
            <path d="M18.6 14.1l-5-7.6h4.2a1.3 1.3 0 01-1.5 1.6" transform="translate(-1.5 -6)" />
            <circle cx="4" cy="8.1" r="3.8" />
            <circle cx="17.1" cy="8.1" r="3.8" />
        </svg>
    );
}

{/* <svg viewBox="0 0 56 32" fill="currentColor" stroke="green" strokeWidth=".5" {...props}>
<path d="M45.5 11c-1.924 0-3.723.529-5.276 1.436L33.423 2h9.599c-.013.498-.129 1.331-.699 1.986C41.736 4.659 40.787 5 39.5 5a.5.5 0 0 0 0 1c1.589 0 2.792-.456 3.576-1.356c1.163-1.336.93-3.136.919-3.212A.5.5 0 0 0 43.5 1h-11a.498.498 0 0 0-.418.774l2.831 4.344H19.048L15.965 1H21.5a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h2.314c.01.023.012.048.025.07l3.412 5.662l-3.054 5.39A10.43 10.43 0 0 0 10.5 11C4.71 11 0 15.71 0 21.5S4.71 32 10.5 32c5.588 0 10.157-4.391 10.42-10H32c.029.579-.096 1.368-.644 1.989C30.764 24.66 29.803 25 28.5 25a.5.5 0 0 0 0 1c1.608 0 2.824-.457 3.614-1.358c1.142-1.304.927-3.036.918-3.109a.5.5 0 0 0-.496-.435h-3.928l7.047-13.84l3.73 5.724C36.735 14.889 35 17.992 35 21.5C35 27.29 39.71 32 45.5 32S56 27.29 56 21.5S51.29 11 45.5 11zM34.605 7l-6.848 13.568L19.651 7h14.954zm-15.762.715l8.065 13.383H20.98a10.487 10.487 0 0 0-4.912-8.484l2.775-4.899zm1.137 13.383h-8.719l4.314-7.615a9.493 9.493 0 0 1 4.405 7.615zM10.5 31C5.262 31 1 26.738 1 21.5S5.262 12 10.5 12c1.51 0 2.934.364 4.204.993l-4.736 8.358a.498.498 0 0 0 .003.498c.089.153.254.248.432.15h9.567C19.659 27.057 15.537 31 10.5 31zm35 0c-5.238 0-9.5-4.262-9.5-9.5c0-3.157 1.554-5.952 3.932-7.68l5.247 8.051a.502.502 0 0 0 .692.146a.502.502 0 0 0 .146-.692l-5.247-8.051A9.422 9.422 0 0 1 45.5 12c5.238 0 9.5 4.262 9.5 9.5S50.738 31 45.5 31z" />
</svg> */}


function Result({ pointsSrc, pointsDst }: { pointsSrc: number, pointsDst: number; }) {
    return (
        <div className="w-full col-span-full flex justify-center text-gray-300">
            {/* <div className="w-full col-span-full p-4 flex justify-center border rounded border-white text-gray-300 text-xl font-semibold"> */}

            <div className="w-full grid gap-x-2" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
                {/* <div className="col-span-full justify-self-start -mt-8 mb-4 px-4 bg-primary-700">Points:</div> */}

                {/* Left */}
                <div className="bg-[red] rounded-md">
                    <div className="text-4xl grid">
                        <IconSteps />
                        <div className="rounded-t-md text-sm bg-primary-800 text-right"># Source points</div>
                        <Flip value={pointsSrc} alignRight={true} />
                    </div>
                </div>

                {/* Arrow */}
                <div className="self-center">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
                {/* Right */}
                <div className="relative p-4 text-4xl rounded-md border border-primary-800 overflow-hidden shadow-md"
                    style={{ backgroundColor: 'red' }}
                >
                    <IconBike />
                    <div className="1absolute -m-4 mb-4 px-4 py-1 left-0 top-0 text-sm bg-primary-800"># Smooth points</div>
                    <Flip value={pointsDst} />
                </div>
            </div>
        </div>
    );
}

export default Result;
