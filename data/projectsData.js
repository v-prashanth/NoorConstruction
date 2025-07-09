// app/data/projectsData.js

const projects = [
  {
    title: 'Project A - Ecolab Lobby',
    description: 'Lobby renovation and structural upgrade with modern design aesthetic and sustainable materials.',
    client: 'Ecolab Ltd.',
    industry: 'Commercial',
    sector: 'Interiors',
    status: 'Ongoing',
    startDate: 'May 2025',
    contractValue: '₹3 Cr',
    area: '15,000 sq.ft.',
    scope: 'Design + Build',
    progress: '70%',
    team: 'Team Alpha',
    media: [
      { type: 'image', src: '/media/project-a/hero.jpg' },
      { type: 'video', src: '/media/project-a/demo.mp4' }
    ]
  },
  {
    title: 'Project B - Metro Tunnel Work',
    description: 'Tunnel shuttering and Mivan framework setup for metro infrastructure.',
    client: 'Metro Infra',
    industry: 'Infrastructure',
    sector: 'Structural',
    status: 'Ongoing',
    startDate: 'March 2025',
    contractValue: '₹5.5 Cr',
    area: '500m tunnel',
    scope: 'Mivan + Tunnel Shuttering',
    progress: '50%',
    team: 'Team Beta',
    media: [
      { type: 'image', src: '/media/project-b/site1.jpg' },
      { type: 'video', src: '/media/project-b/flythrough.mp4' }
    ]
  },
  {
    title: 'Project C - Residential Finishing',
    description: 'Complete interior and exterior finishing work for premium apartments.',
    client: 'UrbanNest Builders',
    industry: 'Residential',
    sector: 'Finishing',
    status: 'Ongoing',
    startDate: 'April 2025',
    contractValue: '₹2 Cr',
    area: '10 Floors',
    scope: 'Plastering, Tiling, Painting',
    progress: '60%',
    team: 'Team Gamma',
    media: [
      { type: 'image', src: '/media/project-c/room1.jpg' },
      { type: 'video', src: '/media/project-c/overview.mp4' }
    ]
  }
];

export default projects;
