export const Messages = ({messages}) => {
  return (
    <div className="gap-6 flex flex-col my-4">
      {messages.map((message, index) => (
        <div className="flex flex-col space-y-4" key={index}>
          <div className="flex items-center space-x-4">
            <img
              src={message.img}
              alt="Profile Picture"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-medium">{message.name}</h3>
              <p className="text-gray-500">{message.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
