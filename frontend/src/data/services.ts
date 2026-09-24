export interface Service {
  id: string
  title: string
  short: string
  description: string
  points: string[]
  image: string
}

export const services: Service[] = [
  {
    id: 'pipeline-storage',
    title: 'Onshore Pipeline & Storage Facilities',
    short:
      'Development and support of onshore pipeline storage facilities located in, on or under any land of the state, other than submerged land.',
    description:
      'We provide support services for onshore pipeline storage facilities — any part of which is located in, on or under any land of the state, other than submerged land. Our teams deliver safe, compliant and reliable storage and pipeline infrastructure support across Nigeria.',
    points: [
      'Onshore pipeline support services',
      'Petroleum product storage infrastructure',
      'Safety and regulatory compliance',
      'Tank farm and terminal support',
    ],
    image: '/images/storage-tanks.jpg',
  },
  {
    id: 'facility-maintenance',
    title: 'Facility Maintenance',
    short:
      'Maintenance planning, execution and supervision performed in strict compliance to quality plans and service specifications.',
    description:
      'Our maintenance teams keep critical oil and gas assets running at peak performance. Maintenance planning, execution and supervision are performed in strict compliance to quality plans and service specifications — protecting uptime, safety and asset value.',
    points: [
      'Maintenance planning and scheduling',
      'Execution and supervision to quality plans',
      'Preventive and corrective maintenance',
      'Strict HSE and quality compliance',
    ],
    image: '/images/pipeline1.jpg',
  },
  {
    id: 'manpower-training',
    title: 'Specialized Manpower & Training',
    short:
      'Specialized manpower provisions and specialized training programmes for the oil, gas, marine and energy industry.',
    description:
      'We supply competent, certified personnel to upstream, midstream and downstream operations, and deliver specialized training that builds local capacity. Our blend of local and foreign expertise ensures every placement meets international standards.',
    points: [
      'Specialized manpower provisions',
      'Specialized industry training',
      'Local and foreign expertise',
      'Certified, safety-conscious personnel',
    ],
    image: '/images/workers.jpg',
  },
  {
    id: 'asset-buyback',
    title: 'Asset Buy-Back & Materials Recovery',
    short:
      'Asset buy-back, share buyback, and recovery of materials declared obsolete, junks, disused or no longer required by oil and gas operators.',
    description:
      'We create value from redundant assets: asset buy-back, share buyback, and the purchase of materials declared obsolete, junks, disused or no longer required by oil and gas operators. We manage valuation, recovery and offtake responsibly and transparently.',
    points: [
      'Asset buy-back and share buyback',
      'Obsolete and disused materials offtake',
      'Transparent valuation and recovery',
      'Responsible decommissioning support',
    ],
    image: '/images/logistics.jpg',
  },
  {
    id: 'downstream-midstream',
    title: 'Downstream & Midstream Supply',
    short:
      'Your trusted Diesel (AGO) supplier and PMS at the best price — dependable fuel supply for businesses and consumers.',
    description:
      'Tulolag is your trusted Diesel (AGO) supplier, delivering PMS at the best price. From bulk supply to final delivery, we keep homes, businesses and industry powered with quality petroleum products across the downstream and midstream value chain.',
    points: [
      'Trusted Diesel (AGO) supply',
      'PMS (petrol) at the best price',
      'Bulk and consumer-level delivery',
      'Quality-assured petroleum products',
    ],
    image: '/images/fuel-station.jpg',
  },
  {
    id: 'lpg-retail',
    title: 'LPG Retail & Distribution',
    short:
      'LPG retail outlets and final consumer supply — safe, clean cooking and industrial gas where it is needed.',
    description:
      'We operate LPG retail outlets and supply final consumers with safe, clean liquefied petroleum gas. Our distribution network brings reliable cooking and industrial gas closer to homes and businesses.',
    points: [
      'LPG retail outlets',
      'Final consumer supply',
      'Safe handling and distribution',
      'Reliable availability',
    ],
    image: '/images/lpg.jpg',
  },
]

export const companyInfo = {
  name: 'Tulolag Petroleum Energy Ltd',
  fullName: 'Tulolag Petroleum & Gas and Energy Limited',
  phones: [
    { display: '+234 803 304 2847', href: 'tel:+2348033042847' },
    { display: '+234 705 052 1111', href: 'tel:+2347050521111' },
  ],
  email: 'info@tpenglimited.com',
  emailHref: 'mailto:info@tpenglimited.com',
  emails: [
    { display: 'info@tpenglimited.com', href: 'mailto:info@tpenglimited.com' },
    { display: 'tunde.ogunberu@tpenglimited.com', href: 'mailto:tunde.ogunberu@tpenglimited.com' },
  ],
  website: 'tpenglimited.com',
  websiteHref: 'https://tpenglimited.com',
  address: '9, Aina Crescent, Cashew Estate, Off Oreta Road, Igbogbo, Ikorodu, Lagos',
  mapEmbed:
    'https://maps.google.com/maps?q=9%2C%20Aina%20Crescent%2C%20Cashew%20Estate%2C%20Off%20Oreta%20Road%2C%20Igbogbo%2C%20Ikorodu%2C%20Lagos&t=m&z=14&output=embed&iwloc=near',
}
