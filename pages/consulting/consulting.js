document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'strategy': {
            label: 'STRATEGY',
            title: 'Build a client-ready analysis directly from your data.',
            desc: 'Associum compresses the information synthesis and drafting cycle into a single workflow, resulting in near-final deliverable, ready for your perspective and judgment.',
            features: [
                'Pulls market, competitor, and financial data into one structured view using preferred internal and external data sources.',
                'Proposes a narrative arc and slide structure from the analysis based on the goals of the engagement.',
                'Drafts the deck near-final with sourced charts and exhibits.',
                'You refine the storyline — your judgement, your recommendation.'
            ],
            sampleTitle: 'Strategy Engagement Deck',
            sampleDesc: 'Situation, options, recommendation, and roadmap, structured for C-suite review.'
        },
        'operations': {
            label: 'OPERATIONS',
            title: 'Go from process diagnostics to a detailed recommendation and business case.',
            desc: 'Associum provides the analysis and documentation so operations consultants can turn a current-state position into future-state recommendations and a business case their clients can approve.',
            features: [
                'Ingests process documentation, interview notes, and KPI data',
                'Structures findings into current-state versus future-state comparisons',
                'Drafts the business case with cost-benefit analysis built in.',
                'You focus on stakeholder buy-in and implementation design.'
            ],
            sampleTitle: 'Cost Optimisation Business Case',
            sampleDesc: 'Cost levers, financial model, and implementation plan, ready for client steering committee.'
        },
        'technology': {
            label: 'TECHNOLOGY',
            title: 'Complete a detailed technical review to a comprehensive board-ready recommendation.',
            desc: 'Associum provides the research, analysis and documentation needed for technology consultants to quickly grasp a client\'s technology architecture, evaluate vendors, and communicate recommendations a non-technical steering committee.',
            features: [
                'Reads vendor RFPs, technical specs, and architecture documents.',
                'Structures a roadmap or comparison against client evaluation criteria.',
                'Drafts the recommendation in plain, decision-ready language.',
                'More evaluations covered. Less time lost in translation.'
            ],
            sampleTitle: 'Technology & Digital Transformation Roadmap',
            sampleDesc: 'Current state, target architecture, sequenced roadmap, and dependencies, board-ready.'
        },
        'human-capital': {
            label: 'HUMAN CAPITAL',
            title: 'Articulate the stakeholder\'s vision in the organization design of clients.',
            desc: 'Associum compresses the research, analysis, and deliverable production cycle into a single workflow so human capital consultants can quickly produce insights for clients around leadership, HR, and frontline managers with the appropriate framing.',
            features: [
                'Takes org assessment data and workforce analytics as input',
                'Produces tailored materials for leadership, HR, and managers',
                'Drafts change communications consistent with the core narrative.',
                'Insights, updated with your perspective and judgement, adapted for key audiences.'
            ],
            sampleTitle: 'Org Design Change Pack',
            sampleDesc: 'Stakeholder-specific change materials built from a single org design assessment.'
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
