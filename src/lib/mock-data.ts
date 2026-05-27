import type {
  NavLink,
  ImpactStat,
  Event,
  BlogPost,
  Cause,
  Centre,
  GalleryItem,
  VolunteerOpportunity,
  Testimonial,
  TeamMember,
  Program,
} from '@/types';

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Our Centres', href: '/about/centres' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

// ---------------------------------------------------------------------------
// Impact Stats
// ---------------------------------------------------------------------------

export const impactStats: ImpactStat[] = [
  {
    value: 38,
    suffix: '+ Years',
    label: 'of Spiritual Teaching',
  },
  {
    value: 4000,
    suffix: '',
    label: 'Lives',
  },
  {
    value: 9,
    suffix: '+',
    label: 'Countries Reached',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Centres & Communities',
  },
];

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

export const events: Event[] = [
  // --- Upcoming ---
  {
    id: 'evt-001',
    slug: 'annual-spiritual-retreat-2026',
    title: 'Annual Spiritual Retreat 2026',
    description:
      'Five days of silent sittings, evening satsangs with Dr. Jan, and quiet time away from the world. Open to new and experienced students.',
    content: `<p>The Foundation&rsquo;s annual retreat — five days of sittings, satsangs, and time off from the noise of daily life. Dr. Baffour Jan leads the evening sessions; senior students hold the rhythm of the day.</p>
<p>Mornings begin with a sit before sunrise, followed by breakfast in silence. Afternoons are given to teaching sessions — usually around inner work, attention, and service as practice. Evenings are for satsang and questions. There is also unstructured time, which most people find they need more than they thought they would.</p>
<p>New and experienced students are welcome. Simple vegetarian meals throughout. On-site accommodation in shared or private rooms; spaces are limited, so register early if you can.</p>`,
    date: '2026-04-18',
    endDate: '2026-04-22',
    time: '08:00 AM',
    location: 'Retreat venue, Ghana',
    address: 'Venue announced on registration, Ghana',
    image: '/images/student-in-yoga-posture.jpg',
    category: 'Spiritual Retreat',
    isPast: false,
    registrationUrl: '/events/annual-spiritual-retreat-2026/register',
  },
  {
    id: 'evt-002',
    slug: 'meditation-intensive-accra-may-2026',
    title: 'Meditation Intensive — Accra',
    description:
      'A weekend of sitting, attention, and practical guidance for seekers who want to steady their practice.',
    content: `<p>This two-day intensive is for students who want to return to the basics with more sincerity: sitting, attention, silence, and honest observation of the mind.</p>
<p>Sessions include guided practice, teaching, rest, and space for questions. The emphasis is not on technique as performance, but on learning to remain present without forcing an experience.</p>
<p>Participants are encouraged to bring a meditation cushion or bench if they use one. Tea and light refreshments are provided.</p>`,
    date: '2026-05-09',
    endDate: '2026-05-10',
    time: '09:00 AM',
    location: 'JCF Accra Centre, Airport Residential Area',
    address: 'Franko Estate, Kwabenya, Accra, Ghana',
    image: '/images/studentinmeditation.jpg',
    category: 'Meditation Workshop',
    isPast: false,
    registrationUrl: '/events/meditation-intensive-accra-may-2026/register',
  },
  {
    id: 'evt-003',
    slug: 'community-clean-up-and-care-june-2026',
    title: 'Community Clean-Up & Care Day',
    description:
      'Volunteers gather for hands-on community service, simple care, and a closing reflection.',
    content: `<p>Service is part of the Jan Cosmic Foundation way of life. Community service days give students and supporters a practical way to serve together.</p>
<p>Activities may include clean-up work, food support, visits, centre support, or other needs identified with local organisers.</p>
<p>The day closes with a simple reflection circle. Please register so the team can plan supplies and roles carefully.</p>`,
    date: '2026-06-21',
    time: '07:30 AM',
    location: 'Nima Community Centre, Accra',
    address: 'Nima Road, Nima, Accra, Ghana',
    image: '/images/group-of-students2.jpg',
    category: 'Community Service',
    isPast: false,
    registrationUrl: '/events/community-clean-up-and-care-june-2026/register',
  },

  // --- Past ---
  {
    id: 'evt-004',
    slug: 'winter-solstice-meditation-2025',
    title: 'Evening Meditation Gathering',
    description:
      'A quiet evening of sitting, reflection, and shared intention with the JCF community.',
    content: `<p>The JCF community gathered for an evening of silent meditation, teaching, and reflection.</p>
<p>The evening offered a simple reminder that renewal is not created by ceremony alone. It begins when the mind becomes quiet enough to listen.</p>`,
    date: '2025-12-21',
    time: '06:00 PM',
    location: 'JCF Kumasi Centre',
    address: '7 Nhyiaeso Road, Nhyiaeso, Kumasi, Ghana',
    image: '/images/masterseated2.jpg',
    category: 'Spiritual Retreat',
    isPast: true,
  },
  {
    id: 'evt-005',
    slug: 'youth-awareness-workshop-september-2025',
    title: 'Youth Awareness Workshop',
    description:
      'A workshop introducing young people to self-awareness, responsibility, attention, and conscious living.',
    content: `<p>The youth workshop introduced participants to simple awareness practices, reflective questions, and the difference between pressure from the world and action guided by inner clarity.</p>
<p>Sessions explored self-knowledge, emotional awareness, service, and the responsibility of living consciously.</p>`,
    date: '2025-09-13',
    time: '09:00 AM',
    location: 'JCF Accra Centre',
    address: 'Franko Estate, Kwabenya, Accra, Ghana',
    image: '/images/studentslistening.jpg',
    category: 'Community Service',
    isPast: true,
  },
  {
    id: 'evt-006',
    slug: 'conscious-living-gathering-2025',
    title: 'Conscious Living Gathering',
    description:
      'A day of teaching, reflection, and conversation on bringing awareness into ordinary life.',
    content: `<p>This gathering explored conscious living in practical terms: attention, relationships, work, service, and the way the mind creates suffering.</p>
<p>The day included teachings, guided reflection, group conversation, and a closing sitting.</p>`,
    date: '2025-06-07',
    time: '08:30 AM',
    location: 'JCF Accra Centre',
    address: 'Franko Estate, Kwabenya, Accra, Ghana',
    image: '/images/group-posture.jpg',
    category: 'Spiritual Gathering',
    isPast: true,
  },
];

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'the-art-of-inner-stillness',
    title: 'On Stillness',
    excerpt:
      'A short note on stillness — what it is, what it isn\'t, and why it tends to elude the people who chase it hardest.',
    content: `<p>Stillness is not a technique. It is what is left when the noise quietens.</p>
<p>Most people who try to "become still" attempt to add stillness on top of an already busy life — another item on the list. It rarely takes root that way. Stillness arrives when we stop adding and let something fall away.</p>
<h3>The breath, not as a tool</h3>
<p>Sit. Notice that you are breathing. Don&rsquo;t lengthen it, don&rsquo;t deepen it, don&rsquo;t count it. Just notice. The mind will have opinions about this. Let it.</p>
<h3>Ten minutes is not too short</h3>
<p>People sometimes apologise for only sitting ten minutes a day. Ten minutes a day, kept faithfully for a year, will change you more than three hours twice a month. The body keeps a quiet record of what we do consistently.</p>
<h3>Silence is full</h3>
<p>Silence is not empty. It is where the answers that matter actually live — answers we couldn&rsquo;t hear above the noise of the day.</p>
<p>If you would like to sit with others, the Foundation runs weekly sittings in Accra and online. You are welcome.</p>`,
    image: '/images/masterseated.jpg',
    date: '2026-02-14',
    category: 'Spiritual Growth',
    tags: ['meditation', 'stillness', 'mindfulness', 'inner peace'],
    readTime: '5 min read',
    videoLink: 'https://youtu.be/dA1fa8xAyic',
  },
  {
    id: 'blog-002',
    slug: 'service-as-a-spiritual-path',
    title: 'Service is part of the path',
    excerpt:
      'Inner work and outer service are not two things. A few words on why Dr. Jan refuses to separate them.',
    content: `<p>It&rsquo;s common to think of awakening as a private affair — something arranged for in caves, retreats, or long stretches of inner work away from ordinary life. Dr. Jan keeps gently pulling the conversation back from that picture.</p>
<p>His point is simple. If something has truly opened in a person inwardly, it shows up in how they treat others. If it doesn&rsquo;t, the opening was probably an experience, not a realisation.</p>
<h3>Why service quietens the ego</h3>
<p>Notice what happens the moment you genuinely help someone — not to be seen helping, not to feel virtuous, just because they need it and you can. The self, for a moment, gets out of the way. That getting-out-of-the-way is what meditation has been training all along.</p>
<h3>Small is still real</h3>
<p>Service does not require grand projects. A phone call to a lonely neighbour. An hour with a younger colleague. Showing up — actually showing up — at a community day. These count.</p>
<p>If you&rsquo;d like to serve alongside other students, the Foundation runs community days throughout the year. Come once.</p>`,
    image: '/images/group-of-students.jpg',
    date: '2026-01-28',
    category: 'Community Service',
    tags: ['service', 'giving', 'community', 'spiritual growth', 'ubuntu'],
    readTime: '6 min read',
  },
  {
    id: 'blog-003',
    slug: 'building-a-daily-meditation-habit',
    title: 'Keeping a Daily Sitting Practice',
    excerpt:
      'A quiet, practical note on beginning again each day without turning meditation into another performance.',
    content: `<p>Beginning a meditation practice is easy. Returning to it through restless mornings, busy seasons, and the feeling that "nothing is happening" is where the real practice begins.</p>
<p>The Foundation keeps the instruction simple: sit honestly, return gently, and do not make a spiritual identity out of the practice.</p>
<h3>1. Start embarrassingly small</h3>
<p>Five minutes is enough to start. Not because five minutes is complete, but because a sincere beginning is better than an ideal practice that never happens.</p>
<h3>2. Attach it to an existing anchor</h3>
<p>Place the sitting beside something already steady: morning tea, the first light of day, the moment before sleep. Let ordinary life hold the doorway.</p>
<h3>3. Lower the bar for what counts</h3>
<p>Many people stop because thoughts arise and they assume they have failed. Thoughts arising is not failure. The moment of noticing is the practice beginning again.</p>
<h3>4. Find community</h3>
<p>Sitting alone matters. Sitting with others can steady the heart when private discipline becomes thin. Our centres and gatherings exist partly for this: to help seekers continue.</p>`,
    image: '/images/student-in-posture.jpg',
    date: '2026-01-10',
    category: 'Meditation',
    tags: ['meditation', 'habit', 'daily practice', 'beginners', 'mindfulness'],
    readTime: '7 min read',
  },
  {
    id: 'blog-004',
    slug: 'the-power-of-collective-intention',
    title: 'Why We Sit Together',
    excerpt:
      'A reflection on the quiet strength of sitting, listening, and seeking in the company of others.',
    content: `<p>There is a silence that can be touched alone. There is also a silence that becomes easier to recognise when sincere people sit together without pretending.</p>
<p>Group practice does not replace the private inner work. It supports it. It reminds the body and the mind that the path is not a private achievement, but a shared turning toward truth.</p>
<h3>The field of sincerity</h3>
<p>When a room becomes quiet, the person struggling with restlessness is helped by the steadiness of another. The person who arrived tired is held by the attention of the group. Something simple and human happens: we remember what we came for.</p>
<h3>More than attendance</h3>
<p>A sitting is not successful because many people came. It is useful when the people who came were sincere. Even a small circle can become a place where the mind softens and the heart remembers its deeper intention.</p>
<h3>Begin simply</h3>
<p>Come to a centre, attend a gathering, or sit with two or three people who also want to practise honestly. Begin without drama. Sit, listen, and let the practice teach you.</p>`,
    image: '/images/studentslistenning2.jpg',
    date: '2025-12-05',
    category: 'Spiritual Growth',
    tags: ['group meditation', 'collective consciousness', 'retreat', 'science', 'community'],
    readTime: '8 min read',
  },
  {
    id: 'blog-005',
    slug: 'guide-the-children-shaping-young-minds',
    title: 'Guide the Children: Seeds of Awareness',
    excerpt:
      'Through mentorship, awareness practices, and wisdom-based education, the Guide the Children programme is planting seeds of consciousness in the next generation.',
    content: `<p>Children are naturally open. They have not yet built the layers of conditioning that make inner work so effortful for adults. The Guide the Children programme is part of the Foundation&rsquo;s service to the next generation.</p>
<h3>More than academics</h3>
<p>Guide the Children is not a tutoring programme. It is an introduction to conscious living. Through age-appropriate awareness exercises, storytelling drawn from wisdom traditions, and creative expression, children learn to notice their thoughts, name their emotions, and relate to others with presence and compassion.</p>
<h3>What we are seeing</h3>
<p>Facilitators report that children who participate over multiple programme cycles show a visible shift in how they handle conflict, how they listen, and how they speak about themselves. Parents consistently tell us their children are calmer, more reflective, and more willing to help at home.</p>
<h3>The role of mentors</h3>
<p>Each child in the programme is paired with a volunteer mentor — not to instruct, but to be present. Mentors model attentiveness, curiosity, and stillness. In the JCF tradition, we believe that consciousness is caught more than it is taught, and the mentor relationship is where that transmission happens most naturally.</p>
<p>If you feel drawn to support this work — whether through volunteering as a mentor, donating educational materials, or simply spreading the word — visit the Guide the Children cause page to learn more.</p>`,
    image: '/images/students.jpg',
    date: '2025-11-18',
    category: 'Community Service',
    tags: ['children', 'mentorship', 'consciousness', 'youth', 'Guide the Children'],
    readTime: '6 min read',
  },
  {
    id: 'blog-006',
    slug: 'gratitude-practice-a-scientific-and-spiritual-perspective',
    title: 'Gratitude as a Way of Seeing',
    excerpt:
      'Gratitude is not a mood to manufacture. It is a clearer way of seeing the life already being given.',
    content: `<p>Gratitude is often treated like a technique for feeling better. It can help the heart soften, but its deeper purpose is not comfort. It is truthful seeing.</p>
<p>To be grateful is to notice that life is not self-created. Breath is given. Consciousness is given. The opportunity to grow is given. Even difficulty can become a teacher when met with awareness.</p>
<h3>Not denial</h3>
<p>Gratitude does not ask us to pretend that suffering is not real. It asks us not to let suffering become the only thing we can see.</p>
<h3>A simple practice</h3>
<p>At the end of the day, name three moments you received without earning them: a kindness, a meal, a breath of quiet, a sentence that helped you wake up. Let each one return you to humility.</p>
<p>Practised sincerely, gratitude becomes service. The heart that sees life as gift naturally begins to give.</p>`,
    image: '/images/exercise.jpg',
    date: '2025-10-22',
    category: 'Meditation',
    tags: ['gratitude', 'conscious living', 'daily practice', 'service'],
    readTime: '6 min read',
  },
];

