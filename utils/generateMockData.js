const generateMockData = (users) => {
  const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Design'];
  const projects = ['Project Alpha', 'Project Beta', 'Project Gamma', 'Project Delta'];

  
  return users.map(user => ({
    ...user,
    department: departments[Math.floor(Math.random() * departments.length)],
    rating: Math.floor(Math.random() * 5) + 1,
    bio: `Experienced professional with ${Math.floor(Math.random() * 10) + 1} years in ${departments[Math.floor(Math.random() * departments.length)]}`,
    projects: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () =>
      projects[Math.floor(Math.random() * projects.length)]
    ),
    feedback: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, i) => ({
      id: i,
      date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      rating: Math.floor(Math.random() * 5) + 1,
      comment: `Great performance in Q${Math.floor(Math.random() * 4) + 1}. Shows excellent ${['leadership', 'technical skills', 'teamwork', 'creativity'][Math.floor(Math.random() * 4)]}.`
    }))
  }));
};

export { generateMockData }; 