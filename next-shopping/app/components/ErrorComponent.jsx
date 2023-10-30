function ErrorComponent({ error }) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-gray-700">Error</h2>
          <p className="text-gray-500 my-4">{error}</p>
          <p className="text-gray-700">Please try again later or contact support.</p>
        </div>
      </div>
    );
  }
  
  export default ErrorComponent;