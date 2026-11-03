---
title: Home
layout: cssrc-main
linkButtons:
  - row:
      - text: RSVP
        link: https://my.cs.ubc.ca/event/2026/11/cs-student-research-conference-cssrc
      - text: Submission Information
        link: /cssrc/submissions/
        target: _self
  - row:
      - text: Join the Discord
        link: https://discord.gg/uWPuBTYwhs
      - text: Past Conference Page
        link: /cssrc/26
        target: _self
  - row:
      - text: Program Schedule
        link: "#program"
        target: _self
schedule:
  - event: "Registration & Light Breakfast"
    from: "8:30 AM"
    to: "9:00 AM"
  - event: Opening Remarks
    from: "9:00 AM"
    to: "9:15 AM"
  - event: Poster Session I
    link: "#posters"
    from: "9:15 AM"
    to: "10:00 AM"
  - event: Keynote by Dr. Hila Gonen
    link: "#keynote"
    from: "10:00 AM"
    to: "10:45 AM"
  - event: Break
    from: "10:45 AM"
    to: "11:00 AM"
  - event: Student Oral Presentations (Dual-Track)
    link: "#oral-presentations"
    from: "11:00 AM"
    to: "12:30 PM"
  - event: "Lunch & Networking*"
    from: "12:30 PM"
    to: "1:30 PM"
  - event: Technical Workshop by Mara Solen
    link: "#workshop-mara-solen"
    from: "1:30 PM"
    to: "2:00 PM"
  - event: Company Overview Workshop by Mundo AI
    link: "#workshop-mundo-ai"
    from: "2:00 PM"
    to: "2:30 PM"
  - event: Poster Session II
    link: "#posters"
    from: "2:30 PM"
    to: "3:15 PM"
  - event: Break
    from: "3:15 PM"
    to: "3:30 PM"
  - event: Research Career Panel
    link: "#panel"
    from: "3:30 PM"
    to: "4:30 PM"
  - event: Awards Ceremony
    from: "4:30 PM"
    to: "4:45 PM"
  - event: Closing Remarks
    from: "4:45 PM"
    to: "5:00 PM"
keynote:
  speaker: Dr. Hila Gonen
  photo: /files/cssrc/2026/hila-gonen.jpg
  title: "Beyond Accuracy: Different reliability dimensions in Language Models"
  abstract: |
    Unreliability remains one of the limiting factors in using language models (LMs) in real-world applications, specifically preventing safe deployment in sensitive domains.

    In this talk, Hila will present three lines of work that collectively examine reliability in LMs from different perspectives. First, she will introduce PhantomBench, a new benchmark designed to evaluate models' ability to abstain when appropriate. PhantomBench consists of non-existing terms and entities carefully constructed to probe whether models can abstain rather than hallucinate plausible-sounding but fabricated responses. Next, she will turn to the phenomenon of semantic leakage, where models leak irrelevant information from the prompt into the generation in unexpected ways, and explore its relationship to bias in model generation. Finally, she will present OMNIGUARD, a novel approach for detecting harmful prompts across languages and modalities.
