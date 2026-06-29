document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'researchers': {
            label: 'RESEARCH',
            title: 'You have the sources. Getting to a structured view takes the rest of the day.',
            desc: 'Research pull takes the bulk of your time, leaving analysis, synthesis, and judgment to the end.',
            features: [
                'Pulls from your key data sources autonomously.',
                'Proposes a thesis and report structure.',
                'Drafts the report near-final with cited sources.',
                'You refine the view — your analysis, your judgment.'
            ],
            sampleTitle: 'Market Research Report',
            sampleDesc: 'Multi-source synthesis structured into a cited, near-final research deliverable.'
        },
        'public-markets': {
            label: 'PUBLIC MARKETS',
            title: 'Your view on every name goes stale the moment markets move.',
            desc: 'Every filing, transcript, and announcement updates the picture. Staying current across your full coverage takes hours.',
            features: [
                'Ingests filings, transcripts, and news in one pass.',
                'Structures findings against your existing research.',
                'Drafts the initiation report or earnings note.',
                'You focus on the model, the thesis, and the people.'
            ],
            sampleTitle: 'Equity Research Initiation Report',
            sampleDesc: 'Institutional-grade initiation coverage from investment thesis to valuation and risks.'
        },
        'private-markets': {
            label: 'PRIVATE MARKETS',
            title: 'You\'re making long-hold decisions from incomplete information.',
            desc: 'Document work accumulates at every deal stage, built from data that is unstructured, inconsistent, and never in the format you need.',
            features: [
                'Reads the full document set — CIM, data room, financials.',
                'Produces the right document at each deal milestone.',
                'Screening note to IC memo to quarterly portfolio review.',
                'More deal flow reviewed. More time on investment judgment.'
            ],
            sampleTitle: 'Private Equity Buyout IC Paper',
            sampleDesc: 'Full buyout IC paper from CIM and data room to deal thesis, returns, and recommendation.'
        },
        'private-bankers': {
            label: 'PRIVATE BANKS',
            title: 'House research arrives standard. Every client expects bespoke.',
            desc: 'Translating it for every client takes hours, repeated across a full book of business.',
            features: [
                'Takes house research and individual client context.',
                'Produces bespoke client communications from both.',
                'Answers client questions faster — the information is already processed.',
                'Shorter loop between client question and RM response.'
            ],
            sampleTitle: 'Customised Portfolio Commentary',
            sampleDesc: 'Client-specific investment commentary built from portfolio context and house research.'
        },
        'investor-relations': {
            label: 'INVESTOR RELATIONS',
            title: 'You own the fund narrative. Packaging it for every audience is the overhead.',
            desc: 'Quarterly reports, AGM decks, PPMs, DDQ responses — the same information has to land differently for every audience, every period, without exception.',
            features: [
                'Draws on fund data to draft reporting and marketing materials.',
                'DDQ responses completed faster — same information, less manual work.',
                'Press releases, investor updates, and Q&A prep on one platform.',
                'Each reporting cycle runs on the same foundation, consistently.'
            ],
            sampleTitle: 'DDQ Response',
            sampleDesc: 'Investor-ready DDQ responses drawn directly from fund data and existing documentation.'
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
