import { useState } from "react";

const Notification = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <div className="bg-white border border-gray-300 rounded-lg  shadow-lg w-full p-4 flex flex-col gap-2">
            <h1 className="text-xl font-bold">
                Notification Preferences
            </h1>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 mt-4">
                    <h1>Email Notifications</h1>
                    <p>Receive email updates about your projects and tasks</p>
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
            <div className="border border-gray-300"> </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 mt-4">
                    <h1>Email Notifications</h1>
                    <p>Receive email updates about your projects and tasks</p>
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
            <div className="border border-gray-300"> </div>
            <div>
                <h1 className="font-bold mt-4">Email Frequency</h1>
                <div className="flex flex-col gap-2 my-4">
                    <div className="flex flex-row gap-4 items-center">
                        <input type="radio" name="emailfrequency" className="h-5 w-5"></input>
                        <div>
                            <h1 className="font-bold">Real-time</h1>
                            <p>Get notified immediately</p>
                        </div>
                    </div>
                     <div className="flex flex-row gap-4 items-center">
                        <input type="radio" name="emailfrequency" className="h-5 w-5"></input>
                        <div>
                            <h1 className="font-bold">Daily Digest</h1>
                            <p>Once per day summary</p>
                        </div>
                    </div>
                     <div className="flex flex-row gap-4 items-center">
                        <input type="radio" name="emailfrequency" className="h-5 w-5"></input>
                        <div>
                            <h1 className="font-bold">Weekly Summary</h1>
                            <p>Once per week summary</p>
                        </div>
                    </div>

                </div>

            </div>




        </div>

    )
}

export default Notification