panelists:
  - name: Dr. Kelsey Allen
    role: Panelist
    photo: /files/cssrc/2026/speakers/kelsey-allen.png
    bio: |
      Dr. Kelsey Allen is an Assistant Professor of Computer Science and Psychology at the University of British Columbia, bridging computational cognitive science, machine learning, and robotics.

      Her research explores how humans and machines adaptively solve complex challenges through innovative tool use and flexible problem-solving. With a background spanning physics, cognitive science, and artificial intelligence, including a PhD from MIT and research experience at DeepMind, Dr. Allen investigates the computational mechanisms that enable intelligent tool creation and environmental adaptation.
  - name: Dr. Payam Mousavi
    role: Panelist
    photo: /files/cssrc/2026/payam-mousavi.png
    bio: |
      Payam Mousavi is an Applied Research Scientist on the Advanced Technology team. He brings in over 10 years of experience developing AI/ML technologies for various industries such as manufacturing (Honeywell), oil and gas (Phase Technology), defense, security and robotics (MDA), and marketing and advertising (Unbounce).

      He enjoys working on multi-disciplinary projects involving many stakeholders, where his diverse experience can benefit the team. Payam's main technical interests and expertise are in machine vision and reinforcement learning.

      Payam received his PhD in Applied Physics from Simon Fraser University. His thesis involved the design, construction, and the mathematical modelling and optimization of a prototype industrial terahertz spectrometer to be used by Honeywell in their manufacturing plant, resulting in multiple patents and publications.
  - name: Dr. Roman Smirnov
    role: Panelist
    photo: /files/cssrc/2026/roman-smirnov.png
    bio: |
      Roman Smirnov is an Applied Scientist at Mundo AI. His work spans speech models, natural language processing, and large language models, with experience across academic research, technology commercialization, corporations, and startups.

      Having worked in different research and engineering environments, he is particularly drawn to Silicon Valley and Y Combinator startups for their challenging problems, opportunities for continuous and rapid learning, and support for creativity. He especially enjoys turning research into products through fast iteration and short feedback loops.

      Alongside his industry work, Roman pursues independent research into model behavior, efficient adaptation, and AI safety. He has achieved winning results in multiple NeurIPS competitions and shares his research and practical experience through technical articles, conference talks, and mentoring.

      Despite working at a company with "AI" in its name, he prefers to call things "models" or "ML."
  - name: Rubia Guerra
    role: Moderator
    photo: /files/cssrc/2026/rubia-guerra.png
    bio: |
      Rubia Guerra is a PhD student in Computer Science at the University of British Columbia, supervised by Karon MacLean and Margo Seltzer. Her research explores human-computer interaction, haptics, affective computing, and AI, with a focus on the connections between touch and emotion.

      Rubia led the first edition of the CS Student Research Conference and returns as moderator of this year’s Research Career Panel.
posters:
  - id: 22
    submittingAuthors: ["Jordan Lovrod"]
    title: "CTMC compression with application to DNA kinetics"
    authors:
      - names: "Jordan Lovrod, Boyan Beronov, Anne Condon"
        affiliation: "UBC"
    topics:
      - Applied Computing
      - Probabilistic Algorithms
      - Theory of Computation
  - id: 11
    submittingAuthors: ["Pranav Rajesh Krishnan"]
    title: "Self-Supervised Machine Learning for Modal Identification in Operating Wind Turbines Using Real-World Vibration Data"
    authors:
      - names: "Pranav Rajesh Krishnan, Mona Amer, Carlos E. Ventura"
        affiliation: "Earthquake Engineering Research Facility, Department of Civil Engineering, University of British Columbia"
    topics:
      - Applied Computing
      - Machine Learning
  - id: 23
    submittingAuthors: ["Frederick Shpilevskiy"]
    title: "Denoised Smoothing with Guiding: Certified Robustness in Joint Threat Models"
    authors:
      - names: "Frederick Shpilevskiy, Saiyue Lyu, Evan Shelhamer, Mathias Lécuyer"
        affiliation: "UBC"
    topics:
      - Machine Learning
  - id: 8
    submittingAuthors: ["Daniel Simoes Brandao"]
    title: "From Calendar Chaos to Formal Logic: An Interactive Planner Showing All UBC Course Prerequisites"
    authors:
      - names: "Daniel Simoes Brandao"
        affiliation: "University of British Columbia"
    topics:
      - Applied Computing
      - Machine Learning
  - id: 12
    submittingAuthors: ["Haeji Jung"]
    title: "PhantomBench: Benchmarking the Non-existential Threat of Language Models"
    authors:
      - names: "Haeji Jung, Hila Gonen"
        affiliation: "University of British Columbia"
    topics:
      - Natural Language Processing
  - id: 34
    submittingAuthors: ["Athreya Gollapally"]
    title: "Rashomon Analysis and Feature Importance Through a Web-based Application"
    authors:
      - names: "Athreya Gollapally, Rubia Guerra, Karon MacLean, Margo Seltzer"
        affiliation: "University of British Columbia"
    topics:
      - Machine Learning
  - id: 3
    submittingAuthors: ["Yilei Tu"]
    title: "Training Specialist Models without Reasoning Trajectories for Domain Expert Distillation"
    authors:
      - names: "Yilei Tu"
        affiliation: "University of British Columbia"
      - names: "Zihao Li"
        affiliation: "University of Helsinki"
      - names: "Shaoxiong Ji"
        affiliation: "ELLIS Institute Finland; University of Turku"
      - names: "Jörg Tiedemann"
        affiliation: "University of Helsinki"
      - names: "Fei Yuan"
        affiliation: "Shanghai Artificial Intelligence Laboratory"
    topics:
      - Machine Learning
      - Natural Language Processing
  - id: 32
    submittingAuthors: ["Tim Zhou"]
    title: "mAnyUp: Spatial Temporal Upsamplers of Remote Sensing Foundation Models"
    authors:
      - names: "Tim Zhou"
        affiliation: "UBC"
      - names: "Anthony Fuller"
        affiliation: "Vector"
      - names: "Geoff Pleiss, Evan Shelhamer"
        affiliation: "UBC"
    topics:
      - Computer Vision
      - Machine Learning
  - id: 33
    submittingAuthors: ["Vivian White", "Michika Hiratsuka"]
    title: "Green TTA: Benchmarking the Energy Consumption of Test-Time Adaptation"
    authors:
      - names: "Vivian White, Michika Hiratsuka, Evan Shelhamer"
        affiliation: "UBC"
    topics:
      - Computer Vision
  - id: 15
    submittingAuthors: ["Nielsen Cugito"]
    title: "Learned Differentiable Physics for Planning with and Designing Deformable-manipulation Tools"
    authors:
      - names: "Nielsen Cugito"
        affiliation: "University of British Columbia"
    topics:
      - Computer Vision
      - Machine Learning
