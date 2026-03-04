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
      'A full-day workshop equipping young people aged 16–25 with mindfulness tools, goal-setting frameworks, and leadership skills for purposeful living.',
    content: `<p>More than 120 young people from across Accra attended the JCF Youth Empowerment Workshop held at the Ghana Institute of Management and Public Administration. The programme blended mindfulness exercises, motivational talks from JCF alumni now working as professionals, and practical sessions on vision-boarding and financial literacy.</p>
<p>Participants left with a personal action plan, a community accountability partner, and free access to the JCF Youth Online Learning Hub for 12 months. The workshop was co-facilitated by JCF Youth Coordinator Kofi Mensah and guest facilitator Maame Agyapong, a certified life coach and JCF member.</p>`,
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
    slug: 'how-jcf-education-scholarships-changed-lives',
    title: 'How Our Education Scholarships Changed Five Lives — In Their Own Words',
    excerpt:
      'Five JCF scholarship recipients share how access to quality education transformed not just their own futures, but the futures of their families and communities.',
    content: `<p>The Jan Cosmic Foundation believes that education is among the most powerful levers for lasting transformation in any community. Since 2008, our Education Scholarship Programme has supported over 340 students across Ghana in accessing secondary and tertiary education they would otherwise have been unable to afford.</p>
<p>This year, we sat down with five alumni to ask a simple question: how did it change you?</p>
<blockquote><p>"Before the scholarship I was helping my mother sell tomatoes at Makola. Now I am a registered nurse at Korle Bu. My mother has not sold tomatoes in three years." — <strong>Akosua, 26, Accra</strong></p></blockquote>
<blockquote><p>"I was the first in my entire family — aunties, uncles, cousins, everyone — to finish university. My younger sisters are now in secondary school because I can help pay their fees. It keeps going." — <strong>Emmanuel, 29, Kumasi</strong></p></blockquote>
<blockquote><p>"The scholarship changed the material facts of my life. But the JCF community changed who I am. I learned to give back before I even had much to give." — <strong>Fatoumata, 24, Tamale</strong></p></blockquote>
<p>These stories are not exceptional — they are the norm within our scholarship community. To support the next generation of scholars, visit our Education Scholarship cause page and consider making a contribution.</p>`,
    image: '/images/placeholder-blog.jpg',
    author: {
      name: 'Abena Asante',
      avatar: '/images/placeholder-avatar.jpg',
      role: 'Senior Teacher & Programme Director',
    },
    date: '2025-11-18',
    category: 'Community Service',
    tags: ['scholarships', 'education', 'impact', 'Ghana', 'stories'],
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
    slug: 'education-scholarships',
    title: 'Education Scholarship Fund',
    description:
      'Providing secondary and tertiary education scholarships to brilliant but financially disadvantaged young Ghanaians, breaking the cycle of poverty through the power of learning.',
    content: `<p>Education is the cornerstone of lasting transformation. The JCF Education Scholarship Fund has supported over 340 students since 2008, enabling them to access quality secondary and tertiary education that would otherwise have been beyond their reach.</p>
<p>Each scholarship covers tuition, essential textbooks, and a monthly stipend for transport and meals. Recipients are selected on the basis of academic merit and financial need, with priority given to students from rural communities and female students in STEM programmes.</p>
<p>Beyond financial support, scholarship holders are welcomed into the JCF mentorship network, connecting them with professionals and JCF community members who support their academic and personal development throughout their studies.</p>
<p>Your donation directly funds the next cohort of scholars. GHS 500 covers one month of a student's stipend. GHS 3,000 covers a full year of secondary school tuition. Every contribution, at every level, moves a young person closer to their potential.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
      '/images/placeholder-cause-gallery-3.jpg',
    ],
    goalAmount: 150000,
    raisedAmount: 98250,
    currency: 'GHS',
    donorsCount: 312,
    category: 'Education',
    isActive: true,
  },
  {
    id: 'cause-002',
    slug: 'community-centre-kumasi',
    title: 'Kumasi Community Centre Expansion',
    description:
      'Expanding the JCF Kumasi Community Centre to triple its capacity, adding a library, computer lab, and multi-purpose hall to serve the growing needs of the Nhyiaeso community.',
    content: `<p>The JCF Kumasi Community Centre has been a vital resource for the Nhyiaeso neighbourhood since its opening in 2015. Over the past decade, demand for its programmes — free tutoring, vocational training, weekly meditation sessions, and community health clinics — has grown to the point that the existing facility is consistently at capacity.</p>
