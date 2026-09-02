import {
  Treatment,
  Doctor,
  ClinicLocation,
  AppointmentRequest,
  BeforeAfterCase,
  FAQItem,
  EducationalArticle,
} from '../types';

export const CLINIC_NAME = 'Aneja Skin & Hair Centre';
export const CLINIC_TAGLINE = 'Personalized dermatology and aesthetic care backed by decades of clinical experience.';
export const CLINIC_CITY = 'Jalandhar, Punjab';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ps-aneja',
    name: 'Dr. P.S. Aneja',
    title: 'Senior Dermatologist & Aesthetic Physician',
    experience: '30+ Years Clinical Dermatology Experience',
    specialties: [
      'Clinical Dermatology',
      'Vitiligo Management',
      'Acne & Scar Treatments',
      'Dermatosurgery',
      'Chronic Skin Disorders',
    ],
    focusAreas:
      'Comprehensive clinical diagnosis, evidence-based dermatotherapy, phototherapy for vitiligo, and dermatosurgical management of recalcitrant skin conditions.',
    bio: 'Dr. P.S. Aneja is a respected senior dermatologist in Jalandhar with over three decades of clinical practice. Known for thorough diagnostic evaluations and patient-first care, Dr. Aneja has treated thousands of patients across Punjab for chronic dermatoses, vitiligo, acne disorders, and aesthetic concerns.',
    schedule: [
      {
        location: 'New Jawahar Nagar, Jalandhar',
        days: 'Monday – Saturday',
        timings: '10:30 AM – 2:00 PM & 5:00 PM – 7:30 PM',
      },
      {
        location: 'Nakodar Road, Jalandhar',
        days: 'Tuesday & Friday',
        timings: '3:00 PM – 4:30 PM',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'dr-simran-pal-aneja',
    name: 'Dr. Simran Pal Aneja',
    title: 'Dermatologist, Trichologist & Aesthetic Specialist',
    experience: 'Specialized in Advanced Laser & Hair Restoration',
    specialties: [
      'Hair Loss & Trichology (PRP, Mesotherapy, Transplant)',
      'Advanced Medical Lasers',
      'Acne Scar Resurfacing',
      'Facial Aesthetics & Peels',
      'Dermapen Micro-needling',
    ],
    focusAreas:
      'Contemporary laser therapies, Platelet-Rich Plasma (PRP), hair restoration protocols, advanced chemical peels, and precision skin resurfacing.',
    bio: 'Dr. Simran Pal Aneja brings modern, evidence-backed dermatological and aesthetic protocols to Aneja Skin & Hair Centre. Combining clinical expertise with advanced medical lasers and trichology techniques, Dr. Simran specializes in customized hair rejuvenation, scar remodeling, and medical skin therapies.',
    schedule: [
      {
        location: 'New Jawahar Nagar, Jalandhar',
        days: 'Monday – Saturday',
        timings: '11:00 AM – 3:00 PM & 5:30 PM – 8:00 PM',
      },
      {
        location: 'Nakodar Road, Jalandhar',
        days: 'Wednesday & Saturday',
        timings: '3:30 PM – 5:00 PM',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1594824813589-3221b6726c04?auto=format&fit=crop&q=80&w=800',
  },
];

export const LOCATIONS: ClinicLocation[] = [
  {
    id: 'new-jawahar-nagar',
    name: 'Aneja Skin & Hair Centre – New Jawahar Nagar',
    area: 'New Jawahar Nagar',
    address: 'Near Model Town Crossing, New Jawahar Nagar',
    city: 'Jalandhar, Punjab 144001',
    landmark: 'Opposite Central Park / Near Model Town Market',
    phone: '+91 181 222 4589',
    whatsapp: '+91 98140 12345',
    email: 'jawaharnagar@anejaskincentre.com',
    timings: 'Monday to Saturday: 10:00 AM – 7:30 PM',
    sundayTimings: 'Sunday: 10:30 AM – 1:30 PM (Prior Appointment)',
    mapQuery: 'New Jawahar Nagar, Jalandhar, Punjab',
    parkingAvailable: true,
    facilities: [
      'Dedicated Laser Procedure Suites',
      'PRP & Trichology Lab Unit',
      'Targeted Phototherapy Room',
      'Private Clinical Consultation Cabins',
      'Wheelchair Accessible',
    ],
  },
  {
    id: 'nakodar-road',
    name: 'Aneja Skin Clinic – Nakodar Road',
    area: 'Nakodar Road',
    address: 'Main Nakodar Road, Near Jyoti Chowk / Football Chowk',
    city: 'Jalandhar, Punjab 144003',
    landmark: 'Near Milestone Complex, Nakodar Road',
    phone: '+91 181 245 7890',
    whatsapp: '+91 98140 67890',
    email: 'nakodarroad@anejaskincentre.com',
    timings: 'Monday to Saturday: 10:30 AM – 6:30 PM',
    sundayTimings: 'Sunday: Closed',
    mapQuery: 'Nakodar Road, Jalandhar, Punjab',
    parkingAvailable: true,
    facilities: [
      'General Dermatology Consultation',
      'Minor Dermatosurgery & Wart/Tag Removal',
      'Skin Care & Chemical Peels',
      'Pharmacy & Topical Dispensing',
    ],
  },
];

export const TREATMENTS: Treatment[] = [
  {
    id: 'acne-and-scars',
    name: 'Acne & Acne Scars',
    category: 'Skin',
    shortDescription:
      'Targeted medical treatments for active breakouts, cyst reduction, and procedural scar revision including subcision and fractional lasers.',
    fullDescription:
      'Acne is a multi-factorial skin condition requiring an accurate clinical diagnosis of comedonal, inflammatory, or nodulocystic presentations. At Aneja Skin & Hair Centre, management is customized to patient age, skin type, and severity. For lingering acne scars, combination therapies such as subcision, chemical reconstruction of skin scars (CROSS), microneedling with Dermapen, and fractional laser skin resurfacing are evaluated by our dermatologists to promote collagen remodeling.',
    whoIsItFor: [
      'Individuals experiencing persistent active acne (papules, pustules, cysts)',
      'Patients with post-acne erythema or hyperpigmentation',
      'Individuals with atrophic acne scars (boxcar, rolling, or ice-pick scars)',
      'Those seeking a dermatologist-monitored oral or topical regimen',
    ],
    whatToExpect: {
      consultation:
        'A thorough examination of your skin type, hormonal triggers, previous medications, and scarring depth.',
      procedure:
        'In-office procedural sessions (chemical peels, comedone extraction, or laser revision) are performed under topical numbing when required.',
      recovery:
        'Mild redness or swelling lasting 24 to 72 hours depending on the intensity of the scar revision protocol.',
    },
    keyHighlights: [
      'Oral and topical prescription management',
      'Subcision for tethered rolling scars',
      'Medical chemical peels for active comedones',
      'Fractional laser resurfacing for texture improvement',
    ],
    estimatedDuration: '30 – 60 minutes per session',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    category: 'Laser',
    shortDescription:
      'Medical-grade diode and triple-wavelength laser systems for long-term reduction of unwanted facial and body hair.',
    fullDescription:
      'Laser hair removal is a clinical procedure that targets melanin in the hair follicle with concentrated light pulses, inhibiting future hair growth without damaging surrounding epidermal tissue. We utilize cooled medical diode and multi-wavelength laser technology calibrated specifically for Indian and Fitzpatrick skin types III–V to maximize efficacy and comfort.',
    whoIsItFor: [
      'Individuals seeking permanent reduction of unwanted body or facial hair',
      'Patients with recurrent folliculitis or ingrown hairs (pseudofolliculitis barbae)',
      'Women managing excess facial hair due to PCOS / hormonal imbalances',
    ],
    whatToExpect: {
      consultation:
        'Skin and hair color assessment, spot patch testing, and review of hormonal factors.',
      procedure:
        'Skin is cleaned, cooling gel applied, and the laser handpiece delivers pulses with integrated chill-tip contact cooling.',
      recovery:
        'Immediate return to daily activities. Sun protection (SPF 50+) and mild soothing lotion advised for 48 hours.',
    },
    keyHighlights: [
      'US-FDA recognized laser wavelength technology',
      'Advanced contact cooling for comfort',
      'Suitable for full body, face, underarms, and sensitive zones',
      'Custom fluence settings for Indian skin types',
    ],
    estimatedDuration: '15 – 90 minutes (depending on treatment area)',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'hair-transplant',
    name: 'Hair Transplant (FUE)',
    category: 'Hair',
    shortDescription:
      'Follicular Unit Extraction (FUE) surgical hair restoration performed in specialized clinical procedure suites for natural-looking density.',
    fullDescription:
      'Follicular Unit Extraction (FUE) involves harvesting individual, DHT-resistant hair follicular units from the donor area (typically the occipital scalp) and precisely implanting them into areas of thinning or balding. The procedure is performed under local anesthesia with careful attention to natural hairline angle, exit direction, and graft distribution.',
    whoIsItFor: [
      'Men experiencing Androgenetic Alopecia (male pattern baldness, Norwood stages II–VI)',
      'Individuals with stable hair loss seeking natural hairline restoration',
      'Patients with focal scarring alopecia or eyebrow thinning',
    ],
    whatToExpect: {
      consultation:
        'Trichoscopic scalp assessment, donor density calculation, hairline design mapping, and health pre-checks.',
      procedure:
        'Single-day procedure under local anesthesia. Grafts are carefully extracted, hydrated, and placed in micro-slits.',
      recovery:
        'Post-operative bandage removed after 24–48 hours. Scabs shed within 10–14 days. New hair growth begins around month 3–4.',
    },
    keyHighlights: [
      'Minimally invasive individual punch graft extraction',
      'No linear donor scar',
      'Artistic hairline design suited to facial symmetry',
      'Detailed post-procedure wash and trichology follow-ups',
    ],
    estimatedDuration: '4 – 7 hours (single-day procedure)',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'prp-hair-therapy',
    name: 'PRP (Platelet-Rich Plasma)',
    category: 'Hair',
    shortDescription:
      'Autologous growth factor therapy utilizing your own blood platelets to nourish hair follicles and reduce active hair thinning.',
    fullDescription:
      'Platelet-Rich Plasma (PRP) therapy is an established autologous biological treatment. A small sample of the patient’s blood is drawn and processed in a sterile centrifuge to concentrate platelets containing vital growth factors (PDGF, VEGF, TGF-beta). This platelet concentrate is then micro-injected into the scalp dermis to stimulate microcirculation, prolong the anagen (growth) phase, and strengthen weakened follicles.',
    whoIsItFor: [
      'Patients experiencing early to moderate diffuse hair thinning or shedding',
      'Individuals diagnosed with Androgenetic Alopecia or Telogen Effluvium',
      'Post-hair transplant patients seeking to accelerate graft vitality',
    ],
    whatToExpect: {
      consultation:
        'Dermatologist evaluation of scalp status, blood work review (iron, thyroid, vitamin D), and treatment schedule planning.',
      procedure:
        'Blood collection (15–20ml), high-grade double-spin centrifugation, scalp antiseptic preparation, and precision micro-injections.',
      recovery:
        'No downtime. Mild scalp tenderness for 12–24 hours. Normal shampooing can resume the following day.',
    },
    keyHighlights: [
      '100% autologous biological treatment with zero risk of allergic rejection',
      'High platelet yield concentration protocols',
      'Usually planned as a protocol of 3–5 monthly sessions',
      'Combined with dermatological medical management',
    ],
    estimatedDuration: '45 minutes',
    image:
      'https://images.unsplash.com/photo-1512290900672-1f4a13222e41?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    category: 'Skin',
    shortDescription:
      'Dermatologist-administered alpha and beta hydroxy acid formulations for skin tone evening, melasma, and texture refinement.',
    fullDescription:
      'Medical chemical peels apply clinical-grade exfoliating agents (such as Glycolic acid, Salicylic acid, Lactic acid, Mandelic acid, or TCA) under controlled exposure. By removing damaged superficial epidermal layers and stimulating cellular turnover, chemical peels help improve hyperpigmentation, superficial acne blemishes, sun damage, and uneven skin texture.',
    whoIsItFor: [
      'Individuals with epidermal melasma or stubborn post-inflammatory hyperpigmentation',
      'Patients with congested, oily skin and recurrent blackheads/whiteheads',
      'Those seeking skin radiance and smoother texture for special events',
    ],
    whatToExpect: {
      consultation:
        'Evaluation of skin sensitivity, priming regimen review, and selection of peel concentration.',
      procedure:
        'Skin cleansing, application of peeling agent with timed monitoring, neutralizing wash, and post-peel calming mask.',
      recovery:
        'Mild flaking or peeling between days 3 and 7. Strict daily sunscreen compliance is essential.',
    },
    keyHighlights: [
      'Superficial to medium-depth medical formulations',
      'Safe, monitored application by clinical staff',
      'Customized concoctions for pigmentation and acne',
      'Minimal downtime with visible skin clarity',
    ],
    estimatedDuration: '30 minutes',
    image:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'tattoo-birthmark-removal',
    name: 'Tattoo & Birthmark Removal',
    category: 'Laser',
    shortDescription:
      'Q-Switched and advanced laser systems to selectively fragment ink particles and pigmented birthmarks without skin damage.',
    fullDescription:
      'Laser removal of decorative tattoos, traumatic tattoos, and congenital or acquired pigmented lesions (such as Nevus of Ota, café-au-lait macules, or solar lentigines) works through selective photothermolysis. High-peak nanosecond or picosecond laser energy shatters pigment clusters into microscopic fragments, which the body’s lymphatic system naturally eliminates over subsequent weeks.',
    whoIsItFor: [
      'Individuals wishing to lighten or completely fade unwanted tattoos',
      'Patients with benign pigmented birthmarks seeking cosmetic clearance',
      'Individuals with cosmetic tattoo regrets (eyebrows/microblading correction)',
    ],
    whatToExpect: {
      consultation:
        'Ink composition assessment, tattoo age/depth analysis, skin phototype check, and estimated session requirement.',
      procedure:
        'Topical numbing applied for 30–45 minutes, protective eye shields, rapid laser pulsing with cooling air stream.',
      recovery:
        'Temporary frosting and crusting for 5–10 days. An antibiotic ointment and dry dressing are recommended.',
    },
    keyHighlights: [
      'Multi-wavelength capability (1064nm & 532nm)',
      'Selective targeting preserving surrounding skin integrity',
      'Gradual clearing over spaced sessions (6–8 weeks apart)',
    ],
    estimatedDuration: '20 – 45 minutes',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'mesotherapy-hair',
    name: 'Mesotherapy for Hair',
    category: 'Hair',
    shortDescription:
      'Direct micro-infusion of vitamins, minerals, peptides, and vasodilators into the scalp to nourish weakened hair roots.',
    fullDescription:
      'Scalp mesotherapy is a minimally invasive non-surgical procedure where a tailored cocktail of micronutrients, amino acids, biotin, and microcirculation enhancers is delivered directly into the mesoderm layer of the scalp. It bypasses the digestive system to ensure maximum bioavailability at the follicle base.',
    whoIsItFor: [
      'Early hair thinning and shedding (Telogen Effluvium)',
      'Dry, brittle hair lacking luster and nutritional support',
      'Adjunct therapy alongside oral medications and PRP',
    ],
    whatToExpect: {
      consultation:
        'Scalp assessment and formulation selection based on your specific hair condition.',
      procedure:
        'Micro-droplet injections across targeted scalp sections with minimal discomfort.',
      recovery:
        'Zero downtime; patients can resume normal daily routines immediately.',
    },
    keyHighlights: [
      'Targeted nutrient delivery directly to the follicle',
      'Quick in-office lunchtime procedure',
      'Complements systemic hair treatments',
    ],
    estimatedDuration: '30 minutes',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'dermapen-microneedling',
    name: 'Dermapen Micro-Needling',
    category: 'Aesthetic',
    shortDescription:
      'Automated medical-grade micro-needling for collagen induction, pore tightening, fine line smoothing, and scar remodeling.',
    fullDescription:
      'Dermapen is an advanced fractional micro-needling device that creates thousands of controlled, microscopic vertical channels in the epidermis and dermis. This controlled micro-injury triggers the body’s natural wound healing cascade, stimulating fibroblasts to produce new collagen and elastin fibers while enhancing topical serum absorption.',
    whoIsItFor: [
      'Patients with enlarged pores, uneven skin texture, or dullness',
      'Shallow acne scars, chickenpox scars, or surgical scars',
      'Early fine lines, photoaging, and skin laxity',
    ],
    whatToExpect: {
      consultation:
        'Skin examination and determination of needle depth (0.5mm to 2.5mm depending on treatment goal).',
      procedure:
        'Application of medical topical anesthetic for 30 minutes, followed by glide serums and automated Dermapen passes.',
      recovery:
        'Mild sunburn-like redness for 24–48 hours. Skin feels smoother within 7–10 days.',
    },
    keyHighlights: [
      'Adjustable needle depth for delicate facial zones',
      'Single-use sterile surgical needle cartridges',
      'Enhanced penetration of active hyaluronic acid serums',
    ],
    estimatedDuration: '45 minutes',
    image:
      'https://images.unsplash.com/photo-1512290903020-e79435b6c310?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'vitiligo-treatment',
    name: 'Vitiligo Treatment',
    category: 'Vitiligo',
    shortDescription:
      'Comprehensive clinical management including targeted phototherapy (NB-UVB), topical immunomodulators, and surgical grafting for stable patches.',
    fullDescription:
      'Vitiligo is a chronic autoimmune condition where melanocytes (pigment-producing cells) are selectively targeted, resulting in depigmented patches. At Aneja Skin & Hair Centre, vitiligo care focuses on stabilizing active progression, stimulating repigmentation through Narrowband UVB phototherapy and medical regimens, and evaluating surgical options (such as suction blister epidermal grafting or punch grafting) for long-standing stable lesions.',
    whoIsItFor: [
      'Patients with newly appearing or expanding depigmented white patches',
      'Individuals with focal, segmental, or generalized vitiligo seeking repigmentation',
      'Patients with stable vitiligo seeking surgical melanocyte transfer',
    ],
    whatToExpect: {
      consultation:
        'Wood’s lamp / dermoscopic examination, disease activity assessment (VIDA score), and customized therapeutic planning.',
      procedure:
        'Phototherapy sessions take just a few minutes in specialized cabins, gradually increasing doses based on skin response.',
      recovery:
        'Non-invasive phototherapy requires no downtime; regular follow-ups every 4 to 8 weeks ensure safe monitoring.',
    },
    keyHighlights: [
      'Over three decades of clinical experience in vitiligo management in Punjab',
      'Targeted Narrowband UVB phototherapy equipment',
      'Evidence-based combination protocols (topicals, phototherapy, oral pulse therapy)',
      'Surgical grafting evaluation for stable patches',
    ],
    estimatedDuration: '15 – 30 minutes per phototherapy session',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'face-body-contouring',
    name: 'Face & Body Contouring',
    category: 'Aesthetic',
    shortDescription:
      'Non-invasive aesthetic procedures for skin tightening, jawline definition, and localized tone enhancement.',
    fullDescription:
      'Non-surgical face and body contouring utilizes advanced radiofrequency (RF) and ultrasound thermal energy to stimulate deep dermal collagen contraction and subcutaneous fat tissue remodeling. These treatments help define the jawline, firm mild submental skin laxity, and improve body skin texture without incisions or surgical downtime.',
    whoIsItFor: [
      'Individuals noticing mild to moderate skin laxity along the jawline or neck',
      'Patients seeking subtle non-surgical lifting and firming',
      'Post-weight-loss or postpartum localized skin texture improvement',
    ],
    whatToExpect: {
      consultation:
        'Assessment of tissue elasticity, fat distribution, and realistic aesthetic outcome mapping.',
      procedure:
        'Application of contact ultrasound gel and systematic gliding of the thermal applicator; patients experience a warm sensation.',
      recovery:
        'Immediate return to work. Skin may have a temporary rosy flush for a few hours.',
    },
    keyHighlights: [
      'Non-invasive with zero surgical recovery downtime',
      'Stimulates long-term natural neocollagenesis',
      'Comfortable in-clinic treatment',
    ],
    estimatedDuration: '45 – 60 minutes',
    image:
      'https://images.unsplash.com/photo-1512290746430-3ffb4fab31bc?auto=format&fit=crop&q=80&w=800',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-acne-scars',
    treatmentId: 'acne-and-scars',
    treatmentName: 'Acne Scar Revision (Subcision + Fractional Laser)',
    category: 'Skin',
    headline: 'Significant depth reduction in rolling & boxcar scars',
    clinicalDetails:
      'Patient presented with moderate facial scarring. Managed with 3 sessions of subcision combined with fractional laser resurfacing over a 5-month period.',
    duration: '5 Months',
    sessions: '3 Sessions',
    beforeImage:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    afterImage:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'case-hair-prp',
    treatmentId: 'prp-hair-therapy',
    treatmentName: 'PRP Scalp Therapy + Trichology Protocol',
    category: 'Hair',
    headline: 'Increased hair shaft density & reduced active shedding',
    clinicalDetails:
      'Patient with Grade 3 vertex thinning. 4 monthly sessions of high-concentration autologous PRP supported by medical topical maintenance.',
    duration: '6 Months',
    sessions: '4 Sessions',
    beforeImage:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    afterImage:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'case-laser-hair',
    treatmentId: 'laser-hair-removal',
    treatmentName: 'Triple Wavelength Laser Hair Reduction',
    category: 'Laser',
    headline: 'Near-total reduction in coarse facial & chin hair',
    clinicalDetails:
      'Patient with hormonal hirsutism managed in coordination with medical care. 6 spaced laser sessions yielded smooth skin texture with no folliculitis.',
    duration: '7 Months',
    sessions: '6 Sessions',
    beforeImage:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    afterImage:
      'https://images.unsplash.com/photo-1512290900672-1f4a13222e41?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'case-vitiligo',
    treatmentId: 'vitiligo-treatment',
    treatmentName: 'Narrowband UVB Phototherapy & Topical Repigmentation',
    category: 'Vitiligo',
    headline: 'Follicular & marginal repigmentation in focal vitiligo',
    clinicalDetails:
      'Stable focal vitiligo on upper extremity treated with targeted NB-UVB bi-weekly sessions combined with topical immunomodulators.',
    duration: '6 Months',
    sessions: '24 Bi-weekly Sessions',
    beforeImage:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    afterImage:
      'https://images.unsplash.com/photo-1512290746430-3ffb4fab31bc?auto=format&fit=crop&q=80&w=600',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I book an initial consultation with Dr. Aneja?',
    answer:
      'You can request an appointment directly through this website by selecting your consultation type, preferred doctor, and convenient time slot. Our clinic reception team reviews all requests and confirms your time via phone or WhatsApp message.',
    category: 'Consultation',
  },
  {
    question: 'What should I bring for my first dermatology visit?',
    answer:
      'Please bring any previous prescription slips, list of current skincare products or medications, relevant blood test reports (if any), and arrive 10 minutes prior to your allocated slot for quick registration.',
    category: 'Consultation',
  },
  {
    question: 'Are laser and cosmetic treatments safe for all skin tones?',
    answer:
      'Yes. At Aneja Skin & Hair Centre, our medical lasers and peeling agents are specifically chosen and calibrated for Indian skin tones (Fitzpatrick skin types III to V), prioritizing safety, cooling protection, and minimal risk of post-inflammatory pigmentation.',
    category: 'Treatments',
  },
  {
    question: 'Where are your clinics located in Jalandhar?',
    answer:
      'We have two accessible clinic locations in Jalandhar: our primary centre at New Jawahar Nagar (near Model Town crossing) and our branch clinic on Nakodar Road. Both locations offer convenient parking and consultation facilities.',
    category: 'Location',
  },
  {
    question: 'Do you offer online or video consultations?',
    answer:
      'In-person clinical examination is always recommended for accurate dermatoscopic evaluation. For out-of-station follow-up patients, tele-consultation slots can be coordinated with the reception upon request.',
    category: 'General',
  },
];

export const INITIAL_MOCK_APPOINTMENTS: AppointmentRequest[] = [
  {
    id: 'REQ-1042',
    patientName: 'Gurpreet Singh',
    phone: '+91 98765 43210',
    email: 'gurpreet.s@example.com',
    appointmentType: 'Hair Consultation',
    doctorId: 'dr-simran-pal-aneja',
    doctorName: 'Dr. Simran Pal Aneja',
    locationId: 'new-jawahar-nagar',
    locationName: 'New Jawahar Nagar, Jalandhar',
    date: '2026-09-02',
    timeSlot: '11:30 AM',
    message: 'Experiencing sudden crown thinning over the past 4 months. Interested in PRP assessment.',
    isFirstVisit: true,
    status: 'Confirmed',
    createdAt: '2026-09-01T09:30:00Z',
  },
  {
    id: 'REQ-1043',
    patientName: 'Harleen Kaur',
    phone: '+91 98141 87654',
    email: 'harleen.k@example.com',
    appointmentType: 'Skin Treatment Consultation',
    doctorId: 'dr-ps-aneja',
    doctorName: 'Dr. P.S. Aneja',
    locationId: 'new-jawahar-nagar',
    locationName: 'New Jawahar Nagar, Jalandhar',
    date: '2026-09-02',
    timeSlot: '01:00 PM',
    message: 'Persistent adult acne and hyperpigmentation on cheeks. Need clinical review.',
    isFirstVisit: false,
    status: 'Confirmed',
    createdAt: '2026-09-01T14:15:00Z',
  },
  {
    id: 'REQ-1044',
    patientName: 'Rajesh Sharma',
    phone: '+91 94172 34567',
    email: 'rajesh.sharma@example.com',
    appointmentType: 'Vitiligo Evaluation',
    doctorId: 'dr-ps-aneja',
    doctorName: 'Dr. P.S. Aneja',
    locationId: 'nakodar-road',
    locationName: 'Nakodar Road, Jalandhar',
    date: '2026-09-02',
    timeSlot: '03:30 PM',
    message: 'Follow-up for targeted phototherapy session.',
    isFirstVisit: false,
    status: 'Pending',
    createdAt: '2026-09-02T05:00:00Z',
  },
  {
    id: 'REQ-1045',
    patientName: 'Manpreet Sandhu',
    phone: '+91 99150 99887',
    email: 'manpreet.s@example.com',
    appointmentType: 'Laser Consultation',
    doctorId: 'dr-simran-pal-aneja',
    doctorName: 'Dr. Simran Pal Aneja',
    locationId: 'new-jawahar-nagar',
    locationName: 'New Jawahar Nagar, Jalandhar',
    date: '2026-09-03',
    timeSlot: '12:00 PM',
    message: 'Full face laser hair removal consultation and patch test.',
    isFirstVisit: true,
    status: 'Pending',
    createdAt: '2026-09-02T06:10:00Z',
  },
  {
    id: 'REQ-1046',
    patientName: 'Aman Deep',
    phone: '+91 98881 22334',
    email: 'aman.deep@example.com',
    appointmentType: 'Dermatology Consultation',
    doctorId: 'dr-ps-aneja',
    doctorName: 'Dr. P.S. Aneja',
    locationId: 'new-jawahar-nagar',
    locationName: 'New Jawahar Nagar, Jalandhar',
    date: '2026-09-04',
    timeSlot: '05:30 PM',
    message: 'Seasonal eczema flare on hands.',
    isFirstVisit: true,
    status: 'Pending',
    createdAt: '2026-09-02T06:25:00Z',
  },
];

export const EDUCATIONAL_ARTICLES: EducationalArticle[] = [
  {
    id: 'edu-1',
    topic: 'Post-Acne Care',
    title: 'Understanding Post-Acne Hyperpigmentation & Clinical Approaches',
    excerpt: 'Why dark marks linger after breakouts, the physiological difference between erythema and melanin deposits, and how dermatologists combine targeted peels with barrier repair.',
    readTime: '3 min read',
    category: 'Dermatology Insights',
  },
  {
    id: 'edu-2',
    topic: 'Hair & Trichology',
    title: 'When to Consider Autologous PRP Therapy for Hair Thinning',
    excerpt: 'A clinical look at how platelet-rich plasma stimulates miniaturized follicles in early androgenetic alopecia, session timelines, and combining treatments with medical management.',
    readTime: '4 min read',
    category: 'Trichology Guidance',
  },
  {
    id: 'edu-3',
    topic: 'Aesthetic Science',
    title: 'Sun Protection & Barrier Health: Medical Photoprotection Essentials',
    excerpt: 'Navigating broad-spectrum filters for North Indian weather, non-comedogenic formulations for acne-prone skin, and preventing UV-induced pigmentation exacerbation.',
    readTime: '3 min read',
    category: 'Skincare Science',
  },
];
