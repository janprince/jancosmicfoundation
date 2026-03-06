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
    value: 20000,
    suffix: '+',
    label: 'Lives Transformed',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Countries Reached',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Active Centres',
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
      'A transformative five-day silent retreat immersing participants in deep meditation, conscious breathing, and contemplative teachings drawn from the Jan Cosmic Foundation tradition.',
    content: `<p>Join us for the Jan Cosmic Foundation Annual Spiritual Retreat — a sacred gathering held in the serene hills of Aburi, Ghana. Over five days participants engage in extended silent sittings, guided breathwork sessions, and evening satsangs with Dr. Baffour Jan and senior facilitators.</p>
<p>Each morning begins with sunrise meditation on the open-air pavilion, followed by a mindful breakfast taken in noble silence. Afternoon sessions explore the philosophy of conscious living, non-attachment, and service as a spiritual path. Evening fires bring the community together for song, sharing, and celebration of the inner journey.</p>
<p>The retreat is suitable for both new and experienced meditators. Simple, nourishing vegetarian meals are included throughout the program. Accommodation is available on-site in shared or private rooms — limited spaces, early registration is encouraged.</p>`,
    date: '2026-04-18',
    endDate: '2026-04-22',
    time: '08:00 AM',
    location: 'Aburi Botanical Gardens Retreat Centre, Ghana',
    address: 'Aburi Botanical Gardens, Eastern Region, Ghana',
    image: '/images/placeholder-event.jpg',
    category: 'Spiritual Retreat',
    isPast: false,
    registrationUrl: '/events/annual-spiritual-retreat-2026/register',
  },
  {
    id: 'evt-002',
    slug: 'meditation-intensive-accra-may-2026',
    title: 'Meditation Intensive — Accra',
    description:
      'A weekend deep-dive into mindfulness and concentration meditation techniques for practitioners ready to expand their sitting practice.',
    content: `<p>This two-day intensive is designed for meditators who already have a regular practice and want to deepen their understanding of concentration (samatha) and insight (vipassana) methods as taught within the JCF lineage.</p>
<p>Saturday covers the theory and neuroscience of contemplative practice, breath-based stabilisation techniques, and working skillfully with distraction. Sunday shifts to open awareness, noting practice, and practical strategies for sustaining depth in daily life.</p>
<p>The intensive is facilitated by Senior Teacher Abena Asante and includes guided sits, small-group inquiry, and one-on-one interviews. Participants should bring a meditation cushion or bench if they own one. Tea and light refreshments provided; lunch break is on your own.</p>`,
    date: '2026-05-09',
    endDate: '2026-05-10',
    time: '09:00 AM',
    location: 'JCF Accra Centre, Airport Residential Area',
    address: '14 Nortei Ababio Loop, Airport Residential Area, Accra, Ghana',
    image: '/images/placeholder-event.jpg',
    category: 'Meditation Workshop',
    isPast: false,
    registrationUrl: '/events/meditation-intensive-accra-may-2026/register',
  },
  {
    id: 'evt-003',
    slug: 'community-clean-up-and-care-june-2026',
    title: 'Community Clean-Up & Care Day',
    description:
      'Volunteers gather to beautify the Nima neighbourhood, distribute food packs, and visit the elderly — a day of hands-on service and joyful giving.',
    content: `<p>Service is at the heart of the Jan Cosmic Foundation way of life. On this Community Clean-Up & Care Day, volunteers from all JCF centres across Ghana converge in Nima, Accra, to give back to one of the city's most vibrant and underserved communities.</p>
<p>Activities include a neighbourhood litter-collection walk, painting of public benches and murals, distribution of 500 care packages (food staples, soap, and sanitary items), and a visit to the Nima elderly care home where we share a meal and offer companionship.</p>
<p>The day closes with a shared communal lunch prepared by JCF volunteers, followed by a brief reflection circle. All ages and physical abilities are welcome — there is a task suited to everyone. Please register so we can prepare enough supplies.</p>`,
    date: '2026-06-21',
    time: '07:30 AM',
    location: 'Nima Community Centre, Accra',
    address: 'Nima Road, Nima, Accra, Ghana',
    image: '/images/placeholder-event.jpg',
    category: 'Community Service',
    isPast: false,
    registrationUrl: '/events/community-clean-up-and-care-june-2026/register',
  },

  // --- Past ---
  {
    id: 'evt-004',
    slug: 'winter-solstice-meditation-2025',
    title: 'Winter Solstice Meditation Evening',
    description:
      'A special candlelit meditation and ceremony marking the winter solstice — a time of inner renewal and collective intention-setting for the year ahead.',
    content: `<p>The JCF Kumasi Centre hosted a beautiful Winter Solstice Meditation Evening bringing together over 80 practitioners for three hours of silent meditation, chanting, and ceremony. Dr. Baffour Jan led the group in a guided journey through the darkness into light, using the symbolism of the solstice as a mirror for the inner path.</p>
<p>Participants set intentions for the coming year, released what no longer served them through a symbolic fire ceremony, and shared in a pot-luck feast celebrating the return of the light. The evening was a profound reminder of community, presence, and the cyclical nature of growth.</p>`,
    date: '2025-12-21',
    time: '06:00 PM',
    location: 'JCF Kumasi Centre',
    address: '7 Nhyiaeso Road, Nhyiaeso, Kumasi, Ghana',
    image: '/images/placeholder-event-past.jpg',
    category: 'Spiritual Retreat',
    isPast: true,
  },
  {
    id: 'evt-005',
    slug: 'youth-empowerment-workshop-september-2025',
    title: 'Youth Empowerment Workshop',
    description:
      'A full-day workshop introducing young people aged 16–25 to conscious living, self-awareness, and purpose — through the lens of the JCF teachings.',
    content: `<p>More than 120 young people from across Accra attended the JCF Youth Empowerment Workshop held at the Ghana Institute of Management and Public Administration. The programme blended awareness exercises, reflective inquiry, and practical sessions on discovering purpose and living with intention.</p>
<p>Sessions explored themes of self-knowledge, emotional awareness, and the difference between ambition driven by conditioning and action arising from genuine inner clarity. Participants left with a personal reflection journal, a community accountability partner, and free access to the JCF Youth Online Learning Hub for 12 months. The workshop was co-facilitated by JCF Youth Coordinator Kofi Mensah and Head of Community Partnerships Maame Agyapong.</p>`,
    date: '2025-09-13',
    time: '09:00 AM',
    location: 'GIMPA Conference Centre, Accra',
    address: 'Greenhill, Achimota, Accra, Ghana',
    image: '/images/placeholder-event-past.jpg',
    category: 'Community Service',
    isPast: true,
  },
  {
    id: 'evt-006',
    slug: 'mindfulness-in-healthcare-symposium-2025',
    title: 'Mindfulness in Healthcare Symposium',
    description:
      'Clinicians, researchers, and practitioners gathered to explore evidence-based applications of contemplative practices in Ghanaian healthcare settings.',
    content: `<p>The JCF partnered with the Ghana Health Service and the University of Ghana Medical School to host this one-day symposium at the Korle Bu Teaching Hospital Conference Hall. The event brought together 60 healthcare professionals, researchers, and meditation teachers to share findings and experiences at the intersection of contemplative practice and clinical care.</p>
<p>Keynote presentations covered mindfulness-based stress reduction (MBSR) outcomes in Ghanaian hospital settings, the integration of traditional healing wisdom with evidence-based practice, and practical implementation strategies for busy clinicians. The afternoon featured live demonstrations of bedside mindfulness protocols and group discussion panels.</p>`,
    date: '2025-06-07',
    time: '08:30 AM',
    location: 'Korle Bu Teaching Hospital, Accra',
    address: 'Guggisberg Avenue, Korle Bu, Accra, Ghana',
    image: '/images/placeholder-event-past.jpg',
    category: 'Meditation Workshop',
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
    title: 'The Art of Inner Stillness: Finding Peace in a Noisy World',
    excerpt:
      'In an age of relentless stimulation, the capacity to be genuinely still has become one of the rarest and most valuable of human gifts. Here is how to begin cultivating it.',
    content: `<p>We live in a world that celebrates busyness. To be perpetually occupied is worn as a badge of importance. Yet beneath the noise, every human heart longs for the same thing: genuine peace.</p>
<p>The Jan Cosmic Foundation tradition teaches that stillness is not the absence of activity — it is the ground from which all truly purposeful action arises. The Ghanaian proverb reminds us: <em>"The river that makes the most noise has the least water."</em> Depth comes from learning to turn inward.</p>
<h3>Begin with the breath</h3>
<p>The simplest and most universally available gateway to inner stillness is the breath. Not controlling it, not manipulating it — simply noticing it. Three conscious breaths taken before a meeting, before a meal, before a difficult conversation can shift the entire quality of that experience.</p>
<h3>Create a daily anchor</h3>
<p>A brief dedicated period of silence each day — even 10 minutes — trains the nervous system to recognise stillness as a resource rather than a threat. Many of our centre members report that this single practice changed their relationship with stress more than anything else they had tried.</p>
<h3>Let stillness be useful, not merely restful</h3>
<p>True stillness is not passive. It is the condition in which wisdom surfaces, in which we hear the quiet voice that knows what truly matters. Silence is not empty — it is full of the answers we have not yet learned to listen for.</p>
<p>We invite you to explore this dimension of your life with us. Our upcoming meditation sessions and retreats offer a structured, community-held space for this exploration.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Dr. Baffour Jan',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Founder & Spiritual Director',
    },
    date: '2026-02-14',
    category: 'Spiritual Growth',
    tags: ['meditation', 'stillness', 'mindfulness', 'inner peace'],
    readTime: '5 min read',
  },
  {
    id: 'blog-002',
    slug: 'service-as-a-spiritual-path',
    title: 'Service as a Spiritual Path: Why Giving is the Greatest Practice',
    excerpt:
      'Many people seek spiritual growth through inward practice alone. But the great traditions all agree — genuine awakening is inseparable from genuine service.',
    content: `<p>There is a common misunderstanding in spiritual circles that awakening is a private achievement — something attained in solitary caves, silent retreats, or years of inner work conducted in isolation from the world. The Jan Cosmic Foundation tradition respectfully challenges this view.</p>
<p>In our teaching, inner realisation and outer service are two wings of the same bird. The bird cannot fly with only one wing.</p>
<h3>Service dissolves the self</h3>
<p>When we genuinely serve another person — not to be seen, not to feel virtuous, but simply because they need help and we are able to give it — something remarkable happens: the ego, for a moment, steps aside. That stepping aside is precisely what meditation is training us to achieve. Service is meditation with your hands open.</p>
<h3>The Ghanaian Ubuntu principle</h3>
<p>The West African philosophical concept of <em>Ubuntu</em> — "I am because we are" — expresses this beautifully. Individual flourishing is not separate from collective flourishing. When we invest in our communities, we invest in ourselves at the deepest level.</p>
<h3>Starting small is still starting</h3>
<p>Service does not require grand gestures. A phone call to a lonely neighbour. Mentoring a young person in your field. Showing up consistently to a community project. The JCF's Community Service Days are designed precisely to make this step easy and joyful.</p>
<p>We invite you to join us at our next Community Care Day and discover for yourself why so many of our volunteers describe their service hours as the most spiritually alive moments of their week.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Abena Asante',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Senior Teacher & Programme Director',
    },
    date: '2026-01-28',
    category: 'Community Service',
    tags: ['service', 'giving', 'community', 'spiritual growth', 'ubuntu'],
    readTime: '6 min read',
  },
  {
    id: 'blog-003',
    slug: 'building-a-daily-meditation-habit',
    title: 'Building a Daily Meditation Habit That Actually Lasts',
    excerpt:
      'Most people who try meditation give up within a month. Here are the evidence-backed strategies our teachers have refined over decades to help practitioners build a sustainable practice.',
    content: `<p>Beginning a meditation practice is easy. Sustaining one through the inevitable rough patches — the restless mornings, the busy seasons, the feeling that "nothing is happening" — is where most practitioners struggle.</p>
<p>Over 38 years of teaching meditation, the Jan Cosmic Foundation has worked with thousands of practitioners at every stage of the journey. Here is what we have learned about building a practice that lasts.</p>
<h3>1. Start embarrassingly small</h3>
<p>Five minutes is enough to start. Not 20 minutes. Not the 45-minute sessions you read about online. Five genuine, intentional minutes every single day will build the neural pathway of "I am someone who meditates" far more effectively than sporadic long sessions.</p>
<h3>2. Attach it to an existing anchor</h3>
<p>Habit science is clear: new behaviours stick best when attached to existing routines. Meditate immediately after your morning tea, immediately before your evening shower. Let the existing habit carry the new one.</p>
<h3>3. Lower the bar for what counts</h3>
<p>Many practitioners quit because they feel they are "doing it wrong" when thoughts arise. Thoughts arising is not failure — it is the practice. Every time you notice a thought and return to the breath, that is one repetition of the mental muscle you are building. A session full of thoughts and full of returns is an excellent session.</p>
<h3>4. Find community</h3>
<p>This is perhaps the single most underrated factor. Practitioners who meditate within a community — even via a weekly group session — maintain their practice at dramatically higher rates than solo practitioners. Our centres hold weekly group sits open to all. Come once. Feel the difference.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Kofi Mensah',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Youth Coordinator & Meditation Teacher',
    },
    date: '2026-01-10',
    category: 'Meditation',
    tags: ['meditation', 'habit', 'daily practice', 'beginners', 'mindfulness'],
    readTime: '7 min read',
  },
  {
    id: 'blog-004',
    slug: 'the-power-of-collective-intention',
    title: 'The Power of Collective Intention: What Science and Spirit Agree On',
    excerpt:
      'Research on group meditation, the science of coherence, and ancient wisdom all point to the same surprising conclusion: consciousness shared is consciousness amplified.',
    content: `<p>When we sit in meditation alone, we draw from our own reservoir. When we sit together, something qualitatively different becomes available. This is not mysticism — it is increasingly supported by rigorous research.</p>
<p>Studies from the HeartMath Institute and Maharishi University have documented measurable shifts in environmental stress indicators — crime rates, hospital admissions, accident rates — correlated with large groups meditating together in a given area. The mechanism is debated; the data is not.</p>
<h3>What our retreat participants consistently report</h3>
<p>At every Annual Spiritual Retreat, we survey participants before, during, and after the experience. Year after year, the finding is the same: even practitioners who have meditated alone for years describe the group silence as deeper, more effortless, and more nourishing than anything they regularly access in solo practice.</p>
<h3>The neuroscience of social resonance</h3>
<p>Human nervous systems are designed to co-regulate. Mirror neurons, the vagal tone system, and breathing entrainment are all mechanisms by which bodies in proximity influence one another's physiological states. A calm, coherent group pulls individuals toward greater calm and coherence. This is biology as much as spirituality.</p>
<h3>Creating your own collective</h3>
<p>You do not need a large retreat to access this. Inviting two or three friends to sit together once a week creates a meaningful field of collective intention. Begin simply: agree on a time, sit for 20 minutes together, and close with a brief sharing. The JCF centres are also always open for community sits — check our events page for scheduled group meditation sessions near you.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Dr. Baffour Jan',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Founder & Spiritual Director',
    },
    date: '2025-12-05',
    category: 'Spiritual Growth',
    tags: ['group meditation', 'collective consciousness', 'retreat', 'science', 'community'],
    readTime: '8 min read',
  },
  {
    id: 'blog-005',
    slug: 'guide-the-children-shaping-young-minds',
    title: 'How the Guide the Children Initiative is Shaping Young Minds',
    excerpt:
      'Through mentorship, awareness practices, and wisdom-based education, the Guide the Children programme is planting seeds of consciousness in the next generation.',
    content: `<p>Children are naturally open. They have not yet built the layers of conditioning that make inner work so effortful for adults. The Guide the Children initiative was created by the Jan Cosmic Foundation to meet children in that openness — and nurture it before the world teaches them to close it off.</p>
<h3>More than academics</h3>
<p>Guide the Children is not a tutoring programme. It is an introduction to conscious living. Through age-appropriate awareness exercises, storytelling drawn from wisdom traditions, and creative expression, children learn to notice their thoughts, name their emotions, and relate to others with presence and compassion.</p>
<h3>What we are seeing</h3>
<p>Facilitators report that children who participate over multiple programme cycles show a visible shift in how they handle conflict, how they listen, and how they speak about themselves. Parents consistently tell us their children are calmer, more reflective, and more willing to help at home.</p>
<h3>The role of mentors</h3>
<p>Each child in the programme is paired with a volunteer mentor — not to instruct, but to be present. Mentors model attentiveness, curiosity, and stillness. In the JCF tradition, we believe that consciousness is caught more than it is taught, and the mentor relationship is where that transmission happens most naturally.</p>
<p>If you feel drawn to support this work — whether through volunteering as a mentor, donating educational materials, or simply spreading the word — visit the Guide the Children cause page to learn more.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Abena Asante',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Senior Teacher & Programme Director',
    },
    date: '2025-11-18',
    category: 'Community Service',
    tags: ['children', 'mentorship', 'consciousness', 'youth', 'Guide the Children'],
    readTime: '6 min read',
  },
  {
    id: 'blog-006',
    slug: 'gratitude-practice-a-scientific-and-spiritual-perspective',
    title: 'Gratitude Practice: A Scientific and Spiritual Perspective',
    excerpt:
      'Gratitude is one of the most extensively researched wellbeing practices in positive psychology — and one of the most celebrated in contemplative traditions. Here is why it works and how to do it effectively.',
    content: `<p>If you had to choose a single daily practice for wellbeing, the evidence would point strongly to gratitude. Dozens of randomised controlled trials have documented its effects on depression, anxiety, sleep quality, immune function, and social connection. Contemplative traditions have recommended it for millennia. The convergence is striking.</p>
<h3>Why gratitude works neurologically</h3>
<p>The brain's default mode — absent other instructions — tends toward what psychologists call the negativity bias: scanning for threats, rehearsing grievances, anticipating problems. This served our ancestors well on the savannah. It serves us less well in modern life. Gratitude practice deliberately trains the brain to also scan for what is working, what is beautiful, what has been given. Over time, this rebalances the default mode.</p>
<h3>The spiritual dimension</h3>
<p>In the JCF tradition, gratitude is more than a psychological technique. It is an orientation toward life itself — a recognition that existence is gift, that consciousness is gift, that community is gift. Practiced at this depth, gratitude naturally opens into what the great traditions call devotion or bhakti: the heart moved by beauty into service.</p>
<h3>A simple gratitude practice</h3>
<p>Each evening, write three specific things you are grateful for — not general things ("my health") but specific things ("the conversation with my colleague this afternoon that helped me see the problem differently"). Specificity is what produces the neurological benefit. After 21 days, notice what has shifted.</p>
<p>We invite you to share your experience with our community. The JCF online forum — accessible to all centre members — has an active gratitude thread where hundreds of practitioners have been posting daily for over two years.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Kofi Mensah',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Youth Coordinator & Meditation Teacher',
    },
    date: '2025-10-22',
    category: 'Meditation',
    tags: ['gratitude', 'wellbeing', 'positive psychology', 'daily practice', 'neuroscience'],
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
    title: 'JCF Kwahu Land Project',
    description:
      'Acquiring a 500-acre parcel of land in Kwahu, Eastern Region of Ghana, to establish a JCF Spiritual Village with retreat facilities, organic farms, and spaces for meditation and community living.',
    content: `<p>One of the primary initiatives of the Jan Cosmic Foundation is the acquisition of a 500-acre parcel of land in Kwahu, in the Eastern Region of Ghana. This land is envisioned as the foundation for a long-term spiritual and ecological project.</p>
<p>The project includes the development of organic farming and sustainable agriculture, a JCF Spiritual Village, a retreat centre for spiritual seekers, and dedicated spaces for meditation, learning, and community living.</p>
<p>The JCF Village is intended to function as a sanctuary for individuals seeking deeper spiritual understanding, similar in spirit to global spiritual retreat centres. Visitors will be able to stay for retreats, programmes, and periods of personal spiritual practice.</p>
<p>Your donations toward this project support land acquisition, infrastructure development, environmental restoration, and the construction of facilities for retreats and spiritual programmes.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
      '/images/placeholder-cause-gallery-3.jpg',
    ],
    goalAmount: 500000,
    raisedAmount: 185000,
    currency: 'GHS',
    donorsCount: 312,
    category: 'Infrastructure',
    isActive: true,
  },
  {
    id: 'cause-002',
    slug: 'organic-farming-initiative',
    title: 'JCF Organic Farming Initiative',
    description:
      'Supporting sustainable organic farming on the Kwahu land — producing healthy, chemical-free food while demonstrating conscious living in harmony with nature.',
    content: `<p>Alongside the Kwahu Land Project, organic farming activities have already begun on portions of the land, even though the full acquisition is still in progress.</p>