<p>This expansion campaign will fund the construction of a new wing comprising a 60-seat library with free internet access, a computer lab with 20 workstations, and a 200-seat multi-purpose hall that will serve as a venue for community events, large meditation gatherings, and vocational training workshops.</p>
<p>The expanded centre will enable the JCF to serve an estimated 1,200 additional community members per month and provide a permanent home for programmes that currently operate from rented spaces.</p>
<p>Construction is scheduled to begin when the campaign reaches 80% of its goal. With your support, we aim to break ground in late 2026 and welcome the community into the expanded centre by mid-2027.</p>`,
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
  {
    id: 'cause-003',
    slug: 'medical-outreach-northern-ghana',
    title: 'Medical Outreach — Northern Ghana',
    description:
      'Funding mobile health clinics to bring essential medical care, health education, and preventive screenings to remote communities in Northern Ghana with limited access to healthcare.',
    content: `<p>Northern Ghana continues to face significant health disparities compared to the south. Many communities in the Upper East and Upper West regions have no clinic within reasonable travelling distance, and specialist care is effectively inaccessible for the majority of residents.</p>
<p>The JCF Medical Outreach Programme deploys mobile health teams comprising a doctor, two nurses, a community health officer, and a JCF volunteer coordinator. Each outreach visit provides free consultations, essential medications, maternal and child health screenings, blood pressure and diabetes checks, and basic dental care.</p>
<p>In 2025, the programme completed 24 outreach visits serving a total of 4,800 individuals. The 2026 campaign will fund 36 visits — a 50% increase — covering 14 additional communities identified by our field team as having the greatest unmet need.</p>
<p>GHS 2,500 funds a single outreach day serving up to 200 community members. GHS 10,000 funds a full month of outreach activity. Your generosity is, quite literally, lifesaving.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
      '/images/placeholder-cause-gallery-3.jpg',
      '/images/placeholder-cause-gallery-4.jpg',
    ],
    goalAmount: 90000,
    raisedAmount: 72000,
    currency: 'GHS',
    donorsCount: 428,
    category: 'Healthcare',
    isActive: true,
  },
  {
    id: 'cause-004',
    slug: 'youth-empowerment-programme',
    title: 'Youth Empowerment Programme',
    description:
      'Equipping young people aged 16–25 across Ghana with mindfulness skills, entrepreneurship training, and mentorship to build lives of purpose, resilience, and contribution.',
    content: `<p>Ghana's youth population is its greatest resource — and its greatest responsibility. With over 60% of the population under 25 and a rapidly evolving employment landscape, young Ghanaians need more than academic qualifications. They need inner resources: emotional resilience, clarity of purpose, the capacity to think creatively and collaborate effectively.</p>
<p>The JCF Youth Empowerment Programme is a 12-week curriculum combining mindfulness and self-awareness practices, entrepreneurship fundamentals, financial literacy, community leadership skills, and mentorship from JCF members who are established professionals across various fields.</p>
<p>The programme is offered free of charge to accepted participants. Each cohort of 30 young people goes through the programme together, forming a peer community that continues to support one another long after the formal programme ends. Alumni cohorts from 2020 have gone on to start 14 small businesses, launch 3 community initiatives, and place members in professional roles across Ghana and internationally.</p>
<p>This campaign will fund the 2026–2027 programme cycle, supporting four cohorts of 30 young people each — 120 participants in total — in Accra, Kumasi, Tamale, and Cape Coast.</p>`,
    image: '/images/placeholder-cause.jpg',
    gallery: [
      '/images/placeholder-cause-gallery-1.jpg',
      '/images/placeholder-cause-gallery-2.jpg',
    ],
    goalAmount: 60000,
    raisedAmount: 21000,
    currency: 'GHS',
    donorsCount: 95,
    category: 'Youth Development',
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
      'Provide one-on-one or small-group mentorship to participants in the JCF Youth Empowerment Programme. Mentors commit to regular meetings with their mentees over a 12-week programme cycle, offering professional guidance, encouragement, and practical support.',
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
    role: 'Volunteer, Community Outreach — Accra',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'I joined JCF thinking I was coming to help the community. What I did not expect was how much the community would help me. Volunteering here has given me a sense of purpose I did not know I was missing. Every service day leaves me feeling more alive, not more tired.',
  },
  {
    id: 'test-002',
    name: 'James Osei-Bonsu',
    role: 'Meditation Session Facilitator — Kumasi Centre',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'Facilitating meditation sessions has deepened my own practice in ways I could not have achieved alone. There is something about holding space for others that demands you show up fully yourself. The JCF teacher training and mentorship have been exceptional — I feel genuinely supported.',
  },
  {
    id: 'test-003',
    name: 'Nana Akua Twum',
    role: 'Youth Mentor — Youth Empowerment Programme',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'Watching my mentee go from uncertain and directionless to launching her own small business over 12 weeks was one of the most rewarding experiences of my professional life. I show up for these young people, and somehow they transform me in return. That is the JCF way.',
  },
  {
    id: 'test-004',
    name: 'David Asiedu-Antwi',
    role: 'Digital & Communications Volunteer — London Centre',
    avatar: '/images/placeholder-avatar.jpg',
    quote:
      'As a graphic designer, I spend most of my working life serving clients I have never met, for products I have no connection to. Volunteering my skills for JCF has reminded me why I fell in love with design in the first place — to communicate things that genuinely matter. It has been a genuine gift to my creative practice.',
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
    bio: 'Dr. Baffour Jan founded the Jan Cosmic Foundation in Accra in 1988 following two decades of intensive study in contemplative traditions across West Africa, India, and Southeast Asia. A scholar, teacher, and humanitarian, he has dedicated his life to demonstrating that inner transformation and outer service are not separate callings but one integrated path. Under his leadership, the JCF has grown from a small meditation circle in Airport Residential Area to an international community spanning five countries and reaching over 20,000 lives. He is the author of three books on consciousness and community, a sought-after retreat teacher, and above all, a deeply committed servant of the communities the JCF exists to serve.',
    image: '/images/placeholder-team.jpg',
  },
  {
    id: 'team-002',
    name: 'Abena Asante',
    role: 'Senior Teacher & Programme Director',
    bio: 'Abena Asante has been a core member of the JCF community since 2003 and a certified meditation teacher within the JCF lineage since 2009. As Programme Director, she oversees the development and delivery of all JCF training and educational offerings, including the Teacher Training Programme, the Youth Empowerment curriculum, and the annual retreat calendar. She holds a Master\'s degree in Mindfulness-Based Interventions from Bangor University and is passionate about making contemplative practice accessible across cultural and economic lines. She leads the Women\'s Wisdom Circle at the Accra Centre and is a regular contributor to the JCF blog.',
    image: '/images/placeholder-team.jpg',
  },
  {
    id: 'team-003',
    name: 'Kofi Mensah',
    role: 'Youth Coordinator & Meditation Teacher',
    bio: 'Kofi Mensah joined the JCF as a scholarship recipient in 2012 and returned as a staff member in 2018 — a journey that encapsulates the JCF\'s vision of transformation that gives back. As Youth Coordinator, he leads the Youth Empowerment Programme, manages the mentorship network, and serves as the primary point of contact for young people engaging with the JCF for the first time. A certified meditation teacher and trained life coach, Kofi brings warmth, energy, and lived experience to his work with young people. He co-authored the JCF Youth Mindfulness Curriculum and frequently speaks at schools and universities across Ghana.',
    image: '/images/placeholder-team.jpg',
  },
  {
    id: 'team-004',
    name: 'Maame Agyapong',
    role: 'Head of Community Partnerships & Outreach',
    bio: 'Maame Agyapong leads the JCF\'s relationships with partner organisations, government agencies, healthcare institutions, and international NGOs. With a background in public health and community development, she oversees the Medical Outreach Programme, the Community Service Days calendar, and the JCF\'s growing portfolio of collaborative projects with institutions such as the Ghana Health Service and the University of Ghana. Maame is a certified life coach and serves on the boards of two Ghana-based charitable organisations. Her work ensures that the JCF\'s service programmes are rooted in genuine community need and delivered with the highest standards of care and accountability.',
    image: '/images/placeholder-team.jpg',
  },
];
