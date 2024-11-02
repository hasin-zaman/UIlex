export default function SuccessNotification({ message, onClose }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-md bg-green-500 shadow-md">
      <p className="text-white">{message}</p>
      <button onClick={onClose} className="text-white font-bold">
        X
      </button>
    </div>
  );
}