<p>The organic farms serve several purposes: producing healthy, chemical-free food, demonstrating sustainable agricultural practices, supporting the future JCF village community, and creating a model for conscious living in harmony with nature.</p>
<p>This initiative reflects the foundation's belief that spiritual growth and care for the earth are inseparable. By cultivating the land with respect and awareness, we practise the same principles we teach — aligning human life with universal intelligence.</p>
<p>Donations toward this initiative help support farming equipment, irrigation systems, seeds and organic inputs, and farm infrastructure and operations.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
    ],
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
      'Ensuring the teachings and work of Dr. Baffour Jan reach a global audience through professional media production, digital platforms, and modern technology.',
    content: `<p>The JCF Media Team plays a critical role in spreading the teachings and work of Dr. Baffour Jan and the Jan Cosmic Foundation to seekers around the world.</p>
<p>The media team is responsible for recording and producing teachings and talks, editing and publishing video content, managing digital platforms and websites, producing written content and publications, and maintaining the foundation's IT systems and online presence.</p>
<p>This work ensures that spiritual teachings and insights reach a global audience through modern media and technology. As Dr. Baffour Jan teaches, "The entire cosmos becomes accessible if we learn to speak the cosmic language" — and digital media is one of the ways we speak that language today.</p>
<p>Donations support video and audio production equipment, editing and media software, content production, website and digital infrastructure, and media team operations.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
      '/images/placeholder-cause-gallery-3.jpg',
    ],
    goalAmount: 60000,
    raisedAmount: 28500,
    currency: 'GHS',
    donorsCount: 203,
    category: 'Media',
    isActive: true,
  },
  {
    id: 'cause-004',
    slug: 'guide-the-children',
    title: 'Guide the Children Initiative',
    description:
      'Introducing children to a more conscious way of living through educational activities, mentorship, and learning approaches that plant seeds of wisdom and awareness early in life.',
    content: `<p>The Guide the Children initiative is a programme created by the Jan Cosmic Foundation to introduce children to a more conscious way of living and thinking.</p>
