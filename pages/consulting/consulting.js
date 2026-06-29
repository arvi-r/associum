document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'strategy': {
            label: 'STRATEGY',
            title: 'From analysis to client-ready narrative.',
            desc: 'Strategy consultants spend most of their time turning market and competitive analysis into a story a client can act on. Associum compresses the synthesis and drafting cycle into a single workflow.',
            features: [
                'Pulls market, competitor, and financial data into one structured view.',
                'Proposes a narrative arc and slide structure from the analysis.',
                'Drafts the deck near-final with sourced charts and exhibits.',
                'You refine the storyline — your judgement, your recommendation.'
            ],
            sampleTitle: 'Strategy Engagement Deck.',
            sampleDesc: 'Situation, options, recommendation, and roadmap, structured for C-suite review.'
        },
        'operations': {
            label: 'OPERATIONS',
            title: 'From diagnostic to implementation plan.',
            desc: 'Operations engagements require mapping current state processes and identifying bottlenecks. Associum reads process documents, data logs, and interview transcripts to draft structured improvement roadmaps.',
            features: [
                'Synthesizes process maps and operational diagnostics.',
                'Identifies bottlenecks and efficiency opportunities.',
                'Drafts implementation plans and process manuals.',
                'You deliver the execution — your expertise, your implementation guidance.'
            ],
            sampleTitle: 'Operational Improvement Roadmap.',
            sampleDesc: 'Current state assessment, efficiency opportunities, and implementation roadmap.'
        },
        'technology': {
            label: 'TECHNOLOGY',
            title: 'From architecture review to system selection.',
            desc: 'Technology practices evaluate system landscapes and select software vendors. Associum reads RFP responses, system requirements, and architecture specs to draft vendor evaluation matrices.',
            features: [
                'Compares vendor specs and RFP responses side-by-side.',
                'Maps system architecture options and trade-offs.',
                'Drafts selection recommendations and roadmap plans.',
                'You align the stakeholders — your architectural expertise, your vendor recommendations.'
            ],
            sampleTitle: 'Vendor Selection Memo.',
            sampleDesc: 'System architecture options, vendor evaluations, and final selection recommendations.'
        },
        'human-capital': {
            label: 'HUMAN CAPITAL',
            title: 'From org design to change management.',
            desc: 'Human Capital teams structure organizations and plan talent transitions. Associum reads role definitions, competency matrices, and survey data to draft organizational change plans.',
            features: [
                'Maps competency requirements and structural changes.',
                'Synthesizes employee survey and culture diagnostics.',
                'Drafts change communications and transition guides.',
                'You lead the transition — your change leadership, your organizational design.'
            ],
            sampleTitle: 'Organization Design Memo.',
            sampleDesc: 'Target operating model, role mappings, and change management plan.'
        }
    };

    const tabs = document.querySelectorAll('.role-tab');
    const contentLabel = document.getElementById('role-content-label');
    const contentTitle = document.getElementById('role-content-title');
    const contentDesc = document.getElementById('role-content-desc');
    const featuresList = document.getElementById('role-features-list');
    const sampleTitle = document.getElementById('role-sample-title');
    const sampleDesc = document.getElementById('role-sample-desc');

    function updateContent(roleId) {
        const data = rolesData[roleId];
        if (!data) return;

        // Add a simple fade effect
        const contentBox = document.querySelector('.role-content');
        contentBox.style.transition = 'opacity 0.2s ease';
        contentBox.style.opacity = '0';

        setTimeout(() => {
            contentLabel.textContent = data.label;
            contentTitle.textContent = data.title;
            contentDesc.textContent = data.desc;

            // Update features
            featuresList.innerHTML = '';
            data.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#37B793" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${feature}</span>
                `;
                featuresList.appendChild(li);
            });

            sampleTitle.textContent = data.sampleTitle;
            sampleDesc.textContent = data.sampleDesc;

            contentBox.style.opacity = '1';
        }, 200);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            tab.classList.add('active');

            // Update content
            const role = tab.getAttribute('data-role');
            updateContent(role);
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                otherItem.querySelector('.faq-icon').textContent = '+';
            });

            // Toggle clicked
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
});
