import React from "react";

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <header className="flex justify-between items-center mb-8">
        <div className="text-xl font-bold">PROFILE</div>
        <nav>{/* Add your navbar links here */}</nav>
      </header>
      <main className="flex flex-col lg:flex-row lg:space-x-8">
        <section className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">General Information</h2>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Profile ID</span>
            <span>00000</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Username</span>
            <span>Repett</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Rides Remaining</span>
            <span>Free Rides</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subscription Tier</span>
            <span>T</span>
          </div>
        </section>
        <section className="w-full lg:w-2/3 bg-white rounded-lg shadow-md p-4 mt-4 lg:mt-0">
          <h2 className="text-lg font-bold mb-2">Additional Information</h2>
          {/* Add more user specific information here */}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