// ---------------------------------------------------------------------------
// Causes (Donation)
// ---------------------------------------------------------------------------

export const causes: Cause[] = [
  {
    id: 'cause-001',
    slug: 'kwahu-land-project',
    title: 'JCF Village & Land Project',
    description:
      'Supporting the long-term JCF Village vision: a peaceful place for retreat, organic farming, herbal gardens, healing work, and community life.',
    content: `<p>In Dr. Jan&rsquo;s teaching on JCF, the village is not only a property project. It is a practical home for balance: a place where people can step away from external pressure, breathe fresh air, eat organic food, practise, and return to life renewed.</p>
<p>The vision includes retreat spaces, simple accommodation, organic farms, herbal gardens, healing and counselling work, and community life shaped by the Foundation&rsquo;s purpose.</p>
<p>Your donations support land acquisition, infrastructure, environmental care, farm development, and the practical facilities needed to hold this work well.</p>`,
    image: '/images/students-sitting-down-on-grass.jpg',
    gallery: [
      '/images/group-of-students.jpg',
      '/images/group-of-students2.jpg',
      '/images/masterseated4.jpg',
    ],
    type: 'specific',
    goalAmount: 500000,
    raisedAmount: 60000,
    currency: 'GHS',
    donorsCount: 4,
    category: 'Infrastructure',
    isActive: true,
  },
  {
    id: 'cause-002',
    slug: 'organic-farming-initiative',
    title: 'JCF Organic Farming Initiative',
    description:
      'Supporting the farms Dr. Jan described as part of JCF service: organic food, farm managers, farm workers, regional farms, and practical care for the land.',
    content: `<p>The Organic Farming Initiative supports one of the concrete service areas named in Dr. Jan&rsquo;s JCF teaching. The farms are meant to provide wholesome food, train committed workers, support regional communities, and connect spiritual practice with the care of land and body.</p>
<p>As the work grows, the farms will feed retreats, centres, and the future vegetarian training restaurant, while also helping members and visitors experience a more natural way of living.</p>
<p>Donations help support farm workers, equipment, seeds, organic inputs, irrigation, storage, transport, and basic farm operations.</p>`,
    image: '/images/exercise.jpg',
    gallery: [
      '/images/students-sitting-down-on-grass.jpg',
      '/images/group-posture.jpg',
    ],
    type: 'specific',
    goalAmount: 80000,
    raisedAmount: 34000,
    currency: 'GHS',
    donorsCount: 145,
    category: 'Sustainability',
    isActive: true,
  },
  {
    id: 'cause-003',
    slug: 'media-digital-outreach',
    title: 'JCF Media & Digital Outreach',
    description:
      'Recording, editing, publishing, and preserving Dr. Baffour Jan\'s teachings so seekers can meet the work wherever they are.',
    content: `<p>Dr. Jan spoke of a full media team: cameras, lighting, presenters, interviewers, editing, and steady publishing so the teachings can reach people beyond the room.</p>
<p>Many seekers first meet the work through a short clip, a recorded talk, a written reflection, or the official website. This work keeps the teachings reachable without flattening them into noise.</p>
<p>Donations support video and audio production, lighting, editing tools, content publishing, website infrastructure, and the people who help maintain the Foundation&rsquo;s digital presence.</p>`,
    image: '/images/doc-holding-mic.jpg',
    gallery: [
      '/images/teaching.jpg',
      '/images/studentslistening.jpg',
      '/images/studentslistenning2.jpg',
    ],
    type: 'ongoing',
    goalAmount: 0,
    raisedAmount: 2000,
    currency: 'GHS',
    donorsCount: 2,
    category: 'Media',
    isActive: true,
    impactStatement: 'Producing teachings and content that reach seekers across the world',
  },
  {
    id: 'cause-004',
    slug: 'guide-the-children',
    title: 'Guide the Children Initiative',
    description:
      'Guiding young people early toward awareness, responsibility, compassion, and self-realization.',
    content: `<p>The Guide the Children initiative is part of the Foundation&rsquo;s work. The intention is to meet young people before life becomes only pressure, performance, and borrowed identity.</p>
<p>Through mentorship, simple awareness practices, storytelling, reflection, and conscious learning, the programme helps children grow with presence, compassion, responsibility, and inner clarity.</p>
<p>Donations help support educational materials, children&rsquo;s programmes, workshops, outreach activities, mentor preparation, and learning resources.</p>`,
    image: '/images/students.jpg',
    gallery: [
      '/images/group-of-students2.jpg',
      '/images/studentslistening.jpg',
    ],
    type: 'ongoing',
    goalAmount: 0,
    raisedAmount: 0,
    currency: 'GHS',
    donorsCount: 0,
    category: 'Youth Development',
    isActive: true,
    impactStatement: 'Nurturing awareness and wisdom in children through mentorship and education',
  },
  {
    id: 'cause-005',
    slug: 'community-centre-kumasi',
    title: 'Regional Centres & Outreach',
    description:
      'Supporting local centres where outreach teachers, organisers, healers, counsellors, and students can gather, recharge, and serve.',
    content: `<p>Dr. Jan described centres and regional structures as practical contact points for the work. Outreach takes the teaching outward, but people also need places to gather, ask questions, recharge, and be guided.</p>
<p>This cause supports practical spaces for sittings, teaching, healing and counselling work, meetings, youth work, and local service connected to JCF communities.</p>
<p>Your support helps create stable homes for seekers, volunteers, organisers, and outreach teachers already carrying the work locally.</p>`,
    image: '/images/group-of-students.jpg',
    gallery: [
      '/images/masterseated3.jpg',
      '/images/teaching.jpg',
    ],
    type: 'specific',
    goalAmount: 60000,
    raisedAmount: 3500,
    currency: 'GHS',
    donorsCount: 187,
    category: 'Infrastructure',
    isActive: true,
  },
];

