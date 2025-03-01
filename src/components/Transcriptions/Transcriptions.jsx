

const Transcriptions = () => {
  // Sample Transcription Data
  const data = [
    { id: 1, timestamp: "00:01:23", text: " Hello, welcome to our meeting!" },
    { id: 2, timestamp: "00:02:45", text: "Today, we'll discuss the project roadmap." },
    { id: 3, timestamp: "00:05:10", text: "Let's finalize the design by next week." },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-900 p-4">
      <div className="w-full max-w-3xl p-6 shadow-lg rounded-lg bg-gray-800 border border-gray-700">
        <h2 className="text-center text-white text-xl font-semibold mb-4">
          Transcriptions
        </h2>

        {/* Transcriptions Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="p-3  border-b border-gray-600">Timestamp</th>
                <th className="p-3  border-b border-gray-600">Transcription</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="text-gray-300 border-b border-gray-700">
                  <td className="p-3">{item.timestamp}</td>
                  <td className="p-3">{item.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transcriptions;