oralPresentations:
  - id: 5
    submittingAuthors: ["Ananyaa Chopra"]
    title: "From Models to Megawatts: Efficiency and Environmental Impact of AI"
    authors:
      - names: "Ananyaa Chopra"
        affiliation: "University Of British Columbia"
      - names: "Giulia Toti"
        affiliation: "University of British Columbia"
    topics:
      - Applied Computing
      - Machine Learning
  - id: 4
    submittingAuthors: ["Jerry Liu"]
    title: "Linear List Groups: Square-Root-Time Access and Updates in a Simple Dynamic Sequence"
    authors:
      - names: "Jerry Liu, Andre Mello Fortes"
    topics:
      - Theory of Computation
  - id: 18
    submittingAuthors: ["Yabing Qi"]
    title: "Crowdsourced Misinformation Detection with Provable Guarantees via Online Learning"
    authors:
      - names: "Nicholas J. A. Harvey"
        affiliation: "University of British Columbia"
      - names: "Rebecca Lin"
        affiliation: "Massachusetts Institute of Technology"
      - names: "Victor S. Portella"
        affiliation: "Universidade Federal do ABC"
      - names: "Yabing Qi"
        affiliation: "University of British Columbia"
    topics:
      - Machine Learning
      - Probabilistic Algorithms
      - Theory of Computation
  - id: 25
    submittingAuthors: ["Shubhaankar Sharma"]
    title: "Bubbles: Exploring Local and Message-Delivery Interleavings in Distributed Systems"
    authors:
      - names: "Shubhaankar Sharma, Allan Tan, Arpan Gujarati, Ivan Beschastnikh"
        affiliation: "University of British Columbia"
    topics:
      - Formal Methods
      - Probabilistic Algorithms
  - id: 27
    submittingAuthors: ["Sammi Shih"]
    title: "Electric flows as oblivious routing schemes"
    authors:
      - names: "Sammi Shih"
        affiliation: "University of British Columbia"
    topics:
      - Theory of Computation
  - id: 9
    submittingAuthors: ["Vincent Geng Ji Tu"]
    title: "Evaluating Federated Learning under Real-World Time-Varying Bandwidth Conditions"
    authors:
      - names: "Vincent Geng Ji Tu"
        affiliation: "University of British Columbia"
      - names: "Mazhar Ali, David Choi"
        affiliation: "Soongsil University"
      - names: "Ivan Beschastnikh"
        affiliation: "University of British Columbia"
    topics:
      - Machine Learning
  - id: 29
    submittingAuthors: ["Alexandre St-Aubin"]
    title: "Dynamic Duos: Test-Time Adaptation of Asymmetric Duos with Stable Gated Updates"
    authors:
      - names: "Alexandre St-Aubin, Evan Shelhamer"
        affiliation: "UBC, Vector"
    topics:
      - Computer Vision
  - id: 24
    submittingAuthors: ["Hassaan Mohsin"]
    title: "Scalably Evolving ASTs in Scala"
    authors:
      - names: "Hassaan Mohsin, Finn Hackett, Ivan Beschastnikh"
        affiliation: "University of British Columbia"
    topics:
      - Formal Methods
  - id: 14
    submittingAuthors: ["Ryan Saloff"]
    title: "Machine Learning Approach for Classifying Homologous Recombination Deficiency from Shallow Whole Genome Sequencing Data"
    authors:
      - names: "Ryan Saloff"
        affiliation: "University of British Columbia"
    topics:
      - Applied Computing
      - Machine Learning
  - id: 17
    submittingAuthors: ["Kunhan Liang"]
    title: "SmartShaper: Intra-Datacenter Network Side-Channel Mitigation Using DPUs"
    authors:
      - names: "Kunhan Liang, Swati Goswami, Kha Dinh Duy"
        affiliation: "The University of British Columbia"
      - names: "Reto Achermann"
        affiliation: "Technical University of Munich"
      - names: "Margo Seltzer, Aastha Mehta"
        affiliation: "The University of British Columbia"
    topics:
      - Applied Computing
      - Operating Systems
      - Security and Privacy
  - id: 36
    submittingAuthors: ["Christopher Tardy"]
    title: "WAM-Mini: A Fully Configurable Causal Environment for Training Local World Action Models"
    authors:
      - names: "Christopher Tardy, Frank Wood"
        affiliation: "University of British Columbia"
    topics:
      - Computer Vision
      - Machine Learning
  - id: 39
    submittingAuthors: ["Freddie Zhang"]
    title: "Comparing Selection Methods in Mixtures of Linear Transforms"
    authors:
      - names: "Freddie Zhang"
        affiliation: "University of British Columbia"
      - names: "Neil Nair, Aidan Mokalla"
        affiliation: "Algoverse AI Research"
    topics:
      - Machine Learning
      - Natural Language Processing
  - id: 30
    submittingAuthors: ["Ning Ding"]
    title: "Toward Sound Verification of Concurrency-related eBPF Helper Calls in Linux"
    authors:
      - names: "Ning Ding, Yanze Li"
        affiliation: "University of British Columbia"
      - names: "Reto Achermann"
        affiliation: "Technical University of Munich"
      - names: "Alexander J. Summers, Ivan Beschastnikh"
        affiliation: "University of British Columbia"
    topics:
      - Formal Methods
      - Operating Systems
  - id: 26
    submittingAuthors: ["Adyesha Singhdeo"]
    title: "Predict, then Render: World Model for Action-Conditioned Dashboard Transitions"
    authors:
      - names: "Adyesha Singhdeo"
        affiliation: "UBC"
      - names: "Mir Rayat Imtiaz Hossain, Giuseppe Carenini, Amirhossein Dabiriaghdam, Amirhossein Abaskohi"
        affiliation: "UBC NLP Lab"
    topics:
      - Computer Vision
      - Machine Learning
  - id: 38
    submittingAuthors: ["Yennis Ye"]
    title: "A Multilinear Johnson-Lindenstrauss Transform with Subgaussian Entries"
    authors:
      - names: "Yennis Ye, Nick Harvey, Yaniv Plan"
        affiliation: "The University of British Columbia"
    topics:
      - Probabilistic Algorithms
      - Theory of Computation
  - id: 7
    submittingAuthors: ["Chhavi Nayyar"]
    title: "Towards Clinical Implementation of Artificial Intelligence in Cancer Care: Concept Mapping Analysis of Provincial Workshop Findings"
    authors:
      - names: "Chhavi Nayyar"
        affiliation: "University of British Columbia"
      - names: "Hong Hao Xu"
        affiliation: "University of Pittsburgh School of Medicine, Pittsburgh, PA, USA; Faculty of Medicine, University of British Columbia, Vancouver, BC, Canada"
      - names: "Daniel Hilbers"
        affiliation: "Faculty of Medicine, University of British Columbia, Vancouver, BC, Canada"
      - names: "Jonathan Avery"
        affiliation: "Supportive Care Service, BC Cancer, 600 West 10th Avenue, Vancouver, BC V5Z 4E6, Canada"
      - names: "Srinivas Raman"
        affiliation: "Division of Radiation Oncology, Department of Surgery, Faculty of Medicine, University of British Columbia; BC Cancer – Vancouver, 600 West 10th Avenue, Vancouver, BC V5Z 4E6, Canada"
      - names: "Alan T. Bates"
        affiliation: "Supportive Care Service, BC Cancer; Department of Psychiatry, Faculty of Medicine, University of British Columbia; BC Cancer, 600 West 10th Avenue, Vancouver, BC V5Z 4E6, Canada"
      - names: "Cristina Conati"
        affiliation: "Department of Computer Science, Faculty of Science, University of British Columbia, 2366 Main Mall, Vancouver, BC V6T 1Z4, Canada"
      - names: "Ahmad Fayaz–Bakhsh"
        affiliation: "School of Public Health, Tehran University of Medical Sciences, Tehran, Iran; Centre for Health Services and Policy Research, University of British Columbia, Vancouver, BC, Canada"
      - names: "John–Jose Nunez"
        affiliation: "Supportive Care Service, BC Cancer; Department of Psychiatry, Faculty of Medicine, University of British Columbia; BC Cancer, 600 West 10th Avenue, Vancouver, BC V5Z 4E6, Canada"
    topics:
      - Applied Computing
      - Computer Vision
      - Machine Learning
  - id: 10
    submittingAuthors: ["Dason (Xiao Yuan) Wang"]
    title: "Redistributive Ergonomics: Offshoring Keybinds To The Mouse For Bimanual Symmetry"
    authors:
      - names: "Dason (Xiao Yuan) Wang"
        affiliation: "The University of British Columbia"
    topics:
      - Applied Computing
  - id: 2
    submittingAuthors: ["Sean Dhanda"]
    title: "Characterizing Model-Specific Confidence-Accuracy Decoupling Under Controlled Feature Corruption"
    authors:
      - names: "Sean Dhanda"
        affiliation: "University of British Columbia"
    topics:
      - Machine Learning
  - id: 16
    submittingAuthors: ["Nielsen Cugito"]
    title: "Learned Differentiable Physics for Planning with and Designing Deformable-manipulation Tools"
    authors:
      - names: "Nielsen Cugito"
        affiliation: "University of British Columbia"
    topics:
      - Computer Vision
      - Machine Learning