// ---------------------------------------------------------------------------
// Centres
// ---------------------------------------------------------------------------

export const centres: Centre[] = [
  {
    id: 'centre-001',
    slug: 'accra-ghana',
    name: 'JCF Accra Centre',
    location: 'Accra, Ghana',
    address: 'Franko Estate, Kwabenya, Accra, Ghana',
    country: 'Ghana',
    image: '/images/group-of-students.jpg',
    description:
      'The home centre of Jan Cosmic Foundation in Accra. The community gathers for sittings, teachings, service coordination, outreach preparation, and the day-to-day work of holding the Foundation.',
    memberCount: 620,
    leader: {
      name: 'Dr. Baffour Jan',
      avatar: '/images/doc-potrait.jpg',
      title: 'Founder & Spiritual Director',
    },
    contactEmail: 'info@jancosmicfoundation.org',
    contactPhone: '+233 55 059 0054',
    coordinates: { lat: 5.6832844, lng: -0.2653119 },
  },
  {
    id: 'centre-002',
    slug: 'kumasi-ghana',
    name: 'JCF Kumasi Centre',
    location: 'Kumasi, Ghana',
    address: '7 Nhyiaeso Road, Nhyiaeso, Kumasi, Ashanti Region, Ghana',
    country: 'Ghana',
    image: '/images/group-of-students2.jpg',
    description:
      'A JCF community in Kumasi for seekers who gather to sit, study, serve, organise locally, and support the wider work.',
    memberCount: 310,
    leader: {
      name: 'Yaw Boateng',
      avatar: '/images/doc-jcf.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'kumasi@jancosmicfoundation.org',
    contactPhone: '+233 32 202 1870',
    coordinates: { lat: 6.6885, lng: -1.6244 },
  },
  {
    id: 'centre-003',
    slug: 'london-uk',
    name: 'JCF London Centre',
    location: 'London, United Kingdom',
    address: '42 Coldharbour Lane, Brixton, London, SE5 9NR, United Kingdom',
    country: 'United Kingdom',
    image: '/images/students-sitting-down-on-grass.jpg',
    description:
      'A JCF community for seekers in London and the wider diaspora who want to stay connected to the teachings, sit together, and support the work from abroad.',
    memberCount: 185,
    leader: {
      name: 'Adwoa Boakye-Mensah',
      avatar: '/images/doc-jcf.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'london@jancosmicfoundation.org',
    contactPhone: '+44 20 7737 4290',
    coordinates: { lat: 51.4611, lng: -0.0999 },
  },
  {
    id: 'centre-004',
    slug: 'new-york-usa',
    name: 'JCF New York Centre',
    location: 'New York, USA',
    address: '235 West 116th Street, Harlem, New York, NY 10026, USA',
    country: 'United States of America',
    image: '/images/studentslistening.jpg',
    description:
      'A JCF community for seekers in New York who gather around the teachings, online study, local connection, and service where possible.',
    memberCount: 140,
    leader: {
      name: 'Kwame Ofori-Atta',
      avatar: '/images/doc-jcf.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'newyork@jancosmicfoundation.org',
    contactPhone: '+1 212 866 5540',
    coordinates: { lat: 40.8008, lng: -73.9535 },
  },
  {
    id: 'centre-005',
    slug: 'toronto-canada',
    name: 'JCF Toronto Centre',
    location: 'Toronto, Canada',
    address: '1180 Finch Avenue West, North York, Toronto, ON M3J 2E4, Canada',
    country: 'Canada',
    image: '/images/studentslistenning2.jpg',
    description:
      'A JCF community in Toronto for students and supporters who want to study, gather, and help sustain the Foundation from the diaspora.',
    memberCount: 165,
    leader: {
      name: 'Ama Sarpong',
      avatar: '/images/doc-jcf.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'toronto@jancosmicfoundation.org',
    contactPhone: '+1 416 739 2211',
    coordinates: { lat: 43.7615, lng: -79.4875 },
  },
];

// ---------------------------------------------------------------------------
// Gallery Items
// ---------------------------------------------------------------------------

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-001',
    title: 'Annual Spiritual Retreat — Group Meditation',
    description: 'Seekers gathered in quiet meditation during a JCF retreat.',
    url: '/images/studentinmeditation.jpg',
    thumbnail: '/images/studentinmeditation.jpg',
    type: 'image',
    category: 'events',
    date: '2025-04-20',
  },
  {
    id: 'gallery-002',
    title: 'Youth Mentorship Gathering',
    description: 'Young participants listening, reflecting, and learning together through the Foundation\'s youth work.',
    url: '/images/studentslistening.jpg',
    thumbnail: '/images/studentslistening.jpg',
    type: 'image',
    category: 'events',
    date: '2025-09-13',
  },
  {
    id: 'gallery-003',
    title: 'Evening Gathering',
    description: 'Community members gathered for reflection and shared practice.',
    url: '/images/masterseated2.jpg',
    thumbnail: '/images/masterseated2.jpg',
    type: 'image',
    category: 'events',
    date: '2025-12-21',
  },
  {
    id: 'gallery-004',
    title: 'Community Service Day',
    description: 'JCF volunteers serving together during a community care activity.',
    url: '/images/group-of-students2.jpg',
    thumbnail: '/images/group-of-students2.jpg',
    type: 'image',
    category: 'community',
    date: '2025-05-17',
  },
  {
    id: 'gallery-005',
    title: 'Service and Outreach',
    description: 'Foundation members gathered for practical outreach and community support.',
    url: '/images/group-of-students.jpg',
    thumbnail: '/images/group-of-students.jpg',
    type: 'image',
    category: 'community',
    date: '2025-08-09',
  },
  {
    id: 'gallery-006',
    title: 'Teaching and Recognition',
    description: 'A Foundation gathering with Dr. Baffour Jan and members of the community.',
    url: '/images/doc-holding-mic.jpg',
    thumbnail: '/images/doc-holding-mic.jpg',
    type: 'image',
    category: 'community',
    date: '2025-07-05',
  },
  {
    id: 'gallery-007',
    title: 'Morning Meditation',
    description: 'A quiet morning sitting during a JCF retreat.',
    url: '/images/student-in-yoga-posture.jpg',
    thumbnail: '/images/student-in-yoga-posture.jpg',
    type: 'image',
    category: 'spiritual',
    date: '2025-04-19',
  },
  {
    id: 'gallery-008',
    title: 'Satsang with Dr. Baffour Jan',
    description: 'A teaching and question gathering with Dr. Baffour Jan.',
    url: '/images/masterseated.jpg',
    thumbnail: '/images/masterseated.jpg',
    type: 'image',
    category: 'spiritual',
    date: '2025-04-21',
  },
  {
    id: 'gallery-009',
    title: 'Teaching Session',
    description: 'Students and seekers gathered for a Foundation teaching session.',
    url: '/images/teaching.jpg',
    thumbnail: '/images/teaching.jpg',
    type: 'image',
    category: 'spiritual',
    date: '2025-06-07',
  },
  {
    id: 'gallery-010',
    title: 'JCF Accra Centre',
    description: 'A gathering space for sittings, teachings, and Foundation activities in Accra.',
    url: '/images/group-posture.jpg',
    thumbnail: '/images/group-posture.jpg',
    type: 'image',
    category: 'centres',
    date: '2025-03-15',
  },
  {
    id: 'gallery-011',
    title: 'Diaspora Community Gathering',
    description: 'Members of the JCF community gathering outdoors for connection and reflection.',
    url: '/images/students-sitting-down-on-grass.jpg',
    thumbnail: '/images/students-sitting-down-on-grass.jpg',
    type: 'image',
    category: 'centres',
    date: '2025-07-27',
  },
  {
    id: 'gallery-012',
    title: 'Community Gathering',
    description: 'Members and supporters gathered in fellowship around the Foundation\'s work.',
    url: '/images/studentslistenning2.jpg',
    thumbnail: '/images/studentslistenning2.jpg',
    type: 'image',
    category: 'centres',
    date: '2025-11-08',
  },
];

// ---------------------------------------------------------------------------
// Volunteer Opportunities
// ---------------------------------------------------------------------------

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 'vol-001',
    title: 'Outreach & Regional Organiser',
    description:
      'Help coordinate local gatherings, service days, communication, follow-up, and the practical organisation Dr. Jan described for regional JCF work.',
    location: 'Accra or Kumasi, Ghana',
    commitment: '1 day per month minimum, plus occasional weeknight planning meetings',
    skills: ['Organisation', 'Communication', 'Community relations', 'Problem solving'],
  },
  {
    id: 'vol-002',
    title: 'Outreach Teacher Support',
    description:
      'Support sittings, introductory teachings, questions, and centre gatherings. A steady practice, humility, and reliability matter more than performance.',
    location: 'Any JCF Centre (Accra, Kumasi, London, New York, Toronto)',
    commitment: '2–4 hours per week',
    skills: ['Personal practice', 'Public speaking', 'Listening', 'Reliability'],
  },
  {
    id: 'vol-003',
    title: 'Guide the Children Mentor',
    description:
      'Offer presence-based mentorship to young people in the Guide the Children work through attentive listening, consistency, and grounded support.',
    location: 'Flexible — in-person or online',
    commitment: '2 hours per week for 12 weeks per programme cycle',
    skills: ['Professional experience in any field', 'Active listening', 'Patience', 'Commitment'],
  },
  {
    id: 'vol-004',
    title: 'Digital & Communications Volunteer',
    description:
      'Support the media work through social media, website updates, photography, video, newsletters, writing, editing, design, or publishing.',
    location: 'Remote, with occasional in-person events in Accra',
    commitment: 'Flexible — approximately 4–6 hours per month',
    skills: ['Social media', 'Photography / Videography', 'Graphic design', 'Writing', 'WordPress or web skills'],
  },
  {
    id: 'vol-005',
    title: 'Organic Farm & Food Service Support',
    description:
      'Support farm work, produce handling, organic food distribution, or preparation for the future vegetarian training restaurant.',
    location: 'Ghana, with selected remote coordination roles',
    commitment: 'Flexible, from monthly support to full-time interest',
    skills: ['Farming', 'Food handling', 'Logistics', 'Catering', 'Reliability'],
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Esi Amponsah',
    role: 'Seeker & Volunteer — Accra Centre',
    avatar: '/images/doc-jcf.jpg',
    quote:
      'The teachings helped me become honest about the restlessness I had been carrying. JCF gave me a place to sit, listen, serve, and keep returning to what is true.',
  },
  {
    id: 'test-002',
    name: 'James Osei-Bonsu',
    role: 'Meditation Facilitator — Kumasi Centre',
    avatar: '/images/doc-potrait.jpg',
    quote:
      'What drew me to JCF was the directness. The invitation was simple: know yourself, observe the mind, and let understanding become life.',
  },
  {
    id: 'test-003',
    name: 'Nana Akua Twum',
    role: 'Guide the Children Mentor — Accra',
    avatar: '/images/doc-jcf.jpg',
    quote:
      'Mentoring children has taught me that awareness is not only taught through words. It is also shared through presence, patience, and how we listen.',
  },
  {
    id: 'test-004',
    name: 'David Asiedu-Antwi',
    role: 'Member — London Centre',
    avatar: '/images/drjan-thinking.jpg',
    quote:
      'Living far from Ghana, I thought I would have to walk the path alone. The JCF community reminded me that sincere practice can deepen in the company of others.',
  },
  {
    id: 'test-005',
    name: 'Akosua Mensah-Bonsu',
    role: 'Retreat Participant — Annual Retreat 2025',
    avatar: '/images/doc-jcf.jpg',
    quote:
      'The retreat gave me space to see how noisy my mind had become. In the silence, Dr. Jan\'s teaching felt direct, practical, and deeply compassionate.',
  },
  {
    id: 'test-006',
    name: 'Kweku Ampong',
    role: 'Community Service Volunteer — Accra',
    avatar: '/images/doc-potrait.jpg',
    quote:
      'I came to volunteer for a few hours and left with a clearer understanding of service. Simple work, done with attention, can become part of the path.',
  },
  {
    id: 'test-007',
    name: 'Priscilla Owusu',
    role: 'Member — New York Centre',
    avatar: '/images/doc-jcf.jpg',
    quote:
      'As someone in the diaspora, JCF keeps me connected to the teachings and to a community of seekers who are asking the same deeper questions.',
  },
  {
    id: 'test-008',
    name: 'Yaw Frimpong',
    role: 'Parent — Guide the Children Programme',
    avatar: '/images/drjan-thinking.jpg',
    quote:
      'The Guide the Children work gives young people a gentle space to ask deeper questions, practise attention, and be met with patience.',
  },
];

