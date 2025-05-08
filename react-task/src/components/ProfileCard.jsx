import React from 'react';

const ProfileCard = () => {
  const profiles = [
    {
      name: "John Doe",
      role: "Full Stack Developer",
      bio: "Passionate about creating clean, user-friendly interfaces and scalable backend solutions.",
      followers: "3.5K",
      following: "542",
      projects: "120",
      skills: ['React', 'Node.js', 'TypeScript', 'UI/UX'],
      image: "p1.jpg"
    },
    {
      name: "Sarah Smith",
      role: "Frontend Developer",
      bio: "Specializing in modern JavaScript frameworks and responsive design.",
      followers: "2.8K",
      following: "412",
      projects: "95",
      skills: ['Vue.js', 'CSS', 'JavaScript', 'Responsive Design'],
      image: "p2.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Backend Developer",
      bio: "Expert in building robust and scalable server-side applications.",
      followers: "4.2K",
      following: "678",
      projects: "156",
      skills: ['Python', 'Django', 'AWS', 'Database Design'],
      image: "p3.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 mt-10">
      {profiles.map((profile) => (
        <div key={profile.name} className="max-w-sm mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700">
          

          <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
          
         
          <div className="relative flex justify-center -mt-16">
            <img 
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-md"
              src={profile.image} 
              alt={`${profile.name}'s profile`} 
            />
          </div>
          

          <div className="px-6 py-5 text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
              {profile.name}
            </h2>
            
            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3 transition-colors duration-300">
              {profile.role}
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-300">
              {profile.bio}
            </p>
            
        
            <div className="flex justify-center space-x-4 mb-4 text-sm">
              <div>
                <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{profile.followers}</span>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Followers</p>
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{profile.following}</span>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Following</p>
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{profile.projects}</span>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">Projects</p>
              </div>
            </div>
            
            

            <div className="flex space-x-3 justify-center">
              <button 
                className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 transform hover:-translate-y-0.5"
                aria-label={`Follow ${profile.name}`}
              >
                Follow
              </button>
              <button 
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 transform hover:-translate-y-0.5"
                aria-label={`Message ${profile.name}`}
              >
                Message
              </button>
            </div>
            
           
           
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap justify-center gap-2">
                {profile.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;