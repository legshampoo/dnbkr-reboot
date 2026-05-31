import type { Project } from './types'

export const workProjects: Project[] = [
  {
    slug: 'woom',
    category: 'work',
    title: 'WOOM',
    subtitle: 'Immersive Sound Meditation',
    thumb: '/images/experiential/woom/woom_01.png',
    hero: '/images/experiential/woom/woom_08.png',
    summary:
      "For the WOOM Center's new sound meditation space in NYC, we created an immersive video projection environment and a full library of real-time interactive content.",
    order: 1,
    sections: [
      {
        layout: 'image-left',
        image: '/images/experiential/woom/woom_01.png',
        title: 'Audio Reactive Visuals',
        body: 'Using pitch detection and various spectrum analysis techniques, the visuals are generated in real-time according to the sonic environment.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/woom/woom_03.png',
        title: 'Custom Playback Software',
        body: 'Custom developed software allows the user to control the visuals via tablet or mobile phone. They can build playlists and even adjust parameters of the visuals in real-time to customize the look and feel to fit the mood.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/woom/woom_04.png',
        title: 'Multi-Sensory Immersion',
      },
    ],
  },
  {
    slug: 'panorama',
    category: 'work',
    title: 'Panorama Festival',
    subtitle: "Volumetric LED's",
    thumb: '/images/experiential/panorama/panorama_01.png',
    hero: '/images/experiential/panorama/panorama_01_header.png',
    summary:
      "For NYC's Panorama Music Festival, DNBKR collaborated with Smooth Technology to create an immersive, volumetric LED display — a true selfie-machine.\n\nProduced by Smooth Technology\nHardware Engineering by Satchem Arvidson\nLED Programming and Visuals by DNBKR\nVideo Documentation by Haoyan of America",
    order: 2,
    sections: [
      {
        layout: 'image-left',
        youtubeId: 'qKGFFHji9EU',
        title: 'Real-Time Content',
        body: 'Generative visuals programmed in Touchdesigner, using an iPad to change content and parameters in real time.',
      },
    ],
  },
  {
    slug: 'terrell',
    category: 'work',
    title: 'Terrell Place',
    subtitle: 'Interactive Lobby',
    thumb: '/images/experiential/terrell/terrell_02.png',
    hero: '/images/experiential/terrell/terrell_06.png',
    summary:
      'For Terrell Place in Washington, DC, we worked with ESI Design and AV&C to provide production support for their interactive lobby.\n\nProject Credits\nConcept: ESI Design\nHardware and Software Integration: AV&C\nDynamic Media Programming: Vincent Houze\nSound Design: Bruce Odland\nProject Manager, Computer Vision Prototyping, and Virtual Reality Pre-Visualization Software: DNBKR',
    order: 3,
    sections: [
      {
        layout: 'image-left',
        image: '/images/experiential/terrell/terrell_04.png',
        title: 'User Interaction',
        body: 'A building-wide system of motion tracking cameras allow users to interact with over 1700 square feet of LED tile.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/terrell/terrell_01.png',
        title: 'Dynamic Content',
        body: 'Generative 3D scenes respond to users throughout the building, as well as local weather data feeds.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/terrell/terrell_03.png',
        title: 'Interactive Sound',
        body: 'Generative audio software creates an ever-evolving sonic environment in relation to pedestrians in the lobby.',
      },
    ],
  },
  {
    slug: 'takeover',
    category: 'work',
    title: 'See.me',
    subtitle: '#Takeover Times Square',
    thumb: '/images/experiential/takeover/takeover_01.png',
    hero: '/images/experiential/takeover/takeover_header_01.png',
    summary:
      "To celebrate the completion of See.me's Takeover project, thousands of artists participated in a one-night takeover of the American Eagle tower in Times Square.",
    order: 4,
    sections: [
      {
        layout: 'image-left',
        vimeoId: '111600459',
        title: 'The "making of" video.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/takeover/takeover_01.png',
        title: '#Takeover',
        body: 'For one night, artists had a chance to view their artwork on the large-scale LED billboards, which are typically dominated by corporate media.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/takeover/takeover_03.png',
        title: 'Image Data Processing',
        body: 'Over fifteen thousand images were analyzed, using custom image processing software. The image data was then used to arrange the images programmatically according to matching color palettes.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/takeover/takeover_02.png',
        title: 'Generative Code',
        body: 'The resulting mosaic was then procedurally generated using custom code to populate the billboard dynamically.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/takeover/takeover_06.png',
        title: 'Previz',
        body: 'During the production phase, we created a Previz tool which allowed designers to test and visualize ideas in a dimensionally accurate 3D environment. This allowed the design team to view the work from any angle, and see exactly what the final output would look like.',
      },
      { layout: 'full-width', image: '/images/experiential/takeover/takeover_04.png' },
      { layout: 'full-width', image: '/images/experiential/takeover/takeover_05.png' },
      { layout: 'full-width', image: '/images/experiential/takeover/takeover_07.png' },
    ],
  },
  {
    slug: 'eastforest',
    category: 'work',
    title: "East Forest's",
    subtitle: 'Urban Ceremony',
    thumb: '/images/experiential/eastforest/eastforest_thumb_01.png',
    hero: '/images/experiential/eastforest/eastforest_header_01.png',
    summary:
      'For a weekend of meditative sound baths, tea ceremonies, movement, and live sonic soundscapes, we teamed up with David Lobser to produce two full days of interactive, generative 3D visuals at Lightbox NYC. Exploring sacred ceremony in the heart of Times Square.',
    order: 5,
    sections: [
      {
        layout: 'image-right',
        vimeoId: '155468937',
        body: 'Interactive, sound responsive visuals are controlled live, with visual elements generated from bio-feedback "wearable" devices worn by the performers, streaming data wirelessly to the control station during the performance.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/eastforest/eastforest_headband_01.png',
        title: 'Mind Control',
        body: 'Wearing an EEG headband, the "brainwaves" of the performer stream wirelessly to the generative visual playback system. The EEG data is mapped to different visual parameters, allowing the performer to control the video projections with their mind. Literally.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/eastforest/eastforest_03.png',
        title: 'Focus',
        body: 'When the performer is in a highly focused state of concentration, the lines in the visual become tighter and more clearly defined.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/eastforest/eastforest_02.png',
        title: 'Distraction',
        body: 'When the performer is lacking concentration, the lines dissolve, and the particles spread out with increasing entropy.',
      },
    ],
  },
  {
    slug: 'toy',
    category: 'work',
    title: 'TOY',
    subtitle: 'Projection Mapping',
    thumb: '/images/experiential/toy/toy_01.png',
    hero: '/images/experiential/toy/toy_header_01.png',
    summary:
      'For TOY, the trendy night club at the Gansevoort hotel in the meatpacking district, we created a permanent video mapped projection onto the 3D architecture.',
    order: 6,
    sections: [
      {
        layout: 'image-right',
        image: '/images/experiential/toy/toy_01.png',
        body: 'The video projection is mapped to the select individual triangles, with the capability of one unified image, as well as the option for separate images within each triangle, for a "fractal" look.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/toy/toy_02.png',
        body: 'Custom 3D video content was produced, which automatically maps to the architecture. The system also has the capability for a VJ to plug in and control visuals live during events.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/toy/toy_03.png',
        title: 'Ease of Use',
        body: "The projection system is very simple to use. It's set up so that anyone can turn it on with the push of a button, and custom mapped content plays automatically.",
      },
      { layout: 'full-width', image: '/images/experiential/toy/toy_04.png' },
    ],
  },
  {
    slug: 'lacoste',
    category: 'work',
    title: 'Lacoste',
    subtitle: 'Interactive Window',
    thumb: '/images/experiential/lacoste/lacoste_03.png',
    hero: '/images/experiential/lacoste/lacoste_header_01.png',
    summary:
      "To celebrate Lacoste's 80th Anniversary, we created a fully interactive kinetic sculpture at their flagship store on 5th Avenue. The installation allowing users to control floating tennis balls based on their movement on the sidewalk.",
    order: 7,
    sections: [
      {
        layout: 'image-right',
        vimeoId: '102368228',
        body: 'The "Making Of" — How it all came together.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/lacoste/lacoste_03.png',
        body: 'A motion tracking camera, using custom computer vision software, follows the position of people on the sidewalk. The tennis balls float up when someone moves in front of them, causing a beautiful, fluid wave-like effect as people walk by.',
      },
      { layout: 'full-width', image: '/images/experiential/lacoste/lacoste_07.png' },
      { layout: 'full-width', image: '/images/experiential/lacoste/lacoste_06.png' },
      {
        layout: 'image-left',
        image: '/images/experiential/lacoste/lacoste_01.png',
        body: 'Even grownups were curious!',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/lacoste/lacoste_09.png',
        body: 'Fully engaged...',
      },
      { layout: 'full-width', image: '/images/experiential/lacoste/lacoste_05.png' },
    ],
  },
  {
    slug: 'redbull',
    category: 'work',
    title: 'Redbull',
    subtitle: 'Bounce Ballroom',
    thumb: '/images/experiential/redbull/redbull_01.png',
    hero: '/images/experiential/redbull/redbull_header_01.png',
    summary:
      'For "Bounce Ballroom," the opening night of the month long Red Bull Music Academy Festival, we created runway lighting using fully programmable LEDs, and controlled them live as dancers vogued down the catwalk.',
    order: 8,
    sections: [
      {
        layout: 'image-left',
        image: '/images/experiential/redbull/redbull_03.png',
        body: 'Over 160 feet of overhead lighting behind softbox diffusion was controlled and animated live, using custom color palettes to match the style of the particular sequence.',
      },
      { layout: 'full-width', image: '/images/experiential/redbull/redbull_07.png' },
      { layout: 'full-width', image: '/images/experiential/redbull/redbull_05.png' },
      { layout: 'full-width', image: '/images/experiential/redbull/redbull_01.png' },
      { layout: 'full-width', image: '/images/experiential/redbull/redbull_10.png' },
      { layout: 'full-width', image: '/images/experiential/redbull/redbull_06.png' },
    ],
  },
  {
    slug: 'creatives-rising',
    category: 'work',
    title: 'See.me',
    subtitle: 'Creatives Rising',
    thumb: '/images/experiential/creatives/creatives_01.png',
    hero: '/images/experiential/creatives/creatives_header_01.png',
    summary:
      'For the launch event of See.me\'s epic collaborative project "Creatives Rising," we partnered with Rockrose Realty to cover their Long Island City skyrise architecture in video mapped projections.',
    order: 9,
    sections: [
      {
        layout: 'image-left',
        image: '/images/experiential/creatives/creatives_11.png',
        body: 'Thousands of artists participated in a one-night block party.',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/creatives/creatives_04.png',
        body: 'The 60 story tower was video mapped with custom 3D projection software.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/creatives/creatives_07.png',
        body: 'We used twenty, 20K projectors...\n400,000 lumens!',
      },
      {
        layout: 'image-right',
        image: '/images/experiential/creatives/creatives_01.png',
        body: 'Custom 3D visuals were controlled live in front of thousands of attendees.',
      },
      {
        layout: 'image-left',
        image: '/images/experiential/creatives/creatives_12.png',
        body: 'The projections could be seen from all over the city!',
      },
    ],
  },
  {
    slug: 'teleporter',
    category: 'work',
    title: 'AT&T "Teleporter"',
    subtitle: '360° Video Projections at SXSW',
    thumb: '/images/experiential/teleporter/teleporter_01.png',
    hero: '/images/experiential/teleporter/teleporter_01.png',
    summary:
      'For AT&T\'s installation at South by Southwest, we designed a 360° video projection system for their "Teleporter" dome. Customers were able to choose their destination with a touch screen interface, and "teleport" to different attractions around Austin, Texas, which were shot in a first person view using a spherical lens.',
    order: 10,
    sections: [],
  },
]