// ---------------------------------------------------------------------------
// Team Members
// ---------------------------------------------------------------------------

export const teamMembers: TeamMember[] = [
  {
    id: 'team-001',
    name: 'Dr. Baffour Jan',
    role: 'Founder & Spiritual Director',
    bio: 'A Ghanaian mystic and spiritual teacher. Dr. Jan founded the Jan Cosmic Foundation in Accra in 2021 to give a formal home to teaching work he has been doing since 1986. He describes JCF\'s work as teaching and inspiring all to evolve rapidly toward self-realization, with service as a natural expression of inner life.',
    image: '/images/doc-potrait.jpg',
  },
  {
    id: 'team-002',
    name: 'Abena Asante',
    role: 'Senior Teacher & Programme Director',
    bio: 'A senior member of the JCF community helping coordinate teachings, retreats, study programmes, and student support under the guidance of Dr. Baffour Jan.',
    image: '/images/doc-jcf.jpg',
  },
  {
    id: 'team-003',
    name: 'Kofi Mensah',
    role: 'Youth Coordinator & Meditation Teacher',
    bio: 'A JCF coordinator supporting youth mentorship, awareness practice, and the Guide the Children work. His focus is helping young people meet the teachings in a grounded, age-appropriate way.',
    image: '/images/drjan-thinking.jpg',
  },
  {
    id: 'team-004',
    name: 'Maame Agyapong',
    role: 'Head of Community Partnerships & Outreach',
    bio: 'A JCF coordinator helping organise service activities, community relationships, volunteer care, and practical outreach connected to the Foundation\'s work.',
    image: '/images/masterseated4.jpg',
  },
];

// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export const programs: Program[] = [
  {
    id: 'prog-001',
    slug: 'spiritual-teachings',
    title: 'Spiritual Teachings & Courses',
    description:
      'Teachings and structured study that guide sincere seekers from borrowed identity toward self-realization.',
    content:
      'The core of Jan Cosmic Foundation is the teaching work of Dr. Baffour Jan. Through public talks, structured courses, sittings, and guided study, seekers are invited to examine consciousness, the Self, God, the soul, the mind, illusion, and the possibility of direct realization. The emphasis is not on collecting spiritual information, but on becoming quiet enough for knowledge to become lived experience.',
    image: '/images/teaching.jpg',
    icon: 'lotus',
    category: 'spiritual',
    isActive: true,
  },
  {
    id: 'prog-002',
    slug: 'meditation-retreats',
    title: 'Meditation Retreats & Intensives',
    description:
      'Retreats and intensives that give seekers time for silence, sitting, inquiry, and deeper practice.',
    content:
      'JCF retreats and intensives create a pause from ordinary noise. Through silence, meditation, teaching, balanced-state practice, and simple community rhythm, participants are invited to look inward with more honesty and steadiness. The purpose is not escape from life, but a clearer return to it.',
    image: '/images/studentinmeditation.jpg',
    icon: 'meditation',
    category: 'spiritual',
    isActive: true,
  },
  {
    id: 'prog-003',
    slug: 'guide-the-children',
    title: 'Guide the Children Initiative',
    description:
      'Introducing children and young people to awareness, responsibility, compassion, and conscious living.',
    content:
      'The Guide the Children Initiative plants seeds of awareness early in life. Through mentorship, simple practices, storytelling, reflection, and creative learning, young people are encouraged to develop self-awareness, compassion, responsibility, and inner clarity before the world trains them only for pressure and performance.',
    image: '/images/group-of-students.jpg',
    icon: 'children',
    category: 'education',
    isActive: true,
  },
  {
    id: 'prog-004',
    slug: 'community-service',
    title: 'Service & Outreach Teachers',
    description:
      'Direct and indirect service that carries the teaching into homes, centres, regions, media, land work, and community life.',
    content:
      'In Dr. Jan\'s teaching, service is not a public relations activity. It is one way evolution moves through a person. Outreach teachers, organisers, volunteers, and supporters help carry basic knowledge to sleeping souls, guide newcomers, coordinate centres, and let the understanding of unity become visible in action.',
    image: '/images/students-sitting-down-on-grass.jpg',
    icon: 'hands',
    category: 'community',
    isActive: true,
  },
  {
    id: 'prog-005',
    slug: 'spiritual-counselling',
    title: 'Healing, Counselling & Guidance',
    description:
      'Support for seekers through guidance, counselling, and healing work rooted in receptivity, balance, and compassion.',
    content:
      'Dr. Jan presents healing, counselling, and teaching as connected forms of service. Counselling helps a person become receptive; teaching brings clarity; healing flows through love, balance, and the recognition of the perfect Self beneath the condition. This work supports sincere inquiry without replacing personal responsibility.',
    image: '/images/masterseated3.jpg',
    icon: 'guidance',
    category: 'spiritual',
    isActive: true,
  },
  {
    id: 'prog-006',
    slug: 'media-digital-outreach',
    title: 'Media & Digital Outreach',
    description:
      'Recording, publishing, and preserving the teachings so seekers can meet the work wherever they are.',
    content:
      'The Media & Digital Outreach programme records talks, edits teachings, hosts interviews, publishes video and written content, and maintains the Foundation\'s online presence. It helps the work reach seekers who cannot attend a centre physically while preserving the depth and seriousness of the teachings.',
    image: '/images/doc-holding-mic.jpg',
    icon: 'media',
    category: 'community',
    isActive: true,
  },
  {
    id: 'prog-007',
    slug: 'organic-farms-and-food',
    title: 'Organic Farms & Vegetarian Training',
    description:
      'Organic farms, herbal gardens, food preparation, and training that connect spiritual work with the body, the land, and daily living.',
    content:
      'Dr. Jan described the organic farms, herbal preparations, and vegetarian training restaurant as practical arms of the Foundation. The farms provide natural food, train workers and managers, support regional communities, and prepare the ground for a village atmosphere where seekers can recharge in nature.',
    image: '/images/students-sitting-down-on-grass.jpg',
    icon: 'hands',
    category: 'community',
    isActive: true,
  },
];
