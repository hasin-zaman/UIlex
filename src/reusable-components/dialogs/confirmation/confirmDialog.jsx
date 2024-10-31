export default function ConfirmDialog({ title = 'Confirmation', buttonColor = 'bg-red-500', buttonText = 'Confirm', confirmationText = 'Are you sure?', handleSubmit, closeDialog }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-primary">{title}</h2>
                <p className="text-gray-800">{confirmationText}</p>
                <div className="mt-6 flex justify-center space-x-4">
                    <button
                        className="border border-gray-300 px-4 py-2 rounded-md text-gray-800"
                        onClick={closeDialog}
                    >
                        Cancel
                    </button>
                    <button
                        className={`text-white px-4 py-2 rounded-md ${buttonColor}`}
                        onClick={handleSubmit}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}