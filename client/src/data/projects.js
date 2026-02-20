export const projects = [
  {
    id: 'voltpath',
    title: 'VoltPath',
    tagline: 'EV Charging Station Locator',
    description:
      'An innovative platform designed to simplify electric vehicle charging in Ghana. Features real-time charging station availability where users can reserve charging slots at stations.',
    longDescription:
      'VoltPath is a full-stack application addressing the growing need for EV infrastructure in West Africa. The platform integrates real-time station tracking, slot reservation systems, and user-friendly navigation. Built with a focus on scalability and reliability to handle concurrent reservation requests across multiple charging providers.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT Auth'],
    category: 'Fullstack',
    github: 'https://github.com/FuturScope/voltpath-api',
    featured: true,
  },
  {
    id: 'b-ads-api',
    title: 'B-ADs API',
    tagline: 'Advertisement Management Platform',
    description:
      'A RESTful API that allows vendors to manage ads on an advertisement website. Vendors have permission to perform CRUD operations while users browse ads.',
    longDescription:
      'A role-based advertisement management system with Vendor and User access tiers. Vendors can create, update, and delete ad listings with media support. Includes analytics endpoints for tracking ad performance, rate limiting for API abuse prevention, and comprehensive Postman documentation.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'OAuth', 'Postman'],
    category: 'Backend',
    github: 'https://github.com/Binary-05/ad-api',
    featured: true,
  },
  {
    id: 'bookpal',
    title: 'BookPal API',
    tagline: 'Library Management System',
    description:
      'A RESTful API for managing books, authors, and reviews in a library. Authors are allowed to perform CRUD operations with full review management.',
    longDescription:
      'A comprehensive library management API supporting book cataloguing, author profiles, and user review systems. Implements optimized MongoDB queries for search and filtering, pagination for large datasets, and secure authentication with role-based access control for authors and readers.',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API'],
    category: 'Backend',
    github: 'https://github.com/Binary-05/Library-api',
    featured: true,
  },
]
