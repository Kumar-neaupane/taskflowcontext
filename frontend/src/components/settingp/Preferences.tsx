import { useState } from 'react'
import Dropdown from '../Dropdown';
import Button from '../Button';

const Preferences = () => {
    const [isOn, setIsOn] = useState(true);

    return (
        <div className="bg-white border border-gray-300 rounded-lg  shadow-lg w-full p-4">
            <h1 className='text-xl font-bold'>UI Preferences
            </h1>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 mt-4">
                    <h1 className='font-bold'>Dark Mode</h1>
                    <p>Switch between light and dark themes</p>
                </div>

                <div
                    onClick={() => setIsOn(!isOn)}
                    className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${isOn ? "bg-indigo-600" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ${isOn ? "translate-x-6" : "translate-x-0"
                            }`}
                    />
                </div>
            </div>
            <div className='border border-gray-300  my-4'></div>
            <div className='w-full flex flex-col gap-1'>
                <p className='font-bold'>Language</p>
                <Dropdown className="w-full ">
                    <option>English</option>
                    <option>Nepali</option>

                </Dropdown>
            </div>
            <div className='w-full flex flex-col gap-1 my-3'>
                <p className='font-bold'>Timezone</p>
                <Dropdown className="w-full ">
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>

                </Dropdown>
            </div>
            <div className='w-full flex flex-col gap-1 my-3'>
                <p className='font-bold'>Date Format</p>
                <Dropdown className="w-full ">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>

                </Dropdown>
            </div>

            <div className='flex justify-end my-4'>
                <Button name="Save Preferences" className="p-2" />

            </div>
        </div>
    )
}

export default Preferences
