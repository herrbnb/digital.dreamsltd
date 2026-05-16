(function() {
            // ==================== DATA ====================
            const timelineData = [{
                date: '2019',
                title: 'Enrolled at UNN Nsukka',
                desc: 'Began undergraduate studies in Computer Science at the University of Nigeria, Nsukka — the foundation of my tech journey.',
                detail: 'Courses in algorithms, data structures, and software engineering ignited my passion for building digital solutions. I spent countless hours in the computer lab, hungry to learn more.'
            }, {
                date: '2021',
                title: 'Discovered Web Development',
                desc: 'Fell in love with HTML & CSS while building simple static pages. The ability to create something visible from code was exhilarating.',
                detail: 'I started with basic landing pages, experimenting with layouts, colors, and typography. This was the spark that led me deeper into frontend development.'
            }, {
                date: '2022',
                title: 'Joined Digital Dreams Ltd',
                desc: 'Landed my first tech role at Digital Dreams Ltd in Enugu — my official entry into the professional tech ecosystem.',
                detail: 'At Digital Dreams Ltd, I worked on real client projects, learned version control with Git, and collaborated with senior developers. This experience transformed me from a student into a professional.'
            }, {
                date: '2023',
                title: 'Mastered JavaScript Fundamentals',
                desc: 'Deep-dived into vanilla JavaScript — DOM manipulation, events, async programming, and ES6+ features.',
                detail: 'Building interactive UIs without frameworks taught me the core of how the web works. I built to-do apps, quiz games, and dynamic dashboards — all with vanilla JS.'
            }, {
                date: '2024',
                title: 'Fullstack Expansion',
                desc: 'Began exploring backend technologies — Node.js, Express, and databases — complementing frontend skills for fullstack capability.',
                detail: 'I built REST APIs, connected frontend interfaces to databases, and deployed fullstack applications. The ability to own an entire product end-to-end was empowering.'
            }, {
                date: '2025',
                title: 'Graduate Studies & Portfolio Building',
                desc: 'Continued with graduate studies in Computer Science at UNN while building a strong portfolio of web projects.',
                detail: 'Balancing academia with hands-on development, I focused on creating polished, production-ready projects that showcase both design sensibility and technical depth.'
            }, {
                date: '2026',
                title: 'Emerging Fullstack Developer',
                desc: 'Actively seeking opportunities to contribute to impactful projects — open to collaborations, freelance work, and full-time roles.',
                detail: 'With a solid foundation in HTML, CSS, JavaScript, and growing backend expertise, I\'m ready to take on challenging roles that push my skills further.'
            }];

            const projectsData = [{
                id: 'proj1',
                title: 'Responsive Landing Page',
                desc: 'A sleek, mobile-first landing page for a fictional SaaS product. Features smooth scroll navigation, animated hero section, and a pricing grid.',
                tags: ['HTML', 'CSS', 'JS'],
                thumbIcon: '🚀',
                thumbBg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                previewType: 'landing'
            }, {
                id: 'proj2',
                title: 'Task Dashboard UI',
                desc: 'A task management dashboard with interactive sidebar, statistics cards, progress bars, and a task list with status indicators.',
                tags: ['HTML', 'CSS', 'JS'],
                thumbIcon: '📊',
                thumbBg: 'linear-gradient(135deg, #0f2027, #203a43)',
                previewType: 'dashboard'
            }, {
                id: 'proj3',
                title: 'Product Gallery',
                desc: 'An e-commerce style product gallery with filter buttons, a grid layout, hover effects, and a simple cart counter.',
                tags: ['HTML', 'CSS', 'JS'],
                thumbIcon: '🛍️',
                thumbBg: 'linear-gradient(135deg, #1e1b2e, #2d1f3d)',
                previewType: 'gallery'
            }, {
                id: 'proj4',
                title: 'Personal Blog Template',
                desc: 'A clean blog layout with featured posts, category tags, a newsletter signup form, and a sticky navigation bar.',
                tags: ['HTML', 'CSS', 'JS'],
                thumbIcon: '📝',
                thumbBg: 'linear-gradient(135deg, #1a1a1a, #2c2c2c)',
                previewType: 'blog'
            }];

            // ==================== RENDER TIMELINE ====================
            const timelineContainer = document.getElementById('timeline-container');
            timelineData.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'timeline-item';
                div.setAttribute('data-tl-index', index);
                div.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${item.date}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-desc">${item.desc}</div>
                    <div class="timeline-detail">${item.detail}</div>
                `;
                div.addEventListener('click', function() {
                    // Remove active from all
                    document.querySelectorAll('.timeline-item').forEach(el => el.classList
                        .remove('active-tl'));
                    // Add active to clicked
                    this.classList.add('active-tl');
                    // Scroll into view if needed
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                });
                timelineContainer.appendChild(div);
            });
            // Activate the last (most recent) timeline item by default
            const allTimelineItems = document.querySelectorAll('.timeline-item');
            if (allTimelineItems.length > 0) {
                allTimelineItems[allTimelineItems.length - 1].classList.add('active-tl');
            }

            // ==================== RENDER PROJECTS ====================
            const projectsGrid = document.getElementById('projects-grid');
            projectsData.forEach(proj => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <div class="project-thumb" style="background:${proj.thumbBg};">
                        <span class="thumb-icon">${proj.thumbIcon}</span>
                        <div class="thumb-overlay"></div>
                    </div>
                    <div class="project-body">
                        <h3>${proj.title}</h3>
                        <p>${proj.desc}</p>
                        <div class="project-tags">
                            ${proj.tags.map(t => `<span>${t}</span>`).join('')}
                        </div>
                        <div class="project-actions">
                            <button class="btn btn-primary btn-sm live-preview-btn" data-proj-id="${proj.id}">👁️ Live Preview</button>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(card);
            });

            // ==================== MODAL LOGIC ====================
            const modalOverlay = document.getElementById('modal-overlay');
            const modalTitle = document.getElementById('modal-title');
            const modalPreviewContent = document.getElementById('modal-preview-content');
            const modalClose = document.getElementById('modal-close');

            function openModal(title, contentHTML) {
                modalTitle.textContent = title;
                modalPreviewContent.innerHTML = contentHTML;
                modalOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            }

            function closeModal() {
                modalOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }

            modalClose.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) closeModal();
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
            });

            // ==================== PREVIEW GENERATORS ====================
            function getPreviewHTML(projId) {
                switch (projId) {
                    case 'proj1':
                        return `
                            <div class="sim-preview">
                                <div class="sim-header">
                                    <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
                                    <span style="margin-left:8px;font-size:0.75rem;color:#888;">landing-page.html</span>
                                </div>
                                <div class="sim-body">
                                    <nav style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #e5e7eb;margin-bottom:16px;">
                                        <strong style="font-size:1.1rem;">SaaSify</strong>
                                        <div style="display:flex;gap:12px;font-size:0.8rem;color:#555;">
                                            <span>Features</span><span>Pricing</span><span>About</span>
                                        </div>
                                    </nav>
                                    <h4>Build Faster. Scale Smarter. 🚀</h4>
                                    <p style="color:#555;margin:8px 0;">The all-in-one platform for modern teams. Streamline your workflow and boost productivity by 3x.</p>
                                    <div style="display:flex;gap:8px;margin:12px 0;">
                                        <span class="sim-btn green">Get Started Free</span>
                                        <span class="sim-btn blue">Watch Demo</span>
                                    </div>
                                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px;">
                                        <div style="background:#e5e7eb;border-radius:6px;padding:14px;text-align:center;font-weight:700;">⚡ Fast</div>
                                        <div style="background:#e5e7eb;border-radius:6px;padding:14px;text-align:center;font-weight:700;">🔒 Secure</div>
                                        <div style="background:#e5e7eb;border-radius:6px;padding:14px;text-align:center;font-weight:700;">💰 Affordable</div>
                                    </div>
                                </div>
                            </div>`;
                    case 'proj2':
                        return `
                            <div class="sim-preview">
                                <div class="sim-header">
                                    <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
                                    <span style="margin-left:8px;font-size:0.75rem;color:#888;">dashboard.html</span>
                                </div>
                                <div class="sim-body dark-bg">
                                    <h4 style="margin-bottom:12px;">📊 Dashboard Overview</h4>
                                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px;">
                                        <div class="sim-card"><small style="color:#aaa;">Total Tasks</small><br><strong style="font-size:1.4rem;">48</strong></div>
                                        <div class="sim-card"><small style="color:#aaa;">Completed</small><br><strong style="font-size:1.4rem;">31</strong></div>
                                        <div class="sim-card"><small style="color:#aaa;">Pending</small><br><strong style="font-size:1.4rem;">17</strong></div>
                                    </div>
                                    <p style="margin:8px 0;font-weight:600;">Overall Progress</p>
                                    <div class="sim-progress"><div class="sim-progress-fill" style="width:65%;"></div></div>
                                    <p style="margin-top:12px;font-weight:600;">Recent Tasks</p>
                                    <div class="sim-card" style="display:flex;justify-content:space-between;"><span>✅ Design homepage</span><span class="sim-tag green-tag">Done</span></div>
                                    <div class="sim-card" style="display:flex;justify-content:space-between;"><span>🔄 API integration</span><span class="sim-tag blue-tag">In Progress</span></div>
                                    <div class="sim-card" style="display:flex;justify-content:space-between;"><span>⏳ Write tests</span><span class="sim-tag" style="background:#fef3c7;color:#92400e;">Pending</span></div>
                                </div>
                            </div>`;
                    case 'proj3':
                        return `
                            <div class="sim-preview">
                                <div class="sim-header">
                                    <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
                                    <span style="margin-left:8px;font-size:0.75rem;color:#888;">gallery.html</span>
                                </div>
                                <div class="sim-body">
                                    <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;">
                                        <span class="sim-btn green">All</span>
                                        <span style="padding:8px 14px;border-radius:20px;font-size:0.8rem;background:#e5e7eb;cursor:default;">👟 Shoes</span>
                                        <span style="padding:8px 14px;border-radius:20px;font-size:0.8rem;background:#e5e7eb;cursor:default;">⌚ Watches</span>
                                        <span style="padding:8px 14px;border-radius:20px;font-size:0.8rem;background:#e5e7eb;cursor:default;">👜 Bags</span>
                                    </div>
                                    <div class="sim-grid">
                                        <div class="sim-grid-item">👟<br>Sneaker Pro</div>
                                        <div class="sim-grid-item">⌚<br>Classic Watch</div>
                                        <div class="sim-grid-item">👜<br>Leather Bag</div>
                                        <div class="sim-grid-item">👟<br>RunX</div>
                                        <div class="sim-grid-item">⌚<br>Sport Band</div>
                                        <div class="sim-grid-item">👜<br>Tote Bag</div>
                                    </div>
                                    <p style="margin-top:10px;font-weight:700;">🛒 Cart: <span style="color:#14b869;">2 items</span></p>
                                </div>
                            </div>`;
                    case 'proj4':
                        return `
                            <div class="sim-preview">
                                <div class="sim-header">
                                    <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
                                    <span style="margin-left:8px;font-size:0.75rem;color:#888;">blog.html</span>
                                </div>
                                <div class="sim-body">
                                    <h4>📝 My Blog</h4>
                                    <p style="color:#555;margin-bottom:12px;">Thoughts on tech, design & life.</p>
                                    <div class="sim-card">
                                        <span class="sim-tag green-tag" style="margin-bottom:4px;">Technology</span>
                                        <strong style="display:block;">Why Vanilla JS Still Matters in 2026</strong>
                                        <small style="color:#888;">March 15, 2026 · 5 min read</small>
                                    </div>
                                    <div class="sim-card">
                                        <span class="sim-tag blue-tag" style="margin-bottom:4px;">Design</span>
                                        <strong style="display:block;">The Rise of Neubrutalism in Web Design</strong>
                                        <small style="color:#888;">February 28, 2026 · 7 min read</small>
                                    </div>
                                    <div class="sim-card">
                                        <span class="sim-tag green-tag" style="margin-bottom:4px;">Career</span>
                                        <strong style="display:block;">From UNN to the Tech Industry</strong>
                                        <small style="color:#888;">January 10, 2026 · 4 min read</small>
                                    </div>
                                    <div style="margin-top:12px;padding:12px;background:#f0fdf4;border-radius:8px;text-align:center;">
                                        <strong>📬 Subscribe to Newsletter</strong>
                                        <div style="display:flex;gap:6px;margin-top:6px;justify-content:center;">
                                            <input type="text" placeholder="your@email.com" style="padding:8px;border-radius:16px;border:1px solid #ccc;font-size:0.8rem;width:180px;" value="christian@example.com" readonly>
                                            <span class="sim-btn green">Subscribe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    default:
                        return '<p style="padding:20px;color:#888;">Preview not available.</p>';
                }
            }

            // ==================== ATTACH PREVIEW BUTTON EVENTS ====================
            document.querySelectorAll('.live-preview-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const projId = this.getAttribute('data-proj-id');
                    const project = projectsData.find(p => p.id === projId);
                    if (project) {
                        openModal('🔍 Live Preview: ' + project.title, getPreviewHTML(projId));
                    }
                });
            });

            // ==================== NAVIGATION ACTIVE STATE ====================
            const navLinks = document.querySelectorAll('.nav-links a');
            const sections = document.querySelectorAll('section, #timeline-section, #insights');
            window.addEventListener('scroll', function() {
                let current = '';
                const allSections = [...document.querySelectorAll('section')];
                const timelineSec = document.getElementById('timeline-section');
                const insightsSec = document.getElementById('insights');
                if (timelineSec) allSections.push(timelineSec);
                if (insightsSec) allSections.push(insightsSec);

                allSections.forEach(sec => {
                    const secTop = sec.offsetTop - 120;
                    if (window.scrollY >= secTop) {
                        current = sec.getAttribute('id') || '';
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href && href.includes(current) && current !== '') {
                        link.classList.add('active');
                    }
                });
                // If at very top, activate About
                if (window.scrollY < 200) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    const aboutLink = document.querySelector('.nav-links a[href="#about"]');
                    if (aboutLink) aboutLink.classList.add('active');
                }
            });

            console.log('✅ Christian Nwodo — Portfolio site ready!');
            console.log('🇳🇬 Built with passion from Enugu, Nigeria.');
            console.log('🎓 UNN Nsukka | 💼 Digital Dreams Ltd');
        })();