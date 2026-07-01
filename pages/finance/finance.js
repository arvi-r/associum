document.addEventListener('DOMContentLoaded', () => {
    const rolesData = {
        'researchers': {
            label: 'RESEARCH',
            title: 'Go deep, quickly as markets, companies, and new trends evolve.',
            desc: 'Associum pulls data from your trusted sources with deep web research to produce a well-cited fact base for your analysis and judgment.',
            features: [
                'Pulls data from multiple trusted data sources autonomously.',
                'Cross-references past trends and proposes a thesis.',
                'Drafts a near-final, well-cited report, based on your templates.',
                'Your analysis, your judgment completes the view.'
            ],
            sampleTitle: 'Market Research Report',
            sampleDesc: 'Multi-source synthesis structured into a cited, near-final research deliverable.'
        },
        'public-markets': {
            label: 'PUBLIC MARKETS',
            title: 'Track more names and update views as soon as the markets move.',
            desc: 'Associum quickly updates your company and industry models and reports in minutes as new news hits and earnings information gets released.',
            features: [
                'Ingests filings, transcripts, and news in one pass.',
                'Structures findings against your existing research.',
                'Reruns models and drafts the update note, earnings flash, or initiation report in your firm\'s format.',
                'You review, add perspective, and complete the analysis.'
            ],
            sampleTitle: 'Equity Research Initiation Report',
            sampleDesc: 'Institutional-grade initiation coverage from investment thesis to valuation and risks.'
        },
        'private-markets': {
            label: 'PRIVATE MARKETS',
            title: 'Get better transparency and build conviction faster despite incomplete and unstructured information.',
            desc: 'Associum synthesises information from data rooms, 3rd party datasets, and deep web research to build a clear, well-grounded perspective on deal opportunities.',
            features: [
                'Reads the full document set — CIM, data room, financials and enriches with other internal and external sources.',
                'Produce the key decision inputs - models, reports, updates - your firm need to make decisions.',
                'From screening note to IC memo to quarterly portfolio review.',
                'More deal flow reviewed.  More time for investment judgment and value creation.'
            ],
            sampleTitle: 'Private Equity Buyout IC Paper',
            sampleDesc: 'Full buyout IC paper from CIM and data room to deal thesis, returns, and recommendation.'
        },
        'private-bankers': {
            label: 'PRIVATE BANKS',
            title: 'Give clients a bespoke view from house research.  Respond to their questions with depth.',
            desc: 'Associum lets you give every client the service they deserve with personalised reports.',
            features: [
                'Add individual client context, like portfolio data and expressed risk preferences.',
                'Produces bespoke client communications from both.',
                'Answer clients\' questions on new products or portfolio positions faster based on your firm\'s internal data.',
                'Shorter loop between client question and RM response.'
            ],
            sampleTitle: 'Customised Portfolio Commentary',
            sampleDesc: 'Client-specific investment commentary built from portfolio context and house research.'
        },
        'investor-relations': {
            label: 'INVESTOR RELATIONS',
            title: 'Own the narrative and accelerate packaging it for every audience.',
            desc: 'Associum automates quarterly reports, AGM releases, DDQ responses, and news releases, tailored to the audience at hand.',
            features: [
                'Draws on fund data to draft reporting and marketing materials.',
                'Completes DDQ responses, adapting responses to specific questions using the same fact-base.',
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