<p>The programme aims to help young people develop awareness and emotional intelligence, understand deeper aspects of life and existence, cultivate compassion, responsibility, and clarity, and grow beyond limiting social conditioning.</p>
<p>Through educational activities, mentorship, and conscious learning approaches, the initiative seeks to plant seeds of wisdom and awareness early in life. As Dr. Baffour Jan teaches, every human being carries within them the potential to awaken to higher states of consciousness — and nurturing this potential in children is among the most meaningful work we can do.</p>
<p>Donations help support educational materials, children's programmes and workshops, outreach activities, and the development of learning resources.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
    ],
    goalAmount: 45000,
    raisedAmount: 18000,
    currency: 'GHS',
    donorsCount: 167,
    category: 'Youth Development',
    isActive: true,
  },
  {
    id: 'cause-005',
    slug: 'community-centre-kumasi',
    title: 'Kumasi Community Centre Expansion',
    description:
      'Expanding the JCF Kumasi Community Centre to serve the growing spiritual community — adding meditation halls, learning spaces, and facilities for retreats and programmes.',
    content: `<p>The JCF Kumasi Community Centre has been a vital resource for the local spiritual community since its opening. Over the years, demand for its programmes — meditation sessions, spiritual teachings, retreats, and community gatherings — has grown to the point that the existing facility is consistently at capacity.</p>
<p>This expansion campaign will fund the construction of additional meditation and teaching spaces, a library, and a multi-purpose hall for community events, large gatherings, and training workshops.</p>
<p>The expanded centre will enable the JCF to welcome more seekers into the community and provide a permanent home for programmes that currently operate from rented spaces.</p>
<p>With your support, the expanded centre will become a beacon of spiritual growth and community service in the Ashanti Region.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
    ],
    goalAmount: 280000,
    raisedAmount: 134400,
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
    address: '14 Nortei Ababio Loop, Airport Residential Area, Accra, Ghana',
    country: 'Ghana',
    image: '/images/placeholder-centre.jpg',
    description:
      'The founding and flagship centre of the Jan Cosmic Foundation, established in 1988. The Accra Centre hosts the largest meditation community in West Africa, offering daily sits, weekly satsangs, teacher training, and a full calendar of community service programmes. It is home to the JCF Secretariat and the primary coordination hub for all global centre activities.',
    memberCount: 620,
    leader: {
      name: 'Dr. Baffour Jan',
      avatar: '/images/placeholder-avatar.jpg',
      title: 'Founder & Spiritual Director',
    },
    contactEmail: 'accra@jancosmic.org',
    contactPhone: '+233 30 277 4500',
    coordinates: { lat: 5.6037, lng: -0.187 },
  },
  {
    id: 'centre-002',
    slug: 'kumasi-ghana',
    name: 'JCF Kumasi Centre',
    location: 'Kumasi, Ghana',
    address: '7 Nhyiaeso Road, Nhyiaeso, Kumasi, Ashanti Region, Ghana',
    country: 'Ghana',
    image: '/images/placeholder-centre.jpg',
    description:
      'The Kumasi Centre serves the Ashanti Region and surrounding areas with a strong focus on community service and youth programmes. It operates the JCF Community Centre in Nhyiaeso — a hub for free tutoring, vocational training, and weekly health clinics — and hosts the JCF Youth Empowerment Programme cohort for the region.',
    memberCount: 310,
    leader: {
      name: 'Yaw Boateng',
      avatar: '/images/placeholder-avatar.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'kumasi@jancosmic.org',
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
    image: '/images/placeholder-centre.jpg',
    description:
      'The JCF London Centre was established in 2001 to serve the significant Ghanaian diaspora community in the UK and has grown into a multicultural spiritual and service community. Weekly meditation sessions, monthly community gatherings, and annual fundraising events for Ghana-based programmes are the pillars of London Centre life. The centre also coordinates JCF UK volunteer travel programmes to Ghana.',
    memberCount: 185,
    leader: {
      name: 'Adwoa Boakye-Mensah',
      avatar: '/images/placeholder-avatar.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'london@jancosmic.org',
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
    image: '/images/placeholder-centre.jpg',
    description:
      'Located in the heart of Harlem, the JCF New York Centre brings together the Ghanaian diaspora alongside a broader community of practitioners drawn to the JCF tradition. The centre is particularly active in the local African immigrant support community, partnering with neighbourhood organisations for housing assistance, legal aid clinics, and cultural events celebrating the African heritage.',
    memberCount: 140,
    leader: {
      name: 'Kwame Ofori-Atta',
      avatar: '/images/placeholder-avatar.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'newyork@jancosmic.org',
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
    image: '/images/placeholder-centre.jpg',
    description:
      'The JCF Toronto Centre was established in 2009 and has become one of the most active diaspora centres outside Ghana. It hosts the largest annual JCF fundraising gala in North America, raising significant funds each year for the Ghana-based scholarship and medical outreach programmes. The centre also runs a popular monthly cultural and spiritual evening open to the broader Toronto community.',
    memberCount: 165,
    leader: {
      name: 'Ama Sarpong',
      avatar: '/images/placeholder-avatar.jpg',
      title: 'Centre Director',
    },
    contactEmail: 'toronto@jancosmic.org',
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
    description: 'Over 200 practitioners in silent group meditation at the Aburi Retreat Centre during the 2025 Annual Spiritual Retreat.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'events',
    date: '2025-04-20',
  },
  {
    id: 'gallery-002',
    title: 'Youth Empowerment Workshop — Accra 2025',
    description: 'Young participants at the September 2025 Youth Empowerment Workshop engaging in a goal-setting exercise at GIMPA.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'events',
    date: '2025-09-13',
  },
  {
    id: 'gallery-003',
    title: 'Winter Solstice Fire Ceremony',
    description: 'Community members gathered around the ceremonial fire at the Kumasi Centre during the 2025 Winter Solstice evening.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'events',
    date: '2025-12-21',
  },
  {
    id: 'gallery-004',
    title: 'Nima Community Clean-Up 2025',
    description: 'JCF volunteers clearing litter and painting murals along Nima Road during the May 2025 Community Care Day.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'community',
    date: '2025-05-17',
  },
  {
    id: 'gallery-005',
    title: 'Medical Outreach — Upper East Region',
    description: 'JCF medical team conducting free health screenings in Bawku during the Northern Ghana Medical Outreach programme.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'community',
    date: '2025-08-09',
  },
  {
    id: 'gallery-006',
    title: 'Scholarship Presentation Ceremony',
    description: 'Dr. Baffour Jan presenting scholarship certificates to the 2025 cohort of JCF Education Scholarship recipients.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'community',
    date: '2025-07-05',
  },
  {
    id: 'gallery-007',
    title: 'Morning Meditation — Aburi Retreat',
    description: 'Sunrise meditation session on the open-air pavilion overlooking the Aburi hills. A cherished daily ritual of the annual retreat.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'spiritual',
    date: '2025-04-19',
  },
  {
    id: 'gallery-008',
    title: 'Satsang with Dr. Baffour Jan',
    description: 'An intimate evening satsang with the Founder during the 2025 Annual Retreat — a question and answer gathering held under the stars.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'spiritual',
    date: '2025-04-21',
  },
  {
    id: 'gallery-009',
    title: 'Mindfulness in Healthcare Symposium',
    description: 'Clinicians and meditation teachers in discussion at the Korle Bu Teaching Hospital symposium, June 2025.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'spiritual',
    date: '2025-06-07',
  },
  {
    id: 'gallery-010',
    title: 'JCF Accra Centre — Main Hall',
    description: 'The beautifully appointed main meditation hall of the JCF Accra Centre, which seats up to 150 practitioners.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'centres',
    date: '2025-03-15',
  },
  {
    id: 'gallery-011',
    title: 'JCF London Centre — Community Gathering',
    description: 'Members of the JCF London Centre at their annual summer community gathering in Brockwell Park, Brixton.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
    type: 'image',
    category: 'centres',
    date: '2025-07-27',
  },
  {
    id: 'gallery-012',
    title: 'JCF Toronto Annual Gala',
    description: 'The 2025 JCF Toronto Fundraising Gala — an evening of music, food, and celebration that raised GHS 85,000 for Ghana-based programmes.',
    url: '/images/placeholder-gallery.jpg',
    thumbnail: '/images/placeholder-gallery-thumb.jpg',
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
    title: 'Community Outreach Coordinator',
    description:
      'Coordinate and participate in our regular community service days — organising logistics, liaising with partner organisations, and ensuring volunteers have a meaningful and well-supported experience in the field.',
    location: 'Accra or Kumasi, Ghana',
    commitment: '1 day per month minimum, plus occasional weeknight planning meetings',
    skills: ['Organisation', 'Communication', 'Community relations', 'Problem solving'],
  },
  {
    id: 'vol-002',
    title: 'Meditation Session Facilitator',
    description:
      'Lead or co-facilitate weekly community meditation sessions at your local JCF centre or an outreach location. Training and ongoing mentorship are provided by senior JCF teachers. An existing personal practice is required; formal teaching credentials are not.',
    location: 'Any JCF Centre (Accra, Kumasi, London, New York, Toronto)',
    commitment: '2–4 hours per week',
    skills: ['Personal meditation practice', 'Public speaking', 'Empathy', 'Reliability'],
  },
  {
    id: 'vol-003',
    title: 'Youth Mentor',
    description:
      'Provide presence-based mentorship to young people in the Guide the Children initiative and the Youth Empowerment Programme. Mentors commit to regular meetings with their mentees over a 12-week programme cycle, offering attentive listening, encouragement, and the kind of grounded support that comes from being genuinely present.',
    location: 'Flexible — in-person or online',
    commitment: '2 hours per week for 12 weeks per programme cycle',
    skills: ['Professional experience in any field', 'Active listening', 'Patience', 'Commitment'],
  },
  {
    id: 'vol-004',
    title: 'Digital & Communications Volunteer',
    description:
      'Support the JCF communications team with social media content, website updates, photography and videography at events, newsletter production, and graphic design. This role is ideal for creative professionals who want to contribute their skills to a cause they believe in.',
    location: 'Remote, with occasional in-person events in Accra',
    commitment: 'Flexible — approximately 4–6 hours per month',
    skills: ['Social media', 'Photography / Videography', 'Graphic design', 'Writing', 'WordPress or web skills'],
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
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'Before I found JCF, I was successful on the outside but completely lost on the inside. The teachings of Dr. Jan helped me see that the restlessness I felt was not a problem to solve — it was a call to wake up. The community of seekers here has become my spiritual family.',
  },
  {
    id: 'test-002',
    name: 'James Osei-Bonsu',
    role: 'Meditation Facilitator — Kumasi Centre',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'What drew me to JCF was the directness. No dogma, no rituals for the sake of rituals — just a clear invitation to know yourself at the deepest level. Facilitating meditation sessions has become my way of giving back what was so generously given to me: the possibility of inner freedom.',
  },
  {
    id: 'test-003',
    name: 'Nana Akua Twum',
    role: 'Guide the Children Mentor — Accra',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'Mentoring children in the Guide the Children programme has taught me that consciousness is not something you lecture about — it is something you transmit through presence. When I sit with these young ones, I see them soften, open up, and begin to ask the questions that matter. It transforms me as much as it transforms them.',
  },
  {
    id: 'test-004',
    name: 'David Asiedu-Antwi',
    role: 'Member — London Centre',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'Living in London, far from Ghana, I thought the spiritual path was something I would have to walk alone. The JCF London Centre proved me wrong. The weekly group sits, the satsangs, and the community of seekers have shown me that self-realization is not a solitary pursuit — it deepens in the company of others who are also reaching for the truth.',
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
    bio: 'Dr. Baffour Jan is a spiritual master, mystic, and teacher who founded the Jan Cosmic Foundation in Accra in 1988. For over 38 years he has guided seekers toward self-realization, teaching that the evolution of consciousness and selfless service are inseparable dimensions of the same path. Under his guidance, the JCF has grown from a small meditation circle in Airport Residential Area to an international community spanning five countries and touching over 20,000 lives. He is the author of three books on consciousness and higher living, a deeply sought-after retreat teacher, and above all, a living example of the inner freedom he points others toward.',
    image: '/images/placeholder-team.jpg',
  },
  {
    id: 'team-002',
    name: 'Abena Asante',
    role: 'Senior Teacher & Programme Director',
    bio: 'Abena Asante has been a core member of the JCF community since 2003 and a certified meditation teacher within the JCF lineage since 2009. As Programme Director, she oversees the development and delivery of all JCF training and educational offerings, including the Teacher Training Programme, the Youth Empowerment curriculum, and the annual retreat calendar. Grounded in the teachings of Dr. Baffour Jan, she is passionate about making contemplative practice accessible across cultural and economic lines. She leads the Women\'s Wisdom Circle at the Accra Centre and is a regular contributor to the JCF blog.',
    image: '/images/placeholder-team.jpg',
  },
  {
    id: 'team-003',
    name: 'Kofi Mensah',
    role: 'Youth Coordinator & Meditation Teacher',
    bio: 'Kofi Mensah was a young seeker drawn to Dr. Jan\'s teachings in 2012, and that encounter set the course of his life. He returned to the JCF as a staff member in 2018, bringing the same fire that first brought him through the door. As Youth Coordinator, he leads the Youth Empowerment Programme, manages the mentorship network, and serves as the primary point of contact for young people engaging with the JCF for the first time. A certified meditation teacher, Kofi brings warmth, energy, and lived experience to his work with young people. He co-authored the JCF Youth Mindfulness Curriculum and frequently speaks at schools and universities across Ghana.',
    image: '/images/placeholder-team.jpg',
  },
  {
    id: 'team-004',
    name: 'Maame Agyapong',
    role: 'Head of Community Partnerships & Outreach',
    bio: 'Maame Agyapong leads the JCF\'s relationships with partner organisations, government agencies, and community institutions. With a background in public health and community development, she oversees the Guide the Children outreach activities, the Community Service Days calendar, and the JCF\'s growing portfolio of collaborative projects with institutions such as the Ghana Health Service and the University of Ghana. She serves on the boards of two Ghana-based charitable organisations. Her work ensures that the JCF\'s service programmes are rooted in genuine community need and delivered with the highest standards of care and accountability.',
    image: '/images/placeholder-team.jpg',
  },
];
