import type { Project } from './types'

export const artProjects: Project[] = [
  {
    slug: 'physarum',
    category: 'art',
    title: 'Cellular Networks',
    thumb: '/images/art/physarum/physarum_thumb.jpg',
    hero: '/images/art/physarum/physarum.jpg',
    summary:
      'Timelapses of single celled organisms (Physarum Polycephalum) growing on glass. Grown over a month-long period, the cells replicate in a tree-like pattern in search of food. The cells were then cast in resin at the end of their growth cycle, resulting in a preserved "resin painting" on glass, displayed inside a table with protective glass and LED lighting underneath.',
    order: 1,
    sections: [
      { layout: 'image-left', vimeoId: '79509535' },
      { layout: 'image-right', vimeoId: '43315149' },
      { layout: 'full-width', image: '/images/art/physarum/physarum_table.jpg' },
    ],
  },
  {
    slug: 'seatrash',
    category: 'art',
    title: 'Ebb & Flow',
    thumb: '/images/art/ebbandflow/seatrash_texture_thumb.jpg',
    hero: '/images/art/ebbandflow/green_textures.jpg',
    summary:
      'The IMC Lab + Gallery presented "Ebb + Flow", a solo exhibition by Daniel Baker. This exhibition was the result of Baker\'s nine month participation in IMC\'s Co-Create residency program, which pairs artists with technologists to enable the creation of new participatory and socially conscious art forms.\n\nDuring his residency at IMC, Baker created a kinetic, data-driven network of motors and pulleys to create a visualization driven by the orbit of the moon and the ebb and flow of the tide. Data, collected from weather buoys around the globe, stream in real-time to a system of physical computing electronics to raise and lower "floating" pieces of seatrash collected from various lakes, rivers, and oceans.\n\nThe seatrash has been cast in resin, to preserve its current physical state and give it a rigid, durable plastic structure. Each sea trash sculpture corresponds to a specific weather buoy, in locations such as New York City, Anchorage, Honolulu, New Orleans and Seattle.\n\nAs the moon orbits the earth, sea levels rise and fall, causing the sea trash to ebb and flow with the tide.',
    links: [
      { label: 'The IMC Lab + Gallery', href: 'http://www.theimclab.com/' },
      {
        label: 'See what Arshake had to say about the project',
        href: 'http://www.arshake.com/en/ebb-flow-daniel-baker/',
      },
    ],
    order: 2,
    sections: [
      { layout: 'image-right', vimeoId: '118722807' },
      { layout: 'image-left', vimeoId: '117644107' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_clear.jpg' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_milkjug.jpg' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_green_medium.jpg' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_foam.jpg' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_green.jpg' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_clear.gif' },
      { layout: 'full-width', image: '/images/art/ebbandflow/seatrash_white.gif' },
    ],
  },
  {
    slug: 'octopus',
    category: 'art',
    title: 'The Octopus Project',
    thumb: '/images/art/octopus/octopus_thumb.jpg',
    hero: '/images/art/octopus/octopus.jpg',
    summary:
      'A projection mapped experiment in organic preservation. The original intention was to encase a (dead) octopus in resin to observe its change over time within a closed environment. Due to off-gassing, the octopus had to be removed; the resulting negative mold was filled with ink and resin. A timelapsed animation of the octopus being filled with ink is used as content for a video installation, with a projector mapped to the form of the octopus on loop.',
    order: 3,
    sections: [{ layout: 'image-left', vimeoId: '53380137' }],
  },
  {
    slug: 'muirgen',
    category: 'art',
    title: 'Sealife Collage',
    thumb: '/images/art/muirgen/muirgen_thumb.jpg',
    hero: '/images/art/muirgen/muirgen.jpg',
    summary:
      "A collage of found sea life sketches, cast in layers of ink and resin, back lit with programmable LED's. Inspired by the work of German biologist Ernst Haeckel, this resin piece is a collage of his detailed sea-life illustrations from the late nineteenth century. The multi-layered piece is back-lit by LEDs, custom programmed to change color over time. The wooden frame is made from recycled shipping pallets.",
    order: 4,
    sections: [
      { layout: 'image-right', image: '/images/art/muirgen/muirgen_frame.jpg' },
      { layout: 'image-left', youtubeId: 'qiUDm-0irI8' },
    ],
  },
  {
    slug: 'inks',
    category: 'art',
    title: 'Ink on Glass',
    thumb: '/images/art/inks/inks_dark_thumb.jpg',
    hero: '/images/art/inks/inks_red_close.jpg',
    summary:
      "Layers of ink cast in resin, back lit with programmable LED's. When connected to the internet, LED's become data-driven, changing color based on weather data from NOAA locations around the world.",
    order: 5,
    sections: [
      { layout: 'full-width', image: '/images/art/inks/inks_wide.jpg' },
      { layout: 'full-width', image: '/images/art/inks/inks_red.jpg' },
      { layout: 'full-width', image: '/images/art/inks/inks_blue.jpg' },
      { layout: 'full-width', image: '/images/art/inks/inks_wide_dark.jpg' },
    ],
  },
  {
    slug: 'tunnel',
    category: 'art',
    title: 'Tunnel in the Nocturnal Hum',
    thumb: '/images/art/tunnel/tunnel_thumb.jpg',
    hero: '/images/art/tunnel/tunnel_header.png',
    summary:
      'A study in feedback loops. A still image of a tidal wave is photographed, then re-photographed, thousands of times, allowing the image pixels to degrade with each pass. This video is a timelapsed documentation of that process.',
    order: 6,
    sections: [{ layout: 'image-left', vimeoId: '47963701' }],
  },
  {
    slug: 'chair',
    category: 'art',
    title: 'Patriotic School Chair',
    thumb: '/images/art/american_chair/chair_thumb.jpg',
    hero: '/images/chair.jpg',
    summary:
      'Reclaimed wooden school chair, covered in encaustic wax, finished with epoxy resin.',
    order: 7,
    sections: [],
  },
  {
    slug: 'resin',
    category: 'art',
    title: 'Resin',
    thumb: '/images/resin_blue.png',
    summary: '',
    order: 8,
    sections: [
      { layout: 'full-width', image: '/images/resin_blue.png' },
      { layout: 'full-width', image: '/images/resin_chemicals.png' },
      { layout: 'full-width', image: '/images/resin_electric.png' },
    ],
  },
]