workshops:
  - speaker: Mara Solen
    id: workshop-mara-solen
    photo: /files/cssrc/2026/mara-solen.jpg
    title: "Visualization: How Can You Make Yours Better? What Does the Field Look Like?"
    abstract: |
      Visualizations, also known as charts, plots, and graphs, are pervasive in science, industry, media, and elsewhere because of the strength of human perception and pattern recognition. However, designing visualizations that take full advantage of these human systems is not trivial; there are many factors that influence the effectiveness of a visualization, including perceptual accuracy, familiarity, and even user personal preference.

      In this workshop, Mara will first describe and use examples to illustrate how you can improve your visualizations by more deeply considering your goals. She will then explain what research in visualization looks like, both in the UBC InfoVis Group and in the broader field. She hopes that this workshop will expand your idea of what charts are and can be, give you a glimpse into the world of visualization research, and show you why researchers with many different backgrounds have chosen to work on visualization!
  - speaker: Kenneth Wu
    id: workshop-mundo-ai
    photo: /files/cssrc/2026/mundo-workshop.png
    photoAlt: Mundo AI
    title: "Meet Mundo AI: The Data Layer for Perceptual Intelligence"
    abstract: |
      AI models are moving past text and are now expected to understand speech and video as well. However, a lot of what gives real interaction its meaning never shows up in a transcript, like the pause before an answer, an interruption, or a shift in tone. Teaching models to pick up on these signals depends on data that captures them.

      In this workshop, Mundo AI co-founder Kenneth Wu first describes what Mundo AI does as a data and research partner to frontier AI labs, and how the company went from UBC to Y Combinator to a team of 55 in Vancouver. He then walks through what Mundo has built, from custom datasets and evaluations across audio, video, and emerging modalities to open research such as TurnBench. Finally, he talks about what working at Mundo looks like and the research, engineering, and program roles the team is hiring for. The workshop offers a closer look at the data work behind today’s AI models and shows where researchers and engineers from UBC can fit in.
sponsors:
  - tier: Gold
    colour: "#cb9726"
    orgs:
      - name: Google DeepMind
        imageLink: /files/cssrc/2026/sponsors/google_deepmind.svg
        siteLink: https://deepmind.google/research/
      - name: Mundo AI
        imageLink: /files/cssrc/2026/sponsors/mundo.svg
        siteLink: https://mundoai.world/
  - tier: Silver
    colour: "#9e9e9e"
    orgs:
      - name: Amii
        imageLink: /files/cssrc/2026/sponsors/amii.png
        siteLink: https://www.amii.ca/
      - name: CaterDash
        imageLink: /files/cssrc/2026/sponsors/caterdash.svg
        siteLink: https://www.caterdash.com/
        compactLogo: true
      - name: Jukebox
        imageLink: /files/cssrc/2026/sponsors/jukebox.svg
        siteLink: https://www.jukeboxprint.com/
        compactLogo: true
---
