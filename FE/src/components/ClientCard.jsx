const ClientCard = ({ client }) => {
    return (
        <div className="space-y-4 bg-white p-6 rounded-xl">
            <div>
                <h1 className="font-semibold text-xl">{client.name}</h1>
                <p className="text-gray-400 text-sm">{client.title}</p>
            </div>
            <p className="text-gray-300 text-xs">{client.date}</p>
        </div>
    );
};

export default ClientCard;
