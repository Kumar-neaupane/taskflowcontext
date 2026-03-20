import Button from "../Button"
import Input from "../Input"

const Account = () => {
    return (
        <div>
            <div className="bg-white border border-gray-300 rounded-lg  shadow-lg w-full p-4">
                <h1 className="text-xl font-bold">Account Security</h1>
                <div className="flex flex-col gap-2 mt-4">
                    <label>Current Password</label>
                    <Input className="outline-0 p-2 rounded-lg hover:border-indigo-500 border border-gray-300 w-full" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label>New Password</label>
                    <Input className="outline-0 p-2 rounded-lg hover:border-indigo-500 border border-gray-300 w-full" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <label>Confirm New Password</label>
                    <Input className="outline-0 p-2 rounded-lg hover:border-indigo-500 border border-gray-300 w-full" />
                </div>
                <div className="flex justify-end">
                    <Button name="Update Password" className=" p-2 my-4" />

                </div>
            </div>
            <div className=" flex flex-col gap-2 my-4 bg-white border border-1 border-gray-300 rounded-lg h-fit p-4 shadow-lg">
                <h1 className="text-xl text-red-500 font-bold">Danger Zone </h1>
                <p>
                    Once you delete your account, there is no going back. Please be certain.
                </p>
               <div className="text-red-500 font-bold border border-red-500 w-fit p-2 rounded-lg">
                Delet Account

               </div>
            </div>
        </div> 
    )
}

export default Account